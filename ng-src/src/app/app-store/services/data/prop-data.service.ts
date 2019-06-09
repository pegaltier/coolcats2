import { Injectable } from '@angular/core';
import { HolochainDataService } from './holochain-data.service';

@Injectable()
export class PropDataService extends HolochainDataService {

    conf = {
        instance: 'test-instance',
        zome: 'coolcats',
        add: '',
        delete: '',
        getAll: '',
        getById: '',
        getWithQuery: 'app_property',
        update: '',
        upsert: ''
    }
}