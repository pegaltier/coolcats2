import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { HolochainDataService } from './holochain-data.service';

@Injectable()
export class AnchorDataService extends HolochainDataService {

    name = 'anchor';
    conf = {
        instance: 'test-instance',
        zome: 'coolcats',
        add: 'create_anchor',
        delete: '',
        getAll: 'get_anchors',
        getById: 'get_anchor',
        getWithQuery: '',
        update: '',
        upsert: '',
        param: {}
    };

    // missing:
    // anchor_exists
    // get_anchors parameter

    add(entity: any): Observable<any> {
        return super.add(entity)
            .pipe(map((result: string) => {
                const test = {...entity.anchor, id: JSON.parse(result).value };
                console.log('<AnchorDataService>', 'add2', test);
                return test;
            }));
    }

    getAll(): Observable<any[]> {
        console.log('<AnchorDataService>', 'getAll');
        return super.getAll()
            .pipe(map((result: any) => JSON.parse(result).value));
    }

    getAllWithParam(param: any):Observable<any[]> {
        this.conf.param = param;
        return this.getAll();
    }
}