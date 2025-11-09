import { SanityImageSource } from '@sanity/image-url/lib/types/types'
import { urlFor } from './image'

// Типы для mediaField
export interface SanityMediaField {
  mediaType: 'video' | 'image'
  video?: {
    asset: {
      _id: string
      url: string
      originalFilename?: string
      mimeType?: string
      size?: number
      duration?: number
    }
  }
  image?: SanityImageSource
  poster?: SanityImageSource
  alt?: string
}

// Проверка типа медиа
export const isVideo = (media: SanityMediaField): boolean => {
  return media?.mediaType === 'video'
}

export const isImage = (media: SanityMediaField): boolean => {
  return media?.mediaType === 'image'
}

// Получение URL видео
export const getVideoUrl = (media: SanityMediaField): string | null => {
  if (!isVideo(media)) return null
  return media.video?.asset?.url || null
}

// Получение URL изображения
export const getImageUrl = (
  media: SanityMediaField,
  options?: {
    width?: number
    height?: number
    quality?: number
    fit?: 'clip' | 'crop' | 'fill' | 'fillmax' | 'max' | 'scale' | 'min'
  }
): string | null => {
  if (!isImage(media)) return null
  if (!media.image) return null

  let builder = urlFor(media.image)

  if (options?.width) {
    builder = builder.width(options.width)
  }
  if (options?.height) {
    builder = builder.height(options.height)
  }
  if (options?.quality) {
    builder = builder.quality(options.quality)
  }
  if (options?.fit) {
    builder = builder.fit(options.fit)
  }

  return builder.url()
}

// Получение URL постера для видео
export const getPosterUrl = (
  media: SanityMediaField,
  options?: {
    width?: number
    height?: number
    quality?: number
  }
): string | null => {
  if (!isVideo(media)) return null
  if (!media.poster) return null

  let builder = urlFor(media.poster)

  if (options?.width) {
    builder = builder.width(options.width)
  }
  if (options?.height) {
    builder = builder.height(options.height)
  }
  if (options?.quality) {
    builder = builder.quality(options.quality)
  }

  return builder.url()
}

// Получение медиа URL (автоматический выбор между видео и изображением)
export const getMediaUrl = (
  media: SanityMediaField,
  options?: {
    width?: number
    height?: number
    quality?: number
    fit?: 'clip' | 'crop' | 'fill' | 'fillmax' | 'max' | 'scale' | 'min'
  }
): string | null => {
  if (isVideo(media)) {
    return getVideoUrl(media)
  }
  if (isImage(media)) {
    return getImageUrl(media, options)
  }
  return null
}

// Получение alt текста
export const getMediaAlt = (media: SanityMediaField): string => {
  return media?.alt || ''
}

// Проверка наличия медиа
export const hasMedia = (media: SanityMediaField | null | undefined): boolean => {
  if (!media) return false
  if (isVideo(media) && media.video?.asset?.url) return true
  if (isImage(media) && media.image) return true
  return false
}

// Получение информации о видео
export const getVideoInfo = (media: SanityMediaField) => {
  if (!isVideo(media)) return null

  return {
    url: media.video?.asset?.url,
    filename: media.video?.asset?.originalFilename,
    mimeType: media.video?.asset?.mimeType,
    size: media.video?.asset?.size,
    duration: media.video?.asset?.duration,
  }
}

// Форматирование размера файла
export const formatFileSize = (bytes: number): string => {
  if (bytes === 0) return '0 Bytes'

  const k = 1024
  const sizes = ['Bytes', 'KB', 'MB', 'GB']
  const i = Math.floor(Math.log(bytes) / Math.log(k))

  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
}

