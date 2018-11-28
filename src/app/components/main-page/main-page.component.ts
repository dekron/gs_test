import {Component, ComponentFactoryResolver, OnInit, Type, ViewChild, ViewContainerRef} from '@angular/core';
import {LocalStorageService} from "../../services/local-storage/local-storage.service";
import {StructureElement} from "../../models/structure-element.model";

@Component({
    selector: 'main-page',
    templateUrl: './main-page.component.html',
    styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
    @ViewChild('structurePlace', {read: ViewContainerRef}) structurePlace: ViewContainerRef;

    constructor(private componentFactoryResolver: ComponentFactoryResolver, private storageService: LocalStorageService) {

    }

    ngOnInit(): void {
        let structureData = this.storageService.getItem('structure_data') as StructureElement[] || [];
        let activeStructure = structureData.find(structure => structure.active === true);
        if (activeStructure) {
            this._initStructure(activeStructure);
        }

    }

    _initStructure(structure: StructureElement) {
        let factories = Array.from(this.componentFactoryResolver['_factories'].keys());
        let factoryClass = factories.find((x: any) => x.name === structure.template) as Type<any>;
        const factory = this.componentFactoryResolver.resolveComponentFactory(factoryClass);
        this.structurePlace.clear();
        let obj = this.structurePlace.createComponent(factory);
        obj.instance.inject(structure.blocks);
    }
}
