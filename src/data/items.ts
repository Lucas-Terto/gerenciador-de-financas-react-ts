import { Item } from "../types/Item"

export const items:Item[] = [
    {
        date: new Date(2022, 6, 31),
        category: 'food',
        title: 'McDonalds',
        value: 28.13,
    },
    {
        date: new Date(2022, 6, 30),
        category: 'food',
        title: 'Papo Burger',
        value: 19.90,
    },
    {
        date: new Date(2022, 6, 1),
        category: 'rent',
        title: 'Aluguel',
        value: 1500,
    },
    {
        date: new Date(2022, 7, 15),
        category: 'salary',
        title: 'Salário',
        value: 3500,
    },
]