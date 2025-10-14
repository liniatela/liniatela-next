'use client'

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose
} from '@/components/shared/dialog'

const membershipsData = [
  {
    id: 'focus',
    name: 'Фокус',
    type: 'абонемент',
    price1Month: '4 900 ₽',
    price3Month: '14 700 ₽',
    bonuses3Month: ['1 индивидуальная тренировка', 'Заморозка на 2 недели'],
    price6Month: '29 400 ₽',
    bonuses6Month: ['1 индивидуальная тренировка (ТОП тренер)', 'Заморозка на 1 месяц', 'Массаж'],
    savings3Month: '1 900 ₽',
    savings6Month: ' 4 500 ₽'
  },
  {
    id: 'balance',
    name: 'Баланс',
    type: 'абонемент',
    price1Month: '6 900 ₽',
    price3Month: '20 700 ₽',
    bonuses3Month: ['2 индивидуальные тренировки', 'Заморозка на 2 недели'],
    price6Month: '41 400 ₽',
    bonuses6Month: ['2 индивидуальные тренировки (ТОП тренер)', 'Заморозка на 1 месяц', 'Массаж'],
    savings3Month: '3 800 ₽',
    savings6Month: ' 7 000 ₽'
  },
  {
    id: 'harmony',
    name: 'Гармония',
    type: 'абонемент',
    price1Month: '7 900 ₽',
    price3Month: '23 700 ₽',
    bonuses3Month: ['3 индивидуальные тренировки', 'Заморозка на 2 недели'],
    price6Month: '47 400 ₽',
    bonuses6Month: ['3 индивидуальные тренировки (ТОП тренер)', 'Заморозка на 1 месяц', 'Массаж', 'Консультация нутрициолога'],
    savings3Month: '5 700 ₽',
    savings6Month: ' 12 000 ₽'
  }
]

const servicesData = [
  {
    id: 'single',
    name: 'Разовое посещение',
    type: 'разовое',
    price: '890 ₽'
  },
  {
    id: 'individual',
    name: 'Индивидуальная тренировка',
    type: 'персональная',
    price: '1 900 ₽'
  },
  {
    id: 'individual-pro',
    name: 'Индивидуальная тренировка (ТОП тренер)',
    type: 'персональная',
    price: '2 500 ₽'
  },
  {
    id: 'split',
    name: 'Сплит тренировка',
    type: 'персональная (сплит)',
    price: '2 900 ₽'
  },
  {
    id: 'split-pro',
    name: 'Сплит тренировка (ТОП тренер)',
    type: 'персональная (сплит)',
    price: '3 500 ₽'
  }
]

export const ComparisonDialog = ({
  open,
  onOpenChange
}: {
  open: boolean
  onOpenChange: (open: boolean) => void
}) => {

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className='max-md:max-w-screen max-md:w-screen max-md:h-screen max-md:max-h-screen max-md:rounded-none md:max-w-[95vw] md:max-h-[90vh] p-0'>
        <DialogHeader className='sticky top-0 z-10 bg-white p-4 md:p-8 !pb-2'>
          <DialogTitle className='text-2xl lg:text-3xl'>Сравнить абонементы</DialogTitle>
          <DialogClose />
        </DialogHeader>

        <div className='overflow-x-auto overflow-y-auto max-h-[calc(90vh-80px)] px-4 pb-6 md:px-8 space-y-10'>

          {/* ТАБЛИЦА 1: АБОНЕМЕНТЫ */}
          <div>
            <h3 className='text-lg mb-3'>Абонементы</h3>
            <div className='overflow-x-auto border border-input rounded-lg'>
              <table className='w-full border-collapse text-sm'>
                <thead>
                  <tr className='border-b border-input'>
                    <th className='text-left py-3 px-3 font-normal text-primary min-w-[140px]  z-10 border-r border-input'>
                      Название
                    </th>

                    <th className='text-center py-3 px-3 font-normal text-primary min-w-[110px] border-r border-input'>
                      1 мес.
                    </th>
                    <th className='text-center py-3 px-3 font-normal text-primary min-w-[110px]'>
                      3 мес.
                    </th>
                    <th className='text-left py-3 px-3 font-normal text-primary min-w-[220px]'>
                      Бонусы за 3 мec.
                    </th>
                    <th className='text-left py-3 px-3 font-normal text-primary min-w-[110px] border-r border-input'>
                      Экономия за 3 мес.
                    </th>
                    <th className='text-center py-3 px-3 font-normal text-primary min-w-[110px]'>
                      6 мес.
                    </th>
                    <th className='text-left py-3 px-3 font-normal text-primary min-w-[240px]'>
                      Бонусы за 6 мес.
                    </th>
                    <th className='text-center py-3 px-3 font-normal text-primary min-w-[110px]'>
                      Экономия за 6 мес.
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {membershipsData.map((item) => (
                    <tr
                      key={item.id}
                      className='border-b border-gray-200 last:border-b-0  transition-colors'
                    >
                      <td className='py-3 px-3  text-gray-900 bg-white  transition-colors border-r border-input'>
                        {item.name}
                      </td>

                      <td className='py-3 px-3 text-center  text-gray-900 border-r border-input'>
                        {item.price1Month}
                      </td>
                      <td className='py-3 px-3 text-center  text-gray-900'>
                        {item.price3Month}
                      </td>
                      <td className='py-3 px-3'>
                        <ul className='space-y-1'>
                          {item.bonuses3Month.map((bonus, idx) => (
                            <li key={idx} className='flex items-start text-xs'>
                              <span className='text-green-500 mr-2 mt-0.5'>●</span>
                              <span className='text-muted-foreground'>{bonus}</span>
                            </li>
                          ))}
                        </ul>
                      </td>
                      <td className='py-3 px-3 text-center  text-gray-900 border-r border-input'>
                        {item.savings3Month}
                      </td>
                      <td className='py-3 px-3 text-center  text-gray-900'>
                        {item.price6Month}
                      </td>
                      <td className='py-3 px-3'>
                        <ul className='space-y-1'>
                          {item.bonuses6Month.map((bonus, idx) => (
                            <li key={idx} className='flex items-start text-xs'>
                              <span className='text-green-500 mr-2 mt-0.5'>●</span>
                              <span className='text-muted-foreground'>{bonus}</span>
                            </li>
                          ))}
                        </ul>
                      </td>
                      <td className='py-3 px-3 text-center  text-gray-900'>
                        {item.savings6Month}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>


          {/* ТАБЛИЦА 2: РАЗОВЫЕ УСЛУГИ */}
          <div>
            <h3 className='text-lg mb-3'>Разовые услуги</h3>
            <div className='overflow-x-auto border border-input rounded-lg w-max'>
              <table className='border-collapse text-sm'>
                <thead>
                  <tr className='border-b border-input'>
                    <th className='text-left py-3 px-3 font-normal text-primary min-w-[280px] border-r border-input'>
                      Название
                    </th>

                    <th className='text-center py-3 px-3 font-normal text-primary min-w-[150px]'>
                      Стоимость
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {servicesData.map((item) => (
                    <tr
                      key={item.id}
                      className='border-b border-gray-200 last:border-b-0  transition-colors'
                    >
                      <td className='py-3 px-4 text-gray-900 border-r border-input'>
                        {item.name}
                      </td>

                      <td className='py-3 px-4 text-center text-gray-900'>
                        {item.price}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </DialogContent>
    </Dialog>
  )
}