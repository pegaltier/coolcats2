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
        add: 'add_favourite',
        delete: 'remove_favourite',
        getAll: '',
        getById: '',
        getWithQuery: '',
        update: '',
        upsert: '',
        param: {}
    };

    // todo finish add and remove
    
    add(entity: any): Observable<any> {
        return super.add(entity)
            .pipe(map((result: string) => {
                JSON.parse(result).value.map(address => { return { id: address}});
            }));
    }

    delete(key: number | string): Observable<any> {
        return super.delete(key)
        .pipe(map((result: string) => {
            return { id: JSON.parse(result).value };
        }));
    }

}