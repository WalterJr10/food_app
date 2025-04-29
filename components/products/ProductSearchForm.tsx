"use client"
import { SearchSchema } from "@/src/schema"
import { toast } from "react-toastify"
import { redirect } from "next/navigation"

export default function ProductSearchForm() {

    const handleSearchForm = (formData: FormData) => {
        const data = {
            search: formData.get('search')
        }
        const result = SearchSchema.safeParse(data)
        if(!result.success){
            result.error.issues.forEach(issue => {
                toast.error(issue.message)
            })
            return
        }
        redirect(`/admin/products/search?search=${result.data.search}`)
    }

    return (
        <form 
            className='flex items-center space-x-1' 
            action={handleSearchForm}
        >
            <input 
                type="text"
                placeholder='Buscar Producto'
                className='p-2 border rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full'
                name='search'
            />
            <input
                type="submit" 
                className='bg-indigo-600 p-2 uppercase text-white cursor-pointer hover:bg-indigo-700'
                value={"Buscar"}
            />
        </form>
    )
}
