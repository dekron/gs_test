import {Component, OnInit} from '@angular/core';
import {LocalStorageService} from "../../../services/local-storage/local-storage.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Source} from "../../../models/structure-element.model";

@Component({
    selector: 'structure-edit',
    templateUrl: './structure-edit.component.html',
    styleUrls: ['./structure-edit.component.css']
})

export class StructuresEditComponent implements OnInit {
    id: number;
    sourceList: Source[];
    structureForm: FormGroup = new FormGroup({
        active: new FormControl(false),
        name: new FormControl('', [Validators.required, Validators.minLength(3)]),
        template: new FormControl('', [Validators.required]),
        blocks: new FormArray([this._createBlockRow()])
    });

    constructor(private storageService: LocalStorageService, private route: ActivatedRoute, private router: Router, private formBuilder: FormBuilder) {
    }

    ngOnInit() {
        this.sourceList = this.storageService.getItem('sources');
        let structureData = this.storageService.getItem('structure_data');
        this.route.params.subscribe(params => {
            if (params.id) {
                this.id = params.id;
                let bindFormData = structureData[this.id];
                let blocks = this.structureForm.get('blocks') as FormArray;
                for (let i = 0; i < bindFormData.blocks.length - 1; i++) {
                    blocks.push(this._createBlockRow());
                }
                this.structureForm.setValue(bindFormData);
            }
        });
    }

    saveStructure(): void {
        let data = this.storageService.getItem('structure_data') || [];
        if (this.id) {
            data.splice(this.id, 1, this.structureForm.getRawValue());
        } else {
            data.push(this.structureForm.getRawValue());
        }
        this.storageService.setItem('structure_data', data);
        this.router.navigateByUrl('/admin');
    }

    getNameErrorMessage() {
        return this.structureForm.controls.name.hasError('required') ? 'Вы должны ввести значение' :
            this.structureForm.controls.name.hasError('minlength') ? 'Минимальное количество символов 3' :
                '';
    }

    getTemplateErrorMessage() {
        return this.structureForm.controls.template.hasError('required') ? 'Вы должны выбрать шаблон' :
            '';
    }

    getBlocksErrorMessage(type: FormControl) {
        return type.hasError('required') ? 'Вы должны выбрать блок' :
            '';
    }

    addBlock(): void {
        let formBlocksArray = this.structureForm.get('blocks') as FormArray;
        formBlocksArray.push(this._createBlockRow());
    }

    removeBlock(index: number): void {
        let formBlocksArray = this.structureForm.get('blocks') as FormArray;
        formBlocksArray.removeAt(index);
    }

    _createBlockRow() {
        return new FormGroup({
            type: new FormControl('', Validators.required),
            source: new FormControl('', Validators.required)
        })
    }
}
