import { Injectable } from '@angular/core';
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory
} from '@ngrx/data';
import { Favourite } from '../models';

@Injectable()
export class FavouriteService extends EntityCollectionServiceBase<Favourite> {
  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super('Favourite', serviceElementsFactory);
  }

  getAll() {
    return super.getAll();
  }
}