'use client'

import { useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
  DialogFooter,
} from '@/components/shared/ui/dialog'
import { Button } from '@/components/shared/ui/button'
import { Input } from '@/components/shared/ui/input'
import { Textarea } from '@/components/shared/ui/textarea'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/shared/ui/select'
import {
  CERTIFICATE_TYPES,
  AMOUNT_OPTIONS,
  SESSIONS_OPTIONS,
  type SelectionType,
} from './constants'

type CertificateFormDialogProps = {
  open: boolean
  onOpenChange: (open: boolean) => void
}

type FormState = {
  selectionType: SelectionType
  selectedAmount: string
  selectedSessions: string
  customValue: string
  name: string
  phone: string
  email: string
  message: string
}

const initialFormState: FormState = {
  selectionType: 'amount',
  selectedAmount: '3000',
  selectedSessions: '1',
  customValue: '',
  name: '',
  phone: '',
  email: '',
  message: '',
}

const CertificateFormDialog = ({ open, onOpenChange }: CertificateFormDialogProps) => {
  const [formState, setFormState] = useState<FormState>(initialFormState)

  const handleFieldChange = (field: keyof FormState, value: string) => {
    setFormState((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const handleTypeChange = (value: SelectionType) => {
    setFormState((prev) => ({
      ...prev,
      selectionType: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    let certificateValue = ''
    if (formState.selectionType === 'amount') {
      const option = AMOUNT_OPTIONS.find(opt => opt.value === formState.selectedAmount)
      certificateValue = option?.label || formState.selectedAmount
    } else if (formState.selectionType === 'sessions') {
      const option = SESSIONS_OPTIONS.find(opt => opt.value === formState.selectedSessions)
      certificateValue = option?.label || formState.selectedSessions
    } else {
      certificateValue = formState.customValue
    }

    const formData = {
      certificateType: CERTIFICATE_TYPES[formState.selectionType],
      certificateValue,
      contactInfo: {
        name: formState.name,
        phone: formState.phone,
        email: formState.email,
        message: formState.message,
      },
    }

    console.log('Form submitted:', formData)
    // Здесь будет логика отправки формы

    // Сбрасываем форму и закрываем диалог
    setFormState(initialFormState)
    onOpenChange(false)
  }

  const renderValueSelector = () => {
    if (formState.selectionType === 'amount') {
      return (
        <div className='space-y-2'>
          <label className='text-sm font-medium leading-none'>
            Выберите номинал *
          </label>
          <Select
            value={formState.selectedAmount}
            onValueChange={(value) => handleFieldChange('selectedAmount', value)}
          >
            <SelectTrigger className='w-full h-11'>
              <SelectValue placeholder='Выберите номинал' />
            </SelectTrigger>
            <SelectContent>
              {AMOUNT_OPTIONS.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  <div className='flex flex-col'>
                    <span className='font-medium'>{option.label}</span>
                    {option.description && (
                      <span className='text-xs text-muted-foreground'>
                        {option.description}
                      </span>
                    )}
                  </div>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      )
    }

    if (formState.selectionType === 'sessions') {
      return (
        <div className='space-y-2'>
          <label className='text-sm font-medium leading-none'>
            Выберите количество занятий *
          </label>
          <Select
            value={formState.selectedSessions}
            onValueChange={(value) => handleFieldChange('selectedSessions', value)}
          >
            <SelectTrigger className='w-full h-11'>
              <SelectValue placeholder='Выберите количество' />
            </SelectTrigger>
            <SelectContent>
              {SESSIONS_OPTIONS.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  <div className='flex flex-col'>
                    <span className='font-medium'>{option.label}</span>
                    {option.description && (
                      <span className='text-xs text-muted-foreground'>
                        {option.description}
                      </span>
                    )}
                  </div>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      )
    }

    return (
      <div className='space-y-2'>
        <label htmlFor='customValue' className='text-sm font-medium leading-none'>
          Укажите свой вариант *
        </label>
        <Textarea
          id='customValue'
          placeholder='Например: 7 500 ₽ или 3 занятия'
          value={formState.customValue}
          onChange={(e) => handleFieldChange('customValue', e.target.value)}
          className='min-h-20 resize-none'
          required
        />
        <p className='text-xs text-muted-foreground'>
          Опишите желаемый номинал или количество занятий
        </p>
      </div>
    )
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className='max-w-2xl max-h-[90vh] overflow-y-auto'>
        <DialogHeader>
          <DialogTitle className='text-2xl sm:text-3xl leading-none tracking-tighter'>
            Оформить сертификат
          </DialogTitle>
          <DialogClose />
        </DialogHeader>

        <form onSubmit={handleSubmit} className='space-y-6 mt-4'>
          {/* Тип сертификата */}
          <div className='space-y-2'>
            <label className='text-sm font-medium leading-none'>
              Способ оформления *
            </label>
            <Select value={formState.selectionType} onValueChange={handleTypeChange}>
              <SelectTrigger className='w-full h-11'>
                <SelectValue placeholder='Выберите способ' />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value='amount'>
                  <span className='font-medium'>По номиналу</span>
                </SelectItem>
                <SelectItem value='sessions'>
                  <span className='font-medium'>По количеству занятий</span>
                </SelectItem>
                <SelectItem value='custom'>
                  <span className='font-medium'>Свой вариант</span>
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Динамический выбор значения */}
          <div className='animate-in fade-in-50 duration-200'>
            {renderValueSelector()}
          </div>

          {/* Контактные данные */}
          <div className='space-y-4 pt-4 border-t'>
            <h3 className='text-lg font-medium leading-none tracking-tighter'>
              Контактные данные
            </h3>

            <div className='space-y-2'>
              <label htmlFor='name' className='text-sm font-medium leading-none'>
                Ваше имя *
              </label>
              <Input
                id='name'
                type='text'
                placeholder='Введите ваше имя'
                value={formState.name}
                onChange={(e) => handleFieldChange('name', e.target.value)}
                required
              />
            </div>

            <div className='space-y-2'>
              <label htmlFor='phone' className='text-sm font-medium leading-none'>
                Телефон *
              </label>
              <Input
                id='phone'
                type='tel'
                placeholder='+7 (___) ___-__-__'
                value={formState.phone}
                onChange={(e) => handleFieldChange('phone', e.target.value)}
                required
              />
            </div>

            <div className='space-y-2'>
              <label htmlFor='email' className='text-sm font-medium leading-none'>
                Email
              </label>
              <Input
                id='email'
                type='email'
                placeholder='example@mail.com'
                value={formState.email}
                onChange={(e) => handleFieldChange('email', e.target.value)}
              />
            </div>

            <div className='space-y-2'>
              <label htmlFor='message' className='text-sm font-medium leading-none'>
                Комментарий
              </label>
              <Textarea
                id='message'
                placeholder='Добавьте комментарий или пожелания к сертификату'
                value={formState.message}
                onChange={(e) => handleFieldChange('message', e.target.value)}
                className='min-h-24 resize-none'
              />
            </div>
          </div>

          <DialogFooter className='gap-3 sm:gap-3 pt-4'>
            <Button
              type='button'
              variant='outline'
              onClick={() => onOpenChange(false)}
              className='w-full sm:w-auto'
            >
              Отмена
            </Button>
            <Button type='submit' size='lg' className='w-full sm:w-auto min-w-[200px]'>
              Оформить сертификат
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}

export default CertificateFormDialog