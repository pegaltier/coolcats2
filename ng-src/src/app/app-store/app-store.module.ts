import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

// ngrx
import { EntityDataModule, DefaultDataServiceConfig, EntityDataService } from '@ngrx/data';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

// project
import { reducers, metaReducers } from '@store/reducers';
import { AnchorDataService } from './services/data/anchor-data.service';

// conf
import { environment } from '@env/environment';
import { dataServiceConfig } from './configs/data-service-config';
import { entityConfig } from './configs/entity-metadata-config';


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
