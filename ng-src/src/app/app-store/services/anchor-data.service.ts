import { Injectable } from '@angular/core';
import { HolochainDataService } from './holochain-data.service';

@Injectable()
export class AnchorDataService extends HolochainDataService {

    conf = {
        instance: 'test-instance',
        zome: 'coolcats',
        getAll: 'get_anchors',
        p1: 'testing'
    }
}