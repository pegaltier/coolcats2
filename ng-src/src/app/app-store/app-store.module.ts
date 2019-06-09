import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

// ngrx
import { EntityDataModule, DefaultDataServiceConfig, EntityDataService } from '@ngrx/data';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

// project ngrx
import { reducers, metaReducers } from '@store/reducers';

// project data service
import { AnchorDataService } from './services/data/anchor-data.service';
import { HandleDataService } from './services/data/handle-data.service';
import { PropDataService } from './services/data/prop-data.service';

// project service
import { AnchorService } from './services/entities/anchor.service';
import { FavouriteService } from './services/entities/favourite.service';
import { HandleService } from './services/entities/handle.service';
import { PostService } from './services/entities/post.service';
import { PropService } from './services/entities/prop.service';

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
    // project data service  
    AnchorDataService,
    HandleDataService,
    PropDataService,

    // project service  
    AnchorService,
    FavouriteService,
    HandleService,
    PostService,
    PropService,

    // config
    { provide: DefaultDataServiceConfig, useValue: dataServiceConfig }
  ]
})
export class AppStoreModule {

  constructor(
    entityDataService: EntityDataService,
    anchorDataService: AnchorDataService,
    handleDataService: HandleDataService,
    propDataService: PropDataService,
  ) {
    entityDataService.registerServices({
      'Anchor': anchorDataService,
      'Prop': propDataService,
      'Handle': handleDataService
    });
  }

}
