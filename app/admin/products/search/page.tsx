
import Heading from "@/components/ui/Heading"
import ProductTable from "@/components/products/ProductsTable"
import { prisma } from "@/src/lib/prisma"
import ProductSearchForm from "@/components/products/ProductSearchForm"

async function searchProducts(searchTerm: string) {
    const products = await prisma.product.findMany({
        where: {
            name: {
                contains: searchTerm,
                mode: 'insensitive'
            }
        },
        include: {
            category: true
        }
    })
    return products
}

export default async function SearchPage({searchParams}: { searchParams: Promise<{search:string}> }) {

    const search = (await searchParams).search
    const products = await searchProducts(search)
    return (
        <>
            <Heading>Resultados de búsqueda: {search}</Heading>
            <div className='flex flex-col gap-5 lg:flex-row lg:justify-end'>
                <ProductSearchForm />
            </div>

            {products.length ? (
                <ProductTable
                    products={products}
                />
            ): <p className="text-center text-lg">No hay resultados</p>}

        </>
    )
}
