export function Add(){
    return (
        <div>


            <div className="container mx-auto max-w-2xl py-28 px-8">
                <div className="pb-10">
                    <button className="bg-black py-3 px-10 text-xl text-white transition ease-in-out duration-150 hover:bg-gray-900">Return_To_Admin</button>
                </div>
                <h1 className="pb-8 font-serif text-4xl">Add-new-Product</h1>

                <form action="">
                    <div className="py-2 flex flex-col">
                        <label for="">Name</label>
                        <input type="text" className="py-2 px-4 w-full border-2 border-gray-400"/>
                    </div>
                    <div className="py-2 flex flex-col">
                        <label for="">Price</label>
                        <input type="text" className="py-2 px-4 w-full border-2 border-gray-400"/>
                    </div>
                    <div className="py-2 flex flex-col">
                        <label for="">Image</label>
                        <input type="file" className="py-2 px-4 w-full border-2 border-gray-400"/>
                    </div>
                    <div className="py-4 flex flex-col">
                        <label for="">Ingrediants</label>
                        <textarea name="" id="" cols="30" rows="4" className="py-2 px-4 w-full border-2 border-gray-400"></textarea>
                    </div>
                    <button className="bg-blue-700 text-white text-xl py-3 w-full shadow-xl">Add-Product</button>
                </form>

            </div>

        </div>
    )
}