import { Injectable } from '@angular/core';
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory
} from '@ngrx/data';
import { Anchor } from '../models';

@Injectable()
export class AnchorService extends EntityCollectionServiceBase<Anchor> {
  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super('Anchor', serviceElementsFactory);
  }

  getAll() {
    return super.getAll();
  }
}