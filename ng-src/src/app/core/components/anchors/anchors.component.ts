import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

// project
import { Anchor } from '../../models';
import { AnchorService } from '../../services/anchor.service';

@Component({
  selector: 'app-anchors',
  templateUrl: './anchors.component.html',
  styleUrls: ['./anchors.component.scss']
})
export class AnchorsComponent implements OnInit {

  loading$: Observable<boolean>;
  anchors$: Observable<Anchor[]>;
 
  constructor(private anchorService: AnchorService) {
    this.anchors$ = anchorService.entities$;
    this.loading$ = anchorService.loading$;
  }
 
  ngOnInit() {
    // this.getAnchors();
  }
  
  getAll() {
    this.anchorService.getAll();
  }

  add(anchor: Anchor) {
    this.anchorService.add(anchor);
  }
 
  delete(anchor: Anchor) {
    this.anchorService.delete(anchor.id);
  }

  update(anchor: Anchor) {
    this.anchorService.update(anchor);
  }

}
