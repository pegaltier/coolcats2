import { Injectable } from '@angular/core';
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory
} from '@ngrx/data';
import { Favourite } from '@core/models';

@Injectable()
export class FavouriteService extends EntityCollectionServiceBase<Favourite> {
  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super('Favourite', serviceElementsFactory);
  }

}