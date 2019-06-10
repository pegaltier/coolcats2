import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { HolochainDataService } from './holochain-data.service';

@Injectable()
export class HandleDataService extends HolochainDataService {

    name = 'handle';
    conf = {
        instance: 'test-instance',
        zome: 'coolcats',
        add: 'use_handle',
        delete: '',
        getAll: 'get_handles',
        getById: 'get_handle',
        getWithQuery: '',
        update: '',
        upsert: '',
        param: {}
    }

    add(entity: any): Observable<any> {
        return super.add(entity)
            .pipe(map((result: string) => {
                const test = {...entity, id: JSON.parse(result).value };
                return test;
            }));
    }

    getAll(): Observable<any[]> {
        return super.getAll()
            .pipe(map((result: any) => JSON.parse(result).value));
    }
}