import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

// project
import { Anchor } from '../../models';
import { AnchorService } from '../../../app-store/services/entities/anchor.service';

@Component({
  selector: 'app-anchors',
  templateUrl: './anchors.component.html',
  styleUrls: ['./anchors.component.scss']
})
export class AnchorsComponent implements OnInit {

  loading$: Observable<boolean>;
  anchors$: Observable<Anchor[]>;
  anchor = {
    anchor: {
      anchor_type: 'testing',
      anchor_text: '1-2-3',
      id: '0'
    }
  };
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
    console.log('getById', anchor.id);
    this.anchorService.getByKey(anchor.id);
  }

}
