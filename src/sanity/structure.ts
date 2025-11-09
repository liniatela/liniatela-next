// https://www.sanity.io/docs/structure-builder-cheat-sheet
import type { StructureResolver } from 'sanity/structure'

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Контент')
    .items([
      // Главная страница
      S.listItem()
        .title('Главная страница')
        .icon(() => '🏠')
        .child(
          S.document()
            .schemaType('homePage')
            .documentId('homePage')
        ),

      S.divider(),

      // Направления
      S.listItem()
        .title('Направления')
        .icon(() => '🧘')
        .child(
          S.documentTypeList('direction')
            .title('Направления')
            .filter('_type == "direction"')
        ),

      // Абонементы
      S.listItem()
        .title('Абонементы')
        .icon(() => '💳')
        .child(
          S.documentTypeList('membership')
            .title('Абонементы')
            .filter('_type == "membership"')
            .defaultOrdering([{ field: 'order', direction: 'asc' }])
        ),

      // Тренеры
      S.listItem()
        .title('Тренеры')
        .icon(() => '👥')
        .child(
          S.documentTypeList('trainer')
            .title('Тренеры')
            .filter('_type == "trainer"')
            .defaultOrdering([{ field: 'order', direction: 'asc' }])
        ),

      // Отзывы
      S.listItem()
        .title('Отзывы')
        .icon(() => '⭐')
        .child(
          S.documentTypeList('review')
            .title('Отзывы')
            .filter('_type == "review"')
            .defaultOrdering([{ field: 'publishedAt', direction: 'desc' }])
        ),

      S.divider(),

      // Настройки сайта
      S.listItem()
        .title('Настройки сайта')
        .icon(() => '⚙️')
        .child(
          S.document()
            .schemaType('settings')
            .documentId('settings')
        ),
    ])
