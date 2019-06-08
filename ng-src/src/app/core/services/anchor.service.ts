import { Injectable } from '@angular/core';
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory,
  QueryParams
} from '@ngrx/data';
import { Anchor } from '../models';

@Injectable()
export class AnchorService extends EntityCollectionServiceBase<Anchor> {

  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super('Anchor', serviceElementsFactory);
    // this.getWithQuery({test: 'abc', xyz: ['de', 'd'], ddd: 'llds'})
  }

  getAll() {
   console.log('<AnchorService>', 'getAll');
   return super.getAll();
  }

  getWithQuery(params?: QueryParams) {
    return super.getWithQuery(params);
  }

}