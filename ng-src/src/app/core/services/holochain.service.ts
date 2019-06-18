import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { mergeMap, map } from 'rxjs/operators';

// hc
import { connect } from '@holochain/hc-web-client';

// holo
// import * as holochainClient from '@holochain/hc-web-client';
// import * as holoClient from '@holo-host/hclient';


@Injectable()
export class HolochainService {

  private url: string = 'ws://localhost:8888';
  private conn: Observable<any>;
  private holoClient: any;

  constructor() {
    // hc
    this.conn = from(connect({ url: this.url }));

    // holo
    // this.holoClient = holoClient.makeWebClient(holochainClient);
    // this.conn = from(holoClient.connect({ url: this.url }));
   }

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