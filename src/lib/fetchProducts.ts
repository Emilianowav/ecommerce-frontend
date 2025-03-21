import { Products } from "@/app/types/Products";
export default async function fetchProducts():Promise<Products[]> {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/products/`);
        if(!response.ok){
            throw new Error ("Error al obtener los productos")
        }

        const products: Products[] = await response.json()

        return products
    } catch (error) {
        console.log(error)
        throw new Error("Catch error, error al obtener productos")
    }
}