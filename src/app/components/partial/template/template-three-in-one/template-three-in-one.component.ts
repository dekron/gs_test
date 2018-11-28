import {Component, ViewChild, ViewContainerRef} from '@angular/core';
import {Block} from "../../../../models/structure-element.model";
import {BlockService} from "../../blocks/block.service";

@Component({
    templateUrl: './template-three-in-one.component.html',
    styleUrls: ['./template-three-in-one.component.css'],
    providers: [
        BlockService
    ]
})
export class TemplateThreeInOneComponent {
    @ViewChild('blockPoint1', {read: ViewContainerRef}) blockPoint1: ViewContainerRef;
    @ViewChild('blockPoint2', {read: ViewContainerRef}) blockPoint2: ViewContainerRef;
    @ViewChild('blockPoint3', {read: ViewContainerRef}) blockPoint3: ViewContainerRef;

    constructor(private bs: BlockService) {
    }

    inject(blocks: Block[]) {
        this.bs.blocksInjectToPoints(blocks, [this.blockPoint1, this.blockPoint2, this.blockPoint3]);
    }
}
