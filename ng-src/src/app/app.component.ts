import { Component } from '@angular/core';
import { HolochainService } from '@core/services/holochain.service';
import { Subject, Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private newPostEvent: Subject<void> = new Subject<void>();

  private inst = 'test-instance';
  private zome = 'coolcats';

  // obs
  public handle$: Observable<any>;

  constructor(private hcService: HolochainService) {
    this.init();
    // this.test1();
  }

  newPost() {
    console.log('newPost');
    this.newPostEvent.next();
  }

  logout() {
    console.log('logout');
  }

  private log(msg: string, obj: any): void {
    console.log('pecoolcats', msg, obj);
  }

  private init(): void {
    this.handle$ = this.hcService.callZomeObj(this.inst, this.zome, 'app_property', {
      key: "Agent_Handle"
    });
    this.handle$.subscribe(res => this.log('handle', res));
  }

}