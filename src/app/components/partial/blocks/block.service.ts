import {ComponentFactoryResolver, Injectable, Type, ViewContainerRef} from '@angular/core';
import {Block, Source} from "../../../models/structure-element.model";
import {LocalStorageService} from "../../../services/local-storage/local-storage.service";

@Injectable()
export class BlockService {
    constructor(private lss: LocalStorageService, private componentFactoryResolver: ComponentFactoryResolver) {
    }

    blocksInjectToPoints(blocks: Block[], points: ViewContainerRef[]) {
        let i = 0;
        blocks.forEach((block) => {
            if (i < 3) {
                this.inject(block, points[i]);
            }
            i++;
        });
    }

    inject(block: Block, point: ViewContainerRef) {
        let factories = Array.from(this.componentFactoryResolver['_factories'].keys());
        let factoryClass = factories.find((x: any) => x.name === block.type) as Type<any>;
        let factory = this.componentFactoryResolver.resolveComponentFactory(factoryClass);
        point.clear();
        let obj = point.createComponent(factory);
        let sources = this.lss.getItem('sources') as Source[];
        let source = sources.find(source => source.id == block.source);
        obj.instance.init(source);
    }
}
