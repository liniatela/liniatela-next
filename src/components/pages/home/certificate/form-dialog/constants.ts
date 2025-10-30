export type CertificateOption = {
  value: string
  label: string
  description?: string
}

export type SelectionType = 'amount' | 'sessions' | 'custom'

export const CERTIFICATE_TYPES: Record<SelectionType, string> = {
  amount: 'По номиналу',
  sessions: 'По занятиям',
  custom: 'Свой вариант'
}

export const AMOUNT_OPTIONS: CertificateOption[] = [
  { value: '3000', label: '3 000 ₽', description: 'примерно 1 занятие' },
  { value: '5000', label: '5 000 ₽', description: 'примерно 2 занятия' },
  { value: '8000', label: '8 000 ₽', description: 'примерно 3 занятия' },
  { value: '10000', label: '10 000 ₽', description: 'примерно 4 занятия' },
  { value: '15000', label: '15 000 ₽', description: 'примерно 6 занятий' },
  { value: '20000', label: '20 000 ₽', description: 'примерно 8 занятий' }
]

export const SESSIONS_OPTIONS: CertificateOption[] = [
  { value: '1', label: '1 занятие', description: '~3 000 ₽' },
  { value: '4', label: '4 занятия', description: '~10 000 ₽' },
  { value: '8', label: '8 занятий', description: '~20 000 ₽' },
  { value: '12', label: '12 занятий', description: '~30 000 ₽' },
  { value: '16', label: '16 занятий', description: '~40 000 ₽' },
  { value: '20', label: '20 занятий', description: '~50 000 ₽' }
]

export const MOCK_FORM_DATA = {
  name: 'Анна Иванова',
  phone: '+7 (999) 123-45-67',
  email: 'anna@example.com',
  message: 'Хочу подарить сертификат на день рождения подруге'
}
