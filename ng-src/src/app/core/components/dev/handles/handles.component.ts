import { Component, OnInit } from '@angular/core';
import { HandleService } from '@store/services/entities/handle.service';
import { Observable } from 'rxjs';
import { Handle } from '@core/models';

@Component({
  selector: 'app-handles',
  templateUrl: './handles.component.html',
  styleUrls: ['./handles.component.scss']
})
export class HandlesComponent implements OnInit {

  handle = {
    handle: "buffaloBill"
  };

  loading$: Observable<boolean>;
  handles$: Observable<Handle[]>;
  constructor(private handleService: HandleService) {
    this.handles$ = handleService.entities$;
    this.loading$ = handleService.loading$;
   }

  ngOnInit() {
  }

  getAll() {
    this.handleService.getAll();
  }

  add(handle: Handle) {
    this.handleService.add(handle);
  }
}
