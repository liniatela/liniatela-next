import { type SchemaTypeDefinition } from 'sanity'

// Документы
import homePage from './documents/homePage'
import direction from './documents/direction'
import membership from './documents/membership'
import trainer from './documents/trainer'
import review from './documents/review'
import settings from './documents/settings'

// Объекты
import seo from './objects/seo'
import hero from './objects/hero'
import problems from './objects/problems'
import cta from './objects/cta'
import space from './objects/space'
import certificate from './objects/certificate'
import contacts from './objects/contacts'
import headerMenu from './objects/headerMenu'
import footerMenu from './objects/footerMenu'
import mediaField from './objects/mediaField'
import pricing from './objects/pricing'
import faq from './objects/faq'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    // Документы
    homePage,
    direction,
    membership,
    trainer,
    review,
    settings,
    
    // Объекты
    seo,
    hero,
    problems,
    cta,
    space,
    certificate,
    contacts,
    headerMenu,
    footerMenu,
    mediaField,
    pricing,
    faq,
  ],
}

