import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { mergeMap, map } from 'rxjs/operators';

// lib
import { connect } from '@holochain/hc-web-client'

@Injectable()
export class HolochainService {

  private url: string = 'ws://localhost:8888';
  private conn = from(connect({ url: this.url }));

  constructor() { }

  public callZome(instance: string, zome: string, funcName: string, params: any): Observable<any> {
    return this.conn.pipe(mergeMap((res: HConnect) => from(res.callZome(instance, zome, funcName)(params))));
  }

  public callZomeObj(instance: string, zome: string, funcName: string, params: any): Observable<any> {
    return this.callZome(instance, zome, funcName, params).pipe(map((obj: string) => JSON.parse(obj)));
  }
  
}

interface HConnect {
  call: Function;
  callZome: Function;
  close: Function;
  onSignal: Function;
  ws: any;
}