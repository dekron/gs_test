import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {StructuresEditComponent} from "./structure-edit.component";
import {AppModule} from "../../../app.module";
import {APP_BASE_HREF} from "@angular/common";

describe('StructuresEditComponent', () => {
    let fixture: ComponentFixture<StructuresEditComponent>;
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                AppModule
            ],
            providers: [{provide: APP_BASE_HREF, useValue: '/'}]
        }).compileComponents();
        fixture = TestBed.createComponent(StructuresEditComponent);
    });

    it('load form with false validation data', async(() => {
        let component = fixture.componentInstance;
        component.structureForm.setValue({active: false, name: 'C', template: '0'});
        fixture.detectChanges();
        expect(component.structureForm.invalid)
            .toEqual(true);
    }));

    it('load form with true validation data', async(() => {
        let component = fixture.componentInstance;
        component.structureForm.setValue({active: false, name: 'Структура', template: '0'});
        expect(component.structureForm.invalid)
            .toEqual(false);
    }));
});
