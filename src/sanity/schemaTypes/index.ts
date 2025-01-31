import  type { SchemaTypeDefinition } from 'sanity'
import { carType } from './carType';
import { blockContentType } from './blockContentType';
import { brandType } from './brandType';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [carType, blockContentType, brandType]
}