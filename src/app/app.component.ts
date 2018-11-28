import {Component, OnInit} from '@angular/core';
import {FormatData, Source, SourceType} from "./models/structure-element.model";
import {LocalStorageService} from "./services/local-storage/local-storage.service";
import {SourceService} from "./services/source/source.service";

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    constructor(private lss: LocalStorageService, private sourceService: SourceService) {

    }

    ngOnInit(): void {
        let sourceList: Source[] = [
            {
                id: 1,
                name: 'WebSoсket три знака после запятой',
                type: SourceType.ws,
                url: 'ws://echo.websocket.org'
            },
            {
                id: 2,
                name: 'WebSoсket целые до 10',
                type: SourceType.ws,
                url: 'ws://echo.websocket.org'
            },
            {
                id: 3,
                name: 'WebSoсket целые от 10 до 1000',
                type: SourceType.ws,
                url: 'ws://echo.websocket.org'
            }
        ];

        this.lss.setItem('sources', sourceList);
        this.genDataToSources();
    }

    genDataToSources() {
        let sources = this.lss.getItem('sources') as Source[];
        sources.forEach((source) => {
            let connection = this.sourceService.connect(source);
            setInterval(() => {
                if (connection.connection.readyState == 1) {
                    let data: FormatData;
                    switch (source.id) {
                        case 1:
                            data = {
                                timestamp: +new Date(),
                                value: parseFloat(Math.random().toFixed(3))
                            };
                            break;
                        case 2:
                            data = {
                                timestamp: +new Date(),
                                value: Math.round(Math.random() * 10)
                            };
                            break;
                        case 3:
                            data = {
                                timestamp: +new Date(),
                                value: Math.round(Math.random() * 1000)
                            };
                            break;
                        default:
                            break;
                    }
                    connection.connection.send(JSON.stringify(data));

                }
            }, 2000);
        });
    }
}
