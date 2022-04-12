export type userType =
    {
        name: string
        hair: number
        address: addressType
        laptop: laptopType
    }
export type addressType =
    {
        city: string
        house: number
    }
export type laptopType =
    {
        title: string
    }


    export const changeUserAdress = (obj:userType, city:string) => {
        return {
            ...obj,
            address: {
                ...obj.address,
                city:  city
            }
        }
    }

    export const changeUserLaptop = (obj:userType, title:string) => {
        return {
            ...obj,
            laptop: {
                ...obj.laptop,
                title:  title
            }
        }
    }