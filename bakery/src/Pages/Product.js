export function Product(){
    return (
        <div>


            <div className="container mx-auto max-w-2xl py-28 px-8">
                <div className="pb-10">
                    <button className="bg-black py-3 px-10 text-xl text-white transition ease-in-out duration-150 hover:bg-gray-900">Return_To_Products</button>
                </div>
                <h1 className=" pb-8 font-serif text-4xl">Product_Details</h1>

                <div className=" mx-auto pb-6">
                    <img className="shadow-xl rounded-full shadow-xl" src={"/img/ales-krivec-QnNqGoCnBg0-unsplash.jpg"} alt="" id="pro" />
                </div>
                <div className="pl-4">
                    <div className="grid grid-cols-2">
                        <p className="text-center font-serif text-2xl">Name</p>
                        <p className="text-left font-serif text-2xl text-gray-700">Salma-Bread</p>
                    </div>
                    <div className="grid grid-cols-2">
                        <p className="text-center font-serif text-2xl">Price</p>
                        <p className="text-left font-serif text-2xl text-gray-700">$10, 00</p>
                    </div>
                    <div className="grid grid-cols-2">
                        <p className="text-center font-serif text-2xl">Ingredients</p>
                        <p className="text-left font-serif text-2xl text-gray-700">Floor, Sugar, Water, Soda</p>
                    </div>
                </div>
            </div>

        </div>
    )
}