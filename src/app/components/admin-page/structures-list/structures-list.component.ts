import {Component, OnInit} from '@angular/core';
import {SelectionModel} from "@angular/cdk/collections";
import {MatTableDataSource} from "@angular/material";
import {LocalStorageService} from "../../../services/local-storage/local-storage.service";
import {StructureElement} from "../../../models/structure-element.model";

@Component({
    selector: 'structures-list',
    templateUrl: './structures-list.component.html',
    styleUrls: ['./structures-list.component.css']
})

export class StructuresListComponent implements OnInit {
    displayedColumns: string[] = ['select', 'name', 'active'];
    dataSource = new MatTableDataSource<StructureElement>();
    selection = new SelectionModel<StructureElement>(true, []);

    constructor(private storageService: LocalStorageService) {
    }

    ngOnInit() {

        this.dataSource.data = this.storageService.getItem('structure_data') || [];
    }

    /** Статус что выбраны все строки */
    isAllSelected() : boolean {
        const numSelected = this.selection.selected.length;
        const numRows = this.dataSource.data.length;
        return numSelected === numRows;
    }

    /** Выбрать все строки */
    masterToggle() : void {
        this.isAllSelected() ?
            this.selection.clear() :
            this.dataSource.data.forEach(row => this.selection.select(row));
    }

    deleteStructure(items: StructureElement[]) {
        let data = this.dataSource.data;
        items.forEach (item => {
            let index = data.indexOf(item);
            data.splice(index, 1);
        });
        this.refreshStructure(data);
        this.selection.clear();
    }

    activateStructure(activatedItem: StructureElement) {
        let data = this.dataSource.data;
        data.forEach (item => {
            if(item != activatedItem) {
                item.active = false;
            }
        });
        activatedItem.active = true;

        this.refreshStructure(data);
        this.selection.clear();
    }

    deactivateStructure(items: StructureElement[]) {
        items.forEach (item => {
            item.active = false;
        });
        this.refreshStructure(this.dataSource.data);
        this.selection.clear();
    }

    refreshStructure(data: StructureElement[]) {
        this.dataSource.data = data;
        this.storageService.setItem('structure_data', this.dataSource.data);
    }
}
