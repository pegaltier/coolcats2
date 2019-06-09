import { Injectable } from '@angular/core';
import { QueryParams } from '@ngrx/data';
import { Observable, of } from 'rxjs';

// project
import { HolochainService } from '@core/services/holochain.service';
import { map } from 'rxjs/operators';

@Injectable()
export abstract class HolochainDataService {

    // keep structure of DefaultDataService
    
    abstract conf: HolochainZomeFunction;
    name = 'HolochainDataService';

    constructor(private hcService: HolochainService) { }
    
    add(entity: any): Observable<any> {
        console.log('<HolochainDataService>', 'add', entity);
        return this.callZome(this.conf.add, entity)
            .pipe(map((result: string) => {
                return { id: JSON.parse(result).value, ...entity.anchor };
            }));
    }

    delete(key: number | string): Observable<any> {
        console.log('<HolochainDataService>', 'delete');
        return this.callZome(this.conf.delete, { address: key });
    }

    getAll(): Observable<any[]> {
        console.log('<HolochainDataService>', 'getAll');
        return this.callZome(this.conf.getAll, { anchor_type: 'testing' })
            .pipe(map((result: string) => JSON.parse(result).value));
    }

    getById(key: number | string): Observable<any> {
        console.log('<HolochainDataService>', 'getById');
        return this.callZome(this.conf.getById, { address: key });
    }

    getWithQuery(queryParams: QueryParams | string): Observable<any> {
        console.log('<HolochainDataService>', 'getWithQuery');
        return this.callZome(this.conf.getWithQuery, queryParams);
    }

    update(entity: any): Observable<any> {
        console.log('<HolochainDataService>', 'update');
        return this.callZome(this.conf.update, entity);
    }

    upsert(entity: any): Observable<any> {
        console.log('<HolochainDataService>', 'upsert');
        return this.callZome(this.conf.upsert, entity);
    }

    private callZome(funcName: string, params: any): Observable<any> {
        return this.hcService.callZome(this.conf.instance, this.conf.zome, funcName, params);
    }

}

interface HolochainZomeFunction {
    instance: string;
    zome: string;
    add: string;
    delete: string;
    getAll: string;
    getById: string;
    getWithQuery: string;
    update: string;
    upsert: string;
}