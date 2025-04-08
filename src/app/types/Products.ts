export interface Products{
    id: number,
    name: string,
    description: string,
    price: string,
    stock:number,
    categories: Category[],
    images: Images[],
}

interface Category{
    id:number,
    name: string,
}
interface Images{
    id: number,
    url: string,
}