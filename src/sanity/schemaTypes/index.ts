import  type { SchemaTypeDefinition } from 'sanity'
import { carType } from './carType';
import { blockContentType } from './blockContentType';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [carType, blockContentType]
}