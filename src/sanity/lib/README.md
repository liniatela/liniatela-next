# Sanity Lib - Утилиты и хелперы для работы с Sanity CMS

## 📁 Структура

```
sanity/lib/
├── client.ts      # Клиенты Sanity (production и preview)
├── live.ts        # Live content API
├── queries.ts     # GROQ запросы
├── services.ts    # Сервисы для получения данных
├── image.ts       # Хелперы для работы с изображениями
├── video.ts       # Хелперы для работы с видео
├── media.ts       # 🆕 Хелперы для работы с mediaField
├── types.ts       # 🆕 TypeScript типы для данных из Sanity
└── index.ts       # 🆕 Центральный экспорт всех утилит
```

## 🚀 Быстрый старт

### Импорт через index.ts (рекомендуется)

```typescript
import { 
  getHomePage, 
  getDirections, 
  urlFor, 
  getMediaUrl 
} from '@/sanity/lib'
```

### Или прямой импорт

```typescript
import { getHomePage } from '@/sanity/lib/services'
import { urlFor } from '@/sanity/lib/image'
import { getMediaUrl } from '@/sanity/lib/media'
```

## 📚 Модули

### 1. **client.ts** - Клиенты Sanity

```typescript
import { client, previewClient } from '@/sanity/lib'

// Обычный клиент (с CDN)
const data = await client.fetch(query)

// Preview клиент (для черновиков)
const draftData = await previewClient.fetch(query)
```

### 2. **queries.ts** - GROQ запросы

Все запросы для получения данных из Sanity:

```typescript
import { homePageQuery, directionsQuery } from '@/sanity/lib'

const homePage = await client.fetch(homePageQuery)
const directions = await client.fetch(directionsQuery)
```

**Доступные запросы:**
- `settingsQuery` - настройки сайта
- `homePageQuery` - главная страница
- `directionsQuery` - все направления
- `directionBySlugQuery` - направление по slug
- `membershipsQuery` - все абонементы
- `membershipBySlugQuery` - абонемент по slug
- `trainersQuery` - все тренеры
- `trainerBySlugQuery` - тренер по slug
- `reviewsQuery` - все отзывы
- И другие...

### 3. **services.ts** - Сервисы

Готовые функции для получения данных с обработкой ошибок:

```typescript
import { 
  getHomePage, 
  getDirections, 
  getMemberships, 
  getTrainers 
} from '@/sanity/lib'

// Получить данные главной страницы
const homePage = await getHomePage()

// Получить все направления
const directions = await getDirections()

// Получить направление по slug
const direction = await getDirectionBySlug('yoga')

// Получить популярные абонементы
const popular = await getPopularMemberships()
```

**Основные функции:**

#### Настройки
- `getSettings(preview?)` - настройки сайта

#### Главная страница
- `getHomePage(preview?)` - главная страница

#### Направления
- `getDirections(preview?)` - все направления
- `getDirectionBySlug(slug, preview?)` - направление по slug
- `getDirectionSlugs()` - все slug (для SSG)

#### Абонементы
- `getMemberships(preview?)` - все абонементы
- `getMembershipBySlug(slug, preview?)` - абонемент по slug
- `getMembershipSlugs()` - все slug (для SSG)
- `getPopularMemberships(preview?)` - популярные абонементы

#### Тренеры
- `getTrainers(preview?)` - все тренеры
- `getTrainerBySlug(slug, preview?)` - тренер по slug
- `getTrainerSlugs()` - все slug (для SSG)

#### Отзывы
- `getReviews(preview?)` - все отзывы
- `getReviewsCount(preview?)` - количество отзывов

### 4. **image.ts** - Работа с изображениями

```typescript
import { urlFor } from '@/sanity/lib'

// Базовое использование
const imageUrl = urlFor(image).url()

// С параметрами
const optimizedUrl = urlFor(image)
  .width(800)
  .height(600)
  .quality(90)
  .fit('crop')
  .url()
```

### 5. **video.ts** - Работа с видео

```typescript
import { 
  urlForVideo, 
  getVideoUrl, 
  formatVideoDuration 
} from '@/sanity/lib'

// Получить URL видео
const videoUrl = urlForVideo(videoAsset)

// С параметрами качества
const url = getVideoUrl(videoAsset, {
  quality: 'high',
  format: 'mp4'
})

// Форматировать длительность
const duration = formatVideoDuration(125) // "02:05"
```

### 6. **media.ts** - 🆕 Работа с mediaField

Универсальный модуль для работы с полем `mediaField` (видео или изображение):

```typescript
import { 
  isVideo, 
  isImage, 
  getMediaUrl, 
  getMediaVideoUrl, // для mediaField
  getMediaImageUrl, // для mediaField
  getPosterUrl,
  hasMedia 
} from '@/sanity/lib'

// Проверка типа медиа
if (isVideo(media)) {
  console.log('Это видео')
}

// Получить URL (автоматический выбор между видео и изображением)
const url = getMediaUrl(media)

// Получить URL видео из mediaField
const videoUrl = getMediaVideoUrl(media)

// Получить URL изображения из mediaField с параметрами
const imageUrl = getMediaImageUrl(media, {
  width: 1920,
  height: 1080,
  quality: 90,
  fit: 'crop'
})

// Получить URL постера для видео
const posterUrl = getPosterUrl(media, {
  width: 1920,
  height: 1080
})

// Проверить наличие медиа
if (hasMedia(media)) {
  // рендерим медиа
}

// Получить alt текст
const alt = getMediaAlt(media)
```

**Примеры использования:**

```typescript
// Hero блок с видео или изображением
const homePage = await getHomePage()
const heroMedia = homePage.hero.backgroundMedia

if (isVideo(heroMedia)) {
  const videoUrl = getMediaVideoUrl(heroMedia)
  const posterUrl = getPosterUrl(heroMedia)
  
  return (
    <video poster={posterUrl}>
      <source src={videoUrl} type="video/mp4" />
    </video>
  )
} else if (isImage(heroMedia)) {
  const imageUrl = getMediaImageUrl(heroMedia, { width: 1920, quality: 90 })
  
  return <Image src={imageUrl} alt={getMediaAlt(heroMedia)} />
}
```

### 7. **types.ts** - 🆕 TypeScript типы

Полная типизация для всех данных из Sanity:

```typescript
import type { 
  SanityHomePage,
  SanityDirection,
  SanityMembership,
  SanityTrainer,
  SanityReview,
  SanityMediaField,
  SanitySEO
} from '@/sanity/lib'

// Использование в компонентах
interface Props {
  homePage: SanityHomePage
  directions: SanityDirection[]
}

// Работа с медиа
const media: SanityMediaField = {
  mediaType: 'video',
  video: { asset: { ... } },
  poster: { asset: { ... } }
}
```

**Основные типы:**
- `SanityHomePage` - главная страница
- `SanityDirection` - направление
- `SanityMembership` - абонемент
- `SanityTrainer` - тренер
- `SanityReview` - отзыв
- `SanitySettings` - настройки
- `SanityMediaField` - медиа поле
- `SanitySEO` - SEO метаданные
- И многие другие...

## 🎯 Практические примеры

### Получение и отображение главной страницы

```typescript
import { getHomePage, getMediaUrl, isVideo } from '@/sanity/lib'
import type { SanityHomePage } from '@/sanity/lib'

export default async function Home() {
  const homePage: SanityHomePage = await getHomePage()
  
  if (!homePage) {
    return <div>Ошибка загрузки</div>
  }
  
  const { hero } = homePage
  const mediaUrl = getMediaUrl(hero.backgroundMedia)
  
  return (
    <div>
      <h1>{hero.title}</h1>
      <p>{hero.subtitle}</p>
      
      {isVideo(hero.backgroundMedia) ? (
        <video src={mediaUrl} autoPlay loop muted />
      ) : (
        <img src={mediaUrl} alt={hero.title} />
      )}
    </div>
  )
}
```

### Статическая генерация страниц направлений

```typescript
import { 
  getDirectionSlugs, 
  getDirectionBySlug 
} from '@/sanity/lib'

// Генерация всех страниц
export async function generateStaticParams() {
  const slugs = await getDirectionSlugs()
  
  return slugs.map((item) => ({
    slug: item.slug,
  }))
}

// Получение данных для страницы
export default async function DirectionPage({ 
  params 
}: { 
  params: { slug: string } 
}) {
  const direction = await getDirectionBySlug(params.slug)
  
  if (!direction) {
    notFound()
  }
  
  return <DirectionDetail direction={direction} />
}
```

### Работа с галереей (видео + изображения)

```typescript
import { getMediaImageUrl, getMediaVideoUrl, isVideo } from '@/sanity/lib'
import type { SanityMediaField } from '@/sanity/lib'

function Gallery({ items }: { items: SanityMediaField[] }) {
  return (
    <div className="grid grid-cols-3 gap-4">
      {items.map((item, index) => (
        <div key={index}>
          {isVideo(item) ? (
            <video src={getMediaVideoUrl(item)} controls />
          ) : (
            <img 
              src={getMediaImageUrl(item, { width: 600, quality: 85 })} 
              alt={item.alt || ''} 
            />
          )}
        </div>
      ))}
    </div>
  )
}
```

## 🔄 Миграция со старых запросов

Для обратной совместимости включены deprecated функции:

```typescript
// Старый код (работает, но deprecated)
const mainPage = await getMainPage()
const sports = await getSports()
const abonements = await getAbonements()

// Новый код (рекомендуется)
const homePage = await getHomePage()
const directions = await getDirections()
const memberships = await getMemberships()
```

## 📝 Заметки

- Все функции поддерживают preview режим через параметр `preview`
- Ошибки логируются в консоль и возвращаются fallback значения
- Используйте TypeScript типы для лучшей типизации
- Модуль `media.ts` - универсальное решение для работы с `mediaField`

### ⚠️ Важно о функциях для mediaField

Чтобы избежать конфликта с функциями из `video.ts`, функции из `media.ts` экспортируются с префиксом:
- `getVideoUrl` → `getMediaVideoUrl` (для mediaField)
- `getImageUrl` → `getMediaImageUrl` (для mediaField)

Из `video.ts` доступны:
- `urlForVideo` - для прямой работы с видео ассетами
- `formatVideoDuration` - форматирование длительности
- `formatVideoSize` - форматирование размера файла

## 🎨 Best Practices

1. **Используйте сервисы** вместо прямых запросов:
   ```typescript
   // ✅ Хорошо
   const data = await getHomePage()
   
   // ❌ Плохо
   const data = await client.fetch(homePageQuery)
   ```

2. **Типизируйте данные**:
   ```typescript
   // ✅ Хорошо
   const homePage: SanityHomePage = await getHomePage()
   
   // ❌ Плохо
   const homePage = await getHomePage()
   ```

3. **Используйте mediaField хелперы**:
   ```typescript
   // ✅ Хорошо
   const url = getMediaUrl(media)
   if (isVideo(media)) { ... }
   
   // ❌ Плохо
   const url = media.mediaType === 'video' 
     ? media.video?.asset?.url 
     : urlFor(media.image).url()
   ```

4. **Обрабатывайте null/undefined**:
   ```typescript
   const homePage = await getHomePage()
   if (!homePage) return <Error />
   ```

