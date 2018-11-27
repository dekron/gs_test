import {ComponentFactoryResolver, Injectable, ViewContainerRef} from '@angular/core';
import {Block, BlockType, Source, SourceType} from "../../../models/structure-element.model";
import {BlockNumberComponent} from "./blocks-number/block-number.component";
import {LocalStorageService} from "../../../services/local-storage/local-storage.service";

@Injectable()
export class BlockService {
    constructor(private lss: LocalStorageService, private componentFactoryResolver: ComponentFactoryResolver) {
    }

    blocksInjectToPoints(blocks: Block[], points: ViewContainerRef[]) {
        let i = 0;
        blocks.forEach((block) => {
            if (i < 3) {
                let blockComp = null;
                switch (block.type) {
                    case BlockType.number:
                        blockComp = BlockNumberComponent;
                        break;
                    case BlockType.graph:
                        blockComp = BlockNumberComponent;
                        break;
                    case BlockType.table:
                        blockComp = BlockNumberComponent;
                        break;
                    default:
                        break;
                }
                let factory = this.componentFactoryResolver.resolveComponentFactory(blockComp);
                points[i].clear();
                let obj = points[i].createComponent(factory);
                let sources = this.lss.getItem('sources') as Source[];
                let source = sources.find(source => source.id === block.source);
                obj.instance.init(source);
            }
            i++;
        });
    }
}
