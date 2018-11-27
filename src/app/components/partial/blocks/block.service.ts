import {ComponentFactoryResolver, Injectable, ViewContainerRef} from '@angular/core';
import {Block, BlockType, Source} from "../../../models/structure-element.model";
import {BlockNumberComponent} from "./blocks-number/block-number.component";
import {LocalStorageService} from "../../../services/local-storage/local-storage.service";
import {BlockTableComponent} from "./blocks-table/block-table.component";
import {BlockGraphComponent} from "./blocks-graph/block-graph.component";

@Injectable()
export class BlockService {
    constructor(private lss: LocalStorageService, private componentFactoryResolver: ComponentFactoryResolver) {
    }

    blocksInjectToPoints(blocks: Block[], points: ViewContainerRef[]) {
        let i = 0;
        blocks.forEach((block) => {
            if (i < 3) {
                switch (block.type) {
                    case BlockType.number:
                        this.inject(BlockNumberComponent, block, points[i]);
                        break;
                    case BlockType.graph:
                        this.inject(BlockGraphComponent, block, points[i]);
                        break;
                    case BlockType.table:
                        this.inject(BlockTableComponent, block, points[i]);
                        break;
                    default:
                        break;
                }
            }
            i++;
        });
    }

    inject(comp: any, block: Block, point: ViewContainerRef) {
        let factory = this.componentFactoryResolver.resolveComponentFactory(comp);
        point.clear();
        let obj = point.createComponent(factory);
        let sources = this.lss.getItem('sources') as Source[];
        let source = sources.find(source => source.id === block.source);
        if(source) {
            (obj.instance as any).init(source);
        }
    }
}
