// Интерфейс для видео файла в Sanity
export interface SanityVideoAsset {
	_id: string
	url: string
	originalFilename: string
	mimeType: string
	size: number
	duration?: number
}

// Получение URL видео
export const urlForVideo = (videoAsset: SanityVideoAsset) => {
	if (!videoAsset?.url) return null

	// Sanity автоматически предоставляет CDN URL для видео
	return videoAsset.url
}

// Получение видео с параметрами
export const getVideoUrl = (
	videoAsset: SanityVideoAsset,
	options?: {
		quality?: 'low' | 'medium' | 'high'
		format?: 'mp4' | 'webm'
	}
) => {
	if (!videoAsset?.url) return null

	let url = videoAsset.url

	// Добавляем параметры качества если нужно
	if (options?.quality) {
		const qualityParams = {
			low: '?quality=low',
			medium: '?quality=medium',
			high: '?quality=high'
		}
		url += qualityParams[options.quality]
	}

	return url
}

// Проверка поддерживаемых форматов видео
export const isVideoSupported = (mimeType: string): boolean => {
	const supportedTypes = [
		'video/mp4',
		'video/webm',
		'video/ogg',
		'video/quicktime',
		'video/x-msvideo'
	]
	return supportedTypes.includes(mimeType)
}

// Получение расширения файла
export const getVideoExtension = (mimeType: string): string => {
	const extensions = {
		'video/mp4': 'mp4',
		'video/webm': 'webm',
		'video/ogg': 'ogv',
		'video/quicktime': 'mov',
		'video/x-msvideo': 'avi'
	}
	return extensions[mimeType as keyof typeof extensions] || 'mp4'
}

// Форматирование размера файла
export const formatVideoSize = (bytes: number): string => {
	if (bytes === 0) return '0 Bytes'

	const k = 1024
	const sizes = ['Bytes', 'KB', 'MB', 'GB']
	const i = Math.floor(Math.log(bytes) / Math.log(k))

	return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
}

// Форматирование длительности видео
export const formatVideoDuration = (seconds: number): string => {
	if (!seconds) return '00:00'

	const hours = Math.floor(seconds / 3600)
	const minutes = Math.floor((seconds % 3600) / 60)
	const secs = Math.floor(seconds % 60)

	if (hours > 0) {
		return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
	}

	return `${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
}
