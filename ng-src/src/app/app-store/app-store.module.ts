import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

// ngrx
import { EntityDataModule, DefaultDataServiceConfig, EntityDataService } from '@ngrx/data';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

// project
import { reducers, metaReducers } from '../core/reducers';

// conf
import { environment } from './../../environments/environment';
import { dataServiceConfig } from './configs/data-service-config';
import { entityConfig } from './configs/entity-metadata-config';
import { AnchorDataService } from './services/anchor-data.service';

@NgModule({
  declarations: [],
  imports: [
    HttpClientModule,
    EffectsModule.forRoot([]),
    EntityDataModule.forRoot(entityConfig),
    StoreModule.forRoot(reducers, { metaReducers }),
    environment.production ? [] : StoreDevtoolsModule.instrument(),
  ],
  providers: [
    AnchorDataService,
    { provide: DefaultDataServiceConfig, useValue: dataServiceConfig }
  ]
})
export class AppStoreModule {

  constructor(entityDataService: EntityDataService, anchorDataService: AnchorDataService) {
    entityDataService.registerService('Anchor', anchorDataService);
  }

}
