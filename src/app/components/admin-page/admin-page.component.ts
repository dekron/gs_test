import {Component, OnInit, ViewChild} from '@angular/core';
import {StructuresListComponent} from "./structures-list/structures-list.component";

@Component({
    selector: 'admin-page',
    templateUrl: './admin-page.component.html',
})

export class AdminPageComponent implements OnInit {
    @ViewChild(StructuresListComponent) protected structuresList: StructuresListComponent;

    constructor() {
    }

    ngOnInit() {
    }
}
