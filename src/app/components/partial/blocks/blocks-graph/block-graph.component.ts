import {Component, ElementRef, ViewChild} from '@angular/core';
import {Connection, FormatData, Source} from "../../../../models/structure-element.model";
import {SourceService} from "../../../../services/source/source.service";
import * as Highcharts from 'highcharts';
import {chart} from 'highcharts';

@Component({
    templateUrl: './block-graph.component.html',
    styleUrls: ['./block-graph.component.css']
})
export class BlockGraphComponent {
    @ViewChild('chart') chartTarget: ElementRef;
    chart: Highcharts.ChartObject;
    connection: Connection;

    constructor(private sourceService: SourceService) {
    }

    init(source: Source) {
        this.chart = chart(this.chartTarget.nativeElement, {
            title: {
                text: ''
            },
            legend: {enabled: false},
            credits: {
                enabled: false
            },
            xAxis: {
                title: {
                    text: 'Timestamp'
                }
            },
            yAxis: {
                title: {
                    text: 'Значение'
                }
            }
        });
        this.chart.addSeries({
            data: []
        });

        let _this = this;
        this.connection = this.sourceService.connect(source);
        this.connection.connection.addEventListener('message', (message) => {
            let data = JSON.parse(message.data) as FormatData;
            _this.chart.series[0].addPoint([data.timestamp, data.value]);
        })
    }
}
