import { defineField } from 'sanity'

export default {
    name: 'trainers',
    title: 'Тренеры',
    type: 'document',
    fields: [
        defineField({
            name: 'first_name',
            title: 'Имя',
            type: 'string',
        }),
        defineField({
            name: 'last_name',
            title: 'Фамилия',
            type: 'string',
        }),
        defineField({
            name: 'middle_name',
            title: 'Отчество',
            type: 'string',
        })
    ]
}