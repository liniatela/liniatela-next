import { type SchemaTypeDefinition } from 'sanity'
import trainers from './trainers'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    trainers
  ],
}
