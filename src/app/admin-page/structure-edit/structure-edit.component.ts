import {Component, OnInit} from '@angular/core';
import {LocalStorageService} from "../../services/local-storage/local-storage.service";
import {ActivatedRoute, Router} from "@angular/router";
import {StructureElement} from "../../models/structure-element.model";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
    selector: 'structure-edit',
    templateUrl: './structure-edit.component.html',
    styleUrls: ['./structure-edit.component.css']
})

export class StructuresEditComponent implements OnInit {
    structureForm: FormGroup = new FormGroup({
        name: new FormControl('', [Validators.required, Validators.min(3)]),
        template: new FormControl('', [Validators.required])
    });

    id: number;
    structure: StructureElement = {
        active: false,
        name: '',
        template: null
    };

    constructor(private storageService: LocalStorageService, private route: ActivatedRoute, private router: Router) {
    }

    ngOnInit() {
        let data = this.storageService.getItem('structure_data');
        this.route.params.subscribe(params => {
            if (params.id) {
                this.id = params.id;
                this.structure = data[this.id];
            }
        });
    }

    saveStructure(): void {
        let data = this.storageService.getItem('structure_data');
        if (this.id) {
            data.splice(this.id, 1, this.structure);
        } else {
            data.push(this.structure);
        }
        this.storageService.setItem('structure_data', data);
        this.router.navigateByUrl('/admin-page');
    }

    getNameErrorMessage() {
        return this.structureForm.controls.name.hasError('required') ? 'Вы должны ввести значение' :
            this.structureForm.controls.name.hasError('min') ? 'Минимальное количество символов 3' :
                '';
    }

    getTemplateErrorMessage() {
        return this.structureForm.controls.template.hasError('required') ? 'Вы должны выбрать шаблон' :
            '';
    }
}
