import {Component, ViewChild, ViewContainerRef} from '@angular/core';
import {Block} from "../../../../models/structure-element.model";
import {BlockService} from "../../blocks/block.service";

@Component({
    templateUrl: './template-two-to-one.component.html',
    styleUrls: ['./template-two-to-one.component.css'],
    providers: [
        BlockService
    ]
})
export class TemplateTwoToOneComponent {
    @ViewChild('blockPoint1', {read: ViewContainerRef}) blockPoint1: ViewContainerRef;
    @ViewChild('blockPoint2', {read: ViewContainerRef}) blockPoint2: ViewContainerRef;
    @ViewChild('blockPoint3', {read: ViewContainerRef}) blockPoint3: ViewContainerRef;

    constructor(private bs: BlockService) {
    }

    inject(blocks: Block[]) {
        this.bs.blocksInjectToPoints(blocks, [this.blockPoint1, this.blockPoint2, this.blockPoint3]);
    }
}
