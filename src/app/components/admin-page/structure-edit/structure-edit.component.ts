import {Component, OnInit} from '@angular/core';
import {LocalStorageService} from "../../../services/local-storage/local-storage.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
    selector: 'structure-edit',
    templateUrl: './structure-edit.component.html',
    styleUrls: ['./structure-edit.component.css']
})

export class StructuresEditComponent implements OnInit {
    id: number;
    structureForm: FormGroup = new FormGroup({
        active: new FormControl(''),
        name: new FormControl('', [Validators.required, Validators.minLength(3)]),
        template: new FormControl('', [Validators.required])
    });

    constructor(private storageService: LocalStorageService, private route: ActivatedRoute, private router: Router) {
    }

    ngOnInit() {
        let data = this.storageService.getItem('structure_data');
        this.route.params.subscribe(params => {
            if (params.id) {
                this.id = params.id;
                this.structureForm.setValue(data[this.id]);
            }
        });
    }

    saveStructure(): void {
        let data = this.storageService.getItem('structure_data');
        if (this.id) {
            data.splice(this.id, 1, this.structureForm.getRawValue());
        } else {
            data.push(this.structureForm.getRawValue());
        }
        this.storageService.setItem('structure_data', data);
        this.router.navigateByUrl('/admin-page');
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
}
