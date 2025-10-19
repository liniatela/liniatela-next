// memberships-data.ts или constants/memberships.ts

export const COMPARISON_MEMBERSHIPS = [
  {
    id: 'focus',
    name: 'Фокус',
    isPopular: false,
    plans: [
      {
        duration: 'от 1 месяца',
        price: '4 900',
        benefits: [
          {
            icon: 'PlusCircle',
            text: '1 любое направление',
            highlighted: true
          },
          {
            icon: 'Infinity',
            text: 'Неограниченное посещение',
            highlighted: true
          }
        ]
      },
      {
        duration: 'от 3 месяцев',
        price: '14 700',
        savings: '1 900',
        benefits: [
          {
            icon: 'PlusCircle',
            text: '1 любое направление',
            highlighted: false
          },
          {
            icon: 'Infinity',
            text: 'Неограниченное посещение',
            highlighted: false
          },
          {
            icon: 'User2',
            text: '1 индивидуальная тренировка',
            highlighted: true
          },
          {
            icon: 'Snowflake',
            text: '14 дней заморозки',
            highlighted: true
          }
        ]
      },
      {
        duration: 'от 6 месяцев',
        price: '29 400',
        savings: '4 500',
        benefits: [
          {
            icon: 'PlusCircle',
            text: '1 любое направление',
            highlighted: false
          },
          {
            icon: 'Infinity',
            text: 'Неограниченное посещение',
            highlighted: false
          },
          {
            icon: 'UserPlus2',
            text: '1 индивидуальная тренировка с PRO-тренером',
            highlighted: true
          },
          {
            icon: 'Snowflake',
            text: '30 дней заморозки',
            highlighted: true
          },
          {
            icon: 'Sparkles',
            text: 'Массаж',
            highlighted: true
          }
        ]
      }
    ]
  },
  {
    id: 'balance',
    name: 'Баланс',
    isPopular: false,
    plans: [
      {
        duration: 'от 1 месяца',
        price: '6 900',
        benefits: [
          {
            icon: 'PlusCircle',
            text: '3 любых направления',
            highlighted: true
          },
          {
            icon: 'Infinity',
            text: 'Неограниченное посещение',
            highlighted: true
          }
        ]
      },
      {
        duration: 'от 3 месяцев',
        price: '20 700',
        savings: '3 800',
        benefits: [
          {
            icon: 'PlusCircle',
            text: '3 любых направления',
            highlighted: false
          },
          {
            icon: 'Infinity',
            text: 'Неограниченное посещение',
            highlighted: false
          },
          {
            icon: 'User2',
            text: '2 индивидуальные тренировки',
            highlighted: true
          },
          {
            icon: 'Snowflake',
            text: '14 дней заморозки',
            highlighted: true
          }
        ]
      },
      {
        duration: 'от 6 месяцев',
        price: '41 400',
        savings: '7 000',
        benefits: [
          {
            icon: 'PlusCircle',
            text: '3 любых направления',
            highlighted: false
          },
          {
            icon: 'Infinity',
            text: 'Неограниченное посещение',
            highlighted: false
          },
          {
            icon: 'UserPlus2',
            text: '2 индивидуальные тренировки с PRO-тренером',
            highlighted: true
          },
          {
            icon: 'Snowflake',
            text: '30 дней заморозки',
            highlighted: true
          },
          {
            icon: 'Sparkles',
            text: 'Массаж',
            highlighted: true
          }
        ]
      }
    ]
  },
  {
    id: 'harmony',
    name: 'Гармония',
    isPopular: true,
    plans: [
      {
        duration: 'от 1 месяца',
        price: '7 900',
        benefits: [
          {
            icon: 'Infinity',
            text: 'Безлимит направлений',
            highlighted: true
          },
          {
            icon: 'Infinity',
            text: 'Неограниченное посещение',
            highlighted: true
          }
        ]
      },
      {
        duration: 'от 3 месяцев',
        price: '23 700',
        savings: '5 700',
        benefits: [
          {
            icon: 'Infinity',
            text: 'Безлимит направлений',
            highlighted: false
          },
          {
            icon: 'Infinity',
            text: 'Неограниченное посещение',
            highlighted: false
          },
          {
            icon: 'User2',
            text: '3 индивидуальные тренировки',
            highlighted: true
          },
          {
            icon: 'Snowflake',
            text: '14 дней заморозки',
            highlighted: true
          }
        ]
      },
      {
        duration: 'от 6 месяцев',
        price: '47 400',
        savings: '12 000',
        benefits: [
          {
            icon: 'Infinity',
            text: 'Безлимит направлений',
            highlighted: false
          },
          {
            icon: 'Infinity',
            text: 'Неограниченное посещение',
            highlighted: false
          },
          {
            icon: 'UserPlus2',
            text: '3 индивидуальные тренировки с PRO-тренером',
            highlighted: true
          },
          {
            icon: 'Snowflake',
            text: '30 дней заморозки',
            highlighted: true
          },
          {
            icon: 'Sparkles',
            text: 'Массаж',
            highlighted: true
          },
          {
            icon: 'Salad',
            text: 'Консультация нутрициолога',
            highlighted: true
          }
        ]
      }
    ]
  },
  {
    id: 'single-service',
    name: 'Разовое посещение',
    isPopular: false,
    plans: [
      {
        duration: 'Одно посещение',
        price: '890',
        benefits: [
          {
            icon: 'PlusCircle',
            text: 'Любое направление',
            highlighted: true
          }
        ]
      }
    ]
  },
  {
    id: 'personal-training',
    name: 'Индивидуальная тренировка',
    isPopular: false,
    plans: [
      {
        duration: 'Одно посещение',
        price: '1 900',
        benefits: [
          {
            icon: 'PlusCircle',
            text: 'Любое направление',
            highlighted: true
          },
          {
            icon: 'User2',
            text: '1 индивидуальная тренировка',
            highlighted: true
          },
        ]
      }
    ]
  },
  {
    id: 'personal-training-pro',
    name: 'Индивидуальная тренировка PRO',
    isPopular: false,
    plans: [
      {
        duration: 'Одно посещение',
        price: '2 500',
        benefits: [
          {
            icon: 'PlusCircle',
            text: 'Любое направление',
            highlighted: true
          },
          {
            icon: 'UserPlus2',
            text: '1 индивидуальная тренировка с PRO-тренером',
            highlighted: true
          },
        ]
      }
    ]
  },
  {
    id: 'split',
    name: 'Сплит',
    isPopular: false,
    plans: [
      {
        duration: 'Одно посещение',
        price: '2 900',
        benefits: [
          {
            icon: 'PlusCircle',
            text: 'Любое направление',
            highlighted: true
          },
          {
            icon: 'User2',
            text: 'Занятие в паре',
            highlighted: true
          }
        ]
      }
    ]
  },
  {
    id: 'split-pro',
    name: 'Сплит PRO',
    isPopular: false,
    plans: [
      {
        duration: 'Одно посещение',
        price: '3 500',
        benefits: [
          {
            icon: 'PlusCircle',
            text: 'Любое направление',
            highlighted: true
          },
          {
            icon: 'UserPlus2',
            text: 'Занятие в паре с PRO-тренером',
            highlighted: true
          }
        ]
      }
    ]
  }
]
