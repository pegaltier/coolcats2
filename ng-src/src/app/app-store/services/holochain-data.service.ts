import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { HolochainService } from 'src/app/core/services/holochain.service';

@Injectable()
export abstract class HolochainDataService {

    abstract conf: any;

    constructor(private hcService: HolochainService) {
    }

    name = 'HolochainDataService';

    add(): Observable<any> {
        console.log('<HolochainDataService>', 'add');
        return from([]);
    }

    delete(): Observable<any> {
        console.log('<HolochainDataService>', 'delete');
        return from([]);
    }

    getById(): Observable<any> {
        console.log('<HolochainDataService>', 'getById');
        return from([]);
    }

    getAll(): Observable<any[]> {
        console.log('<HolochainDataService>', 'getAll');
        return this.hcService.callZome(this.conf.instance, this.conf.zome, this.conf.getAll, { anchor_type: this.conf.p1 });
    }

    getWithQuery(): Observable<any> {
        console.log('<HolochainDataService>', 'getWithQuery');
        return from([]);
    }

    update(): Observable<any> {
        console.log('<HolochainDataService>', 'update');
        return from([]);
    }

    upsert(): Observable<any> {
        console.log('<HolochainDataService>', 'upsert');
        return from([]);
    }

}