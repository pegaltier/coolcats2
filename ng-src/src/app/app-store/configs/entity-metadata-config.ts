import { EntityMetadataMap, EntityDataModuleConfig } from '@ngrx/data';

const entityMetadata: EntityMetadataMap = {
  Hero: {},
  Anchor: {},
  Favourite: {},
  Handle: {},
  Post: {},
  Prop: {}
};

// because the plural of "hero" is not "heros"
const pluralNames = { Hero: 'Heroes' };

export const entityConfig: EntityDataModuleConfig = {
  entityMetadata,
  pluralNames
};