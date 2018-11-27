import {Component} from '@angular/core';
import {Connection, FormatData, Source} from "../../../../models/structure-element.model";
import {SourceService} from "../../../../services/source/source.service";

@Component({
    templateUrl: './block-number.component.html',
})
export class BlockNumberComponent {
    value: number;
    connection: Connection;

    constructor(private sourceService: SourceService) {
    }

    init(source: Source) {
        let _this = this;
        this.connection = this.sourceService.connect(source);
        this.connection.connection.onmessage = (message) => {
            let data = JSON.parse(message.data) as FormatData;
            _this.value = data.value;
        };
    }
}
