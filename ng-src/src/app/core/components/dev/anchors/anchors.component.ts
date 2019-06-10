import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

// project
import { Anchor } from '../../../models';
import { AnchorService } from '../../../../app-store/services/entities/anchor.service';
import { QueryParams } from '@ngrx/data';

@Component({
  selector: 'app-anchors',
  templateUrl: './anchors.component.html',
  styleUrls: ['./anchors.component.scss']
})
export class AnchorsComponent implements OnInit {

  loading$: Observable<boolean>;
  anchors$: Observable<Anchor[]>;
  anchor1 = {};
  anchor2 = {};
  anchor3 = {};

  constructor(private anchorService: AnchorService) {
    this.anchors$ = anchorService.entities$;
    this.loading$ = anchorService.loading$;
  }
 
  ngOnInit() { }
  
  getAll() {
    this.anchorService.getAll();
  }

  add(anchor: Anchor) {
    this.anchorService.add(anchor);
  }

  getById(anchor: Anchor) {
    this.anchorService.getByKey(anchor.id);
  }

  getWithQuery(anchor: Anchor) {
    this.anchorService.getWithQuery(anchor as any);
  }

}
