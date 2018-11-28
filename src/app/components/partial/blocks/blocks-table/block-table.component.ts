import {Component} from '@angular/core';
import {Connection, FormatData, Source} from "../../../../models/structure-element.model";
import {SourceService} from "../../../../services/source/source.service";
import {MatTableDataSource} from "@angular/material";

@Component({
    templateUrl: './block-table.component.html',
    styleUrls: ['./block-table.component.css']
})
export class BlockTableComponent {
    displayedColumns: string[] = ['timestamp', 'value'];
    dataSource: MatTableDataSource<FormatData> = new MatTableDataSource<FormatData>();
    connection: Connection;

    constructor(private sourceService: SourceService) {
    }

    init(source: Source) {
        let _this = this;
        this.connection = this.sourceService.connect(source);
        this.connection.connection.addEventListener('message', (message) => {
            let data = _this.dataSource.data;
            data.push(JSON.parse(message.data) as FormatData);
            _this.dataSource.data = data;
        })
    }
}
