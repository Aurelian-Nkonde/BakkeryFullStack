import { useState } from "react"
import { Add } from "../Components/Add"

const products = []

export function Admin(){
    const [ product, setProduct ] = useState([])
    const [newProduct, setNewProduct] = useState({})


    return(
        <div>

    
            <div className="container mx-auto max-w-5xl py-28 px-8">
                <h1 className="text-center mb-8 font-serif text-4xl bg-blue-500 py-10">Admin-panel</h1>

                <h1 className="font-sans text-3xl pb-6">{product.length} products available</h1>
                <div className="pb-6">
                    {/* <button className="bg-blue-400 py-3 px-10 text-xl">Add-New-Product</button> */}
                    <Add />
                </div>

                <p className="font-serif text-2xl pb-6">List of products</p>
                <table className="table table-fixed w-full text-center">
                    <thead className="bg-blue-800">
                        <tr className="shadow-xl">
                            <th className="py-4 font-serif text-2xl tracking-wide">Id</th>
                            <th className="py-4 font-serif text-2xl tracking-wide">Name</th>
                            <th className="py-4 font-serif text-2xl tracking-wide">Price</th>
                            <th className="py-4 font-serif text-2xl tracking-wide">EditOption</th>
                            <th className="py-4 font-serif text-2xl tracking-wide">DeleteOption</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border-b-2 border-gray-200">
                            <td className="font-serif py-3 text-xl">1</td>
                            <td className="font-serif py-3 text-xl">Salma bread</td>
                            <td className="font-serif py-3 text-xl">$2,00</td>
                            <td className="font-serif py-1 text-blue-600 text-xl border-2 border-gray-400 underline">Edit</td>
                            <td className="font-serif py-1 text-red-600 text-xl border-2 border-gray-400 underline">Delete</td>
                        </tr>
                        <tr className="border-b-2 border-gray-200">
                            <td className="font-serif py-3 text-xl">1</td>
                            <td className="font-serif py-3 text-xl">Salma bread</td>
                            <td className="font-serif py-3 text-xl">$2,00</td>
                            <td className="font-serif py-1 text-blue-600 text-xl border-2 border-gray-400 underline">Edit</td>
                            <td className="font-serif py-1 text-red-600 text-xl border-2 border-gray-400 underline">Delete</td>
                        </tr>

                    </tbody>
                </table>
            </div>


        </div>
    )
}