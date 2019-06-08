import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

// ngrx
import { EntityDataModule, DefaultDataServiceConfig, EntityDataModuleWithoutEffects } from '@ngrx/data';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

// project
import { reducers, metaReducers } from '../core/reducers';

// conf
import { environment } from './../../environments/environment';
import { dataServiceConfig } from './data-service-config';
import { entityConfig } from './entity-metadata';

@NgModule({
  declarations: [],
  imports: [
    HttpClientModule,
    EffectsModule.forRoot([]),
    EntityDataModule.forRoot(entityConfig), // with http calls
    // EntityDataModuleWithoutEffects.forRoot(entityConfig), // without http calls
    StoreModule.forRoot(reducers, { metaReducers }),
    environment.production ? [] : StoreDevtoolsModule.instrument(),
  ],
  providers: [{ provide: DefaultDataServiceConfig, useValue: dataServiceConfig }]
})
export class AppStoreModule { }
