import { QueryParams } from '@ngrx/data';
import { Observable } from 'rxjs';

// project
import { HolochainService } from '@core/services/holochain.service';
import { Injectable } from '@angular/core';

@Injectable()
export abstract class HolochainDataService {

    // keep structure of DefaultDataService as much as possible
    abstract conf: HcZomeFunctions;
    abstract name: string;

    constructor(private hcService: HolochainService) { }

    add(entity: any): Observable<any> {
        console.log('<HolochainDataService>', name,  'add', entity);
        return this.callZome(this.conf.add, entity);
    }

    delete(key: number | string): Observable<any> {
        console.log('<HolochainDataService>', name,  'delete', key);
        return this.callZome(this.conf.delete, { address: key });
    }

    getAll(): Observable<any[]> {
        console.log('<HolochainDataService>', name,  'getAll');
        return this.callZome(this.conf.getAll, {}); // this.conf.param
    }

    getById(key: number | string): Observable<any> {
        console.log('<HolochainDataService>', name,  'getById', key);
        return this.callZome(this.conf.getById, { address: key });
    }

    getWithQuery(queryParams: QueryParams | string): Observable<any> {
        console.log('<HolochainDataService>', name,  'getWithQuery', queryParams);
        return this.callZome(this.conf.getWithQuery, queryParams);
    }

    update(entity: any): Observable<any> {
        console.log('<HolochainDataService>', name,  'update', entity);
        return this.callZome(this.conf.update, entity);
    }

    upsert(entity: any): Observable<any> {
        console.log('<HolochainDataService>', name,  'upsert', entity);
        return this.callZome(this.conf.upsert, entity);
    }

    private callZome(funcName: string, params: any): Observable<any> {
        return this.hcService.callZome(this.conf.instance, this.conf.zome, funcName, params);
    }

}

interface HcZomeFunctions {
    // dna mapping
    instance: string;
    zome: string;

    // functions mapping
    add: string;
    delete: string;
    getAll: string;
    getById: string;
    getWithQuery: string;
    update: string;
    upsert: string;

    // optionnal param
    param: any;
}