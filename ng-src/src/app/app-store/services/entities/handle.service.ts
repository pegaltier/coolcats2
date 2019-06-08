import { Injectable } from '@angular/core';
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory
} from '@ngrx/data';
import { Handle } from '@core/models';

@Injectable()
export class HandleService extends EntityCollectionServiceBase<Handle> {
  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super('Handle', serviceElementsFactory);
  }

}