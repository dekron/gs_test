import {Component} from '@angular/core';
import {Connection, FormatData, Source} from "../../../../models/structure-element.model";
import {SourceService} from "../../../../services/source/source.service";

@Component({
    templateUrl: './block-graph.component.html',
})
export class BlockGraphComponent {
    value: number;
    timestamp: number;
    connection: Connection;

    constructor(private sourceService: SourceService) {
    }

    init(source: Source) {
        let _this = this;
        this.connection = this.sourceService.connect(source);
        this.connection.connection.addEventListener('message', (message) => {
            let data = JSON.parse(message.data) as FormatData;
            _this.value = data.value;
            _this.timestamp = data.timestamp;
        })
    }
}
