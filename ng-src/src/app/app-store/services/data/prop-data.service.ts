import { Injectable } from '@angular/core';
import { QueryParams } from '@ngrx/data';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { HolochainDataService } from './holochain-data.service';

@Injectable()
export class PropDataService extends HolochainDataService {

    name = 'prop';
    conf = {
        instance: 'test-instance',
        zome: 'coolcats',
        add: '',
        delete: '',
        getAll: '',
        getById: '',
        getWithQuery: 'app_property',
        update: '',
        upsert: '',
        param: {}
    }

    getWithQuery(queryParams: QueryParams | string): Observable<any> {
        return super.getWithQuery(queryParams)
            .pipe(map((result: string) => {
                return [{ id: JSON.parse(result).value }]
            }
            ));
    }
}