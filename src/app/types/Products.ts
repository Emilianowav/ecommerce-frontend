export interface Products{
    id: number,
    name: string,
    description: string,
    price: string,
    stock:number,
    category: Category,
    imageUrl: string
}

interface Category{
    name: string,
}