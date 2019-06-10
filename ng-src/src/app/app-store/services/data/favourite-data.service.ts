import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { QueryParams } from '@ngrx/data';

// project
import { HolochainDataService } from './holochain-data.service';

@Injectable()
export class FavouriteDataService extends HolochainDataService {

    name = 'favourite';
    conf = {
        instance: 'test-instance',
        zome: 'coolcats',
        add: '',
        delete: '',
        getAll: '',
        getById: '',
        getWithQuery: '',
        update: '',
        upsert: '',
        param: {}
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