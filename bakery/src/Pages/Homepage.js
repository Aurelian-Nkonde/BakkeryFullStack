export function Homepage(){
    return(
        <div>
            {/* <!-- showcasing --> */}
            <div className="main">
                <div className="max-w-2xl mx-auto flex flex-col">
                    <h1 className="font-serif text-white text-6xl font-bold">Mr-Sean's Bakery..</h1>
                    <h2 className="font-serif text-white pb-4 text-5xl font-bold">We make high grades of all types of bakings</h2>
                    <p className="font-sans text-xl text-gray-400 pb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi velit non nam aut. Perspiciatis quod possimus ea doloribus? Quidem, iure.</p>
                    <div className="flex gap-4 items-center">
                        <button className="bg-blue-700 py-3 px-10 text-xl text-white shadow-xl transition ease-in-out duration-150 hover:bg-blue-600">Products</button>
                        <button className="bg-blue-700 py-3 px-10 text-xl text-white shadow-xl transition ease-in-out duration-150 hover:bg-blue-600">Contact</button>
                    </div>
                </div>
            </div>


            {/* <!-- our history --> */}
            <div className="">
                <div className="container mx-auto max-w-5xl py-28 px-8">
                    <div className="grid grid-cols-2">
                        <div className="flex flex-col justify-center">
                            <h1 className="text-center font-serif text-4xl">Our_History</h1>
                        </div>
                        <div className="flex flex-col justify-center">
                            <p className="text-left text-xl font-sans text-gray-500">
                                Lorem ipsum, dolor Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos odit facilis, velit rerum, voluptates commodi consectetur ab pariatur aut explicabo adipisci eius. Voluptas fugit nostrum ad dolores, quae eius nisi! sit amet consectetur adipisicing elit. Itaque optio vitae officia explicabo obcaecati excepturi pariatur, aut ducimus repudiandae commodi temporibus reiciendis nostrum quis quam aliquam a assumenda iste deserunt.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- our products --> */}
            <div className="bg-gray-900">
                <div className="container mx-auto max-w-5xl  py-20 px-8">
                    <h1  className="text-center font-serif text-4xl pb-10 text-white">Our_Products</h1>
                    <div className="grid grid-cols-3 gap-5">
                        {/* <!-- product --> */}
                        
                        <div className="mb-6">
                            <h1 className="font-serif text-white text-2xl pb-4">Salma_Bread</h1>
                            <div className="">
                                <img src="/img/ales-krivec-QnNqGoCnBg0-unsplash.jpg" className="pro" alt="" />
                            </div>
                            <div className="bg-gray-100 shadow-xl py-4 px-3 transition ease-in-out duration-150  cursor-pointer hover:bg-white" >
                                <p className="font-sans text-xl pb-4 text-gray-600">$3.40</p>
                                <div className="">
                                    <a href="#" className="font-sans text-xl underline">Info</a>
                                </div>
                            </div>
                        </div>
                        <div className="mb-6">
                            <h1 className="font-serif text-white text-2xl pb-4">Salma_Bread</h1>
                            <div className="">
                                <img src="/img/ales-krivec-QnNqGoCnBg0-unsplash.jpg" className="pro" alt="" />
                            </div>
                            <div className="bg-gray-100 shadow-xl py-4 px-3 transition ease-in-out duration-150  cursor-pointer hover:bg-white">
                                <p className="font-sans text-xl pb-4 text-gray-600">$3.40</p>
                                <div className="">
                                    <a href="#" className="font-sans text-xl underline">Info</a>
                                </div>
                            </div>
                        </div>
                        <div className="mb-6">
                            <h1 className="font-serif text-2xl text-white pb-4">Salma_Bread</h1>
                            <div className="">
                                <img src="/img/ales-krivec-QnNqGoCnBg0-unsplash.jpg" className="pro" alt="" />
                            </div>
                            <div className="bg-gray-100 shadow-xl py-4 px-3 transition ease-in-out duration-150  cursor-pointer hover:bg-white">
                                <p className="font-sans text-xl pb-4 text-gray-600">$3.40</p>
                                <div className="">
                                    <a href="#" className="font-sans text-xl underline">Info</a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className="">
                <div className="container mx-auto max-w-2xl  py-20 px-8">
                    <h1 className="text-center font-serif text-4xl pb-8">Why_Us</h1>
                    <p className="text-left text-xl font-sans text-gray-500">b
                        Lorem ipsum, dolor sit amet Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, nam accusantium cupiditate animi reprehenderit consequatur. consectetur adipisicing elit. Nobis inventore repudiandae distinctio provident. Voluptates hic magni, consequatur exercitationem repellendus unde quibusdam nam architecto labore esse? Quibusdam distinctio dolorum, repudiandae ut minima, aut sit, doloremque similique illum possimus est ratione fugit!
                    </p>
                </div>
            </div>

            <div className="banner">
                <div className="flex justify-center">
                    <button className="bg-blue-700 py-3 px-10 text-xl text-white shadow-xl transition ease-in-out duration-150 hover:bg-blue-600">View-Products</button>
                </div>
            </div>

            <div className="bg-black">
                <div className="container mx-auto max-w-5xl  py-20 px-8">
                    <h1 className="font-sans text-center text-3xl text-white pb-2">Mr-Sean's Bakery</h1>
                    <p className="font-sans text-center text-2xl text-white pb-2">&copy;2022</p>
                </div>
            </div>
        </div>
    )
}