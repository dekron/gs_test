import {Component, ComponentFactoryResolver, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {Block, BlockType} from "../../../../models/structure-element.model";
import {BlockService} from "../../blocks/block.service";

@Component({
    selector: 'template-two-to-one',
    templateUrl: './template-two-to-one.component.html',
    providers: [
        BlockService
    ]
})
export class TemplateTwoToOneComponent implements OnInit {
    @ViewChild('blockPoint1', {read: ViewContainerRef}) blockPoint1: ViewContainerRef;
    @ViewChild('blockPoint2', {read: ViewContainerRef}) blockPoint2: ViewContainerRef;
    @ViewChild('blockPoint3', {read: ViewContainerRef}) blockPoint3: ViewContainerRef;

    blocksInstances: any[];

    constructor(private componentFactoryResolver: ComponentFactoryResolver, private bs: BlockService) {
        this.blocksInstances = [];
    }

    ngOnInit() {
        let blocks: Block[] = [
            {
                source: 1,
                type: BlockType.number
            },
            {
                source: 2,
                type: BlockType.graph
            },
            {
                source: 2,
                type: BlockType.table
            }
        ];

        this.bs.blocksInjectToPoints(blocks, [this.blockPoint1, this.blockPoint2, this.blockPoint3]);
    }
}
