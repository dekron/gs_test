import {Component, OnInit} from '@angular/core';
import {SelectionModel} from "@angular/cdk/collections";
import {MatTableDataSource} from "@angular/material";

export interface StructureElement {
    active: boolean;
    name: string;
    position: number;
}

const STUCTURE_DATA: StructureElement[] = [
    {position: 1, name: 'Структура 1', active: true},
    {position: 2, name: 'Структура 2', active: false},
    {position: 3, name: 'Структура 3', active: false}
];

//mat-elevation-z8
@Component({
    selector: 'structures-list',
    templateUrl: './structures-list.component.html',
    styleUrls: ['./structures-list.component.css']
})

export class StructuresListComponent implements OnInit {
    displayedColumns: string[] = ['select', 'name', 'active'];
    dataSource = new MatTableDataSource<StructureElement>(STUCTURE_DATA);
    selection = new SelectionModel<StructureElement>(true, []);

    constructor() {
    }

    ngOnInit() {
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
}
