import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { HolochainDataService } from './holochain-data.service';
import { QueryParams } from '@ngrx/data';

@Injectable()
export class AnchorDataService extends HolochainDataService {

    name = 'anchor';
    conf = {
        instance: 'test-instance',
        zome: 'coolcats',
        add: 'create_anchor',
        delete: '',
        getAll: '',
        getById: 'get_anchor',
        getWithQuery: 'get_anchors',
        update: '',
        upsert: '',
        param: {}
        // missing: anchor_exists
    };

    add(entity: any): Observable<any> {
        return super.add(entity)
            .pipe(map((result: string) => {
                return { id: JSON.parse(result).value, ...entity.anchor };
            }));
    }

    getWithQuery(queryParams: QueryParams | string): Observable<any> {
        return super.getWithQuery(queryParams)
            .pipe(map((result: any) => JSON.parse(result).value));
    }

    getById(key: number | string): Observable<any> {
        return super.getById(key)
            .pipe(map((result: any) => JSON.parse(result).value));
    }
}