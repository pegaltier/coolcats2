import { Component, OnInit } from '@angular/core';
import { PropService } from '@store/services/entities/prop.service';
import { Observable } from 'rxjs';
import { Prop } from '@core/models';

@Component({
  selector: 'app-props',
  templateUrl: './props.component.html',
  styleUrls: ['./props.component.scss']
})

export class PropsComponent implements OnInit {

  loading$: Observable<boolean>;
  props$: Observable<Prop[]>;
  constructor(private propService: PropService) {
    this.props$ = propService.entities$;
    this.loading$ = propService.loading$;
   }

  ngOnInit() {
  }

  getWithQuery() {
    this.propService.getWithQuery({
      key: "Agent_Handle"
    });
  }

}
