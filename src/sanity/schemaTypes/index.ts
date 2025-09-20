import { type SchemaTypeDefinition } from 'sanity'
import trainers from './trainers'
import sports from './sports'
import abonements from './abonements'
import reviews from './reviews'
import studios from './studios'
import problems from './problems'
import contacts from './contacts'
import mainPage from './mainPage'

export const schema: { types: SchemaTypeDefinition[] } = {
	types: [sports, abonements, trainers, reviews, studios, problems, contacts, mainPage]
}
