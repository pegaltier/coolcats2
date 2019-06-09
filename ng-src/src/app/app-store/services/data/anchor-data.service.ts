import { Injectable } from '@angular/core';
import { HolochainDataService } from './holochain-data.service';

@Injectable()
export class AnchorDataService extends HolochainDataService {

    conf = {
        instance: 'test-instance',
        zome: 'coolcats',
        add: 'create_anchor',
        delete: '',
        getAll: 'get_anchors',
        getById: 'get_anchor',
        getWithQuery: '',
        update: '',
        upsert: ''
    }
}