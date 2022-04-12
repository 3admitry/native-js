import * as stream from 'stream';

type CityType = {
    title: string
    cityTitle: string
}
type AddresType = {
    street: string
    city: CityType
}
type TechnologiesType = {
    id: number
    title: string
}
export type StudentsType = {
    id: number
    name: string
    age: number
    isActive: false
    address: AddresType
    technologies: Array<TechnologiesType>
}

export const students = {
    id: 1,
    name: 'Dmitry',
    age: 23,
    isActive: false,
    address: {
        street: 'Avenu 5',
        city: {
            title: 'Brest',
            cityTitle: 'Belarus'
        }
    },
    technologies: [
        {
            id: 1,
            title: 'HTML/CSS'
        },
        {
            id: 2,
            title: 'JS'
        },
        {
            id: 2,
            title: 'Reac'
        }
    ]

}