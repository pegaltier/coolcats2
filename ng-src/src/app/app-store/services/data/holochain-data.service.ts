import { Injectable } from '@angular/core';
import { QueryParams } from '@ngrx/data';
import { Observable, of } from 'rxjs';

// project
import { HolochainService } from '@core/services/holochain.service';
import { map } from 'rxjs/operators';

@Injectable()
export abstract class HolochainDataService {

    abstract conf: HolochainZomeFunction;
    name = 'HolochainDataService';

    constructor(private hcService: HolochainService) {}

    add(): Observable<any> {
        console.log('<HolochainDataService>', 'add');
        return this.callZome(this.conf.add, { anchor_type: 'test' });
    }

    delete(): Observable<any> {
        console.log('<HolochainDataService>', 'delete');
        return this.callZome(this.conf.delete, { anchor_type: 'test' });
    }

    getAll(): Observable<any[]> {
        console.log('<HolochainDataService>', 'getAll');
        return this.callZome(this.conf.getAll, { anchor_type: 'test' });
    }

    getById(): Observable<any> {
        console.log('<HolochainDataService>', 'getById');
        return this.callZome(this.conf.getById, { anchor_type: 'test' });
    }

    getWithQuery(params?: QueryParams): Observable<any> {
        console.log('<HolochainDataService>', 'getWithQuery');
        return this.callZome(this.conf.getWithQuery, { anchor_type: 'test' });
    }

    update(): Observable<any> {
        console.log('<HolochainDataService>', 'update');
        return this.callZome(this.conf.update, { anchor_type: 'test' });
    }

    upsert(): Observable<any> {
        console.log('<HolochainDataService>', 'upsert');
        return this.callZome(this.conf.upsert, { anchor_type: 'test' });
    }

    private callZome(funcName: string, params: any): Observable<any> {
        return this.hcService.callZome(this.conf.instance, this.conf.zome, funcName, params)
            .pipe(map((result: string) => JSON.parse(result).value));
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