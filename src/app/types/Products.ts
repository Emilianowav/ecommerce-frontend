export interface Products{
    id: number,
    name: string,
    description: string,
    price: string,
    stock:number,
    category: Category,
    images: Images[],
}

interface Category{
    name: string,
}
interface Images{
    id: number,
    url: string,
}