import { Injectable } from '@angular/core';
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory
} from '@ngrx/data';
import { Prop } from '../models';

@Injectable()
export class PropService extends EntityCollectionServiceBase<Prop> {
  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super('Prop', serviceElementsFactory);
  }

  getAll() {
    return super.getAll();
  }
}