export function Contact(){
    return(
        <div>
            <div className="container mx-auto max-w-xl py-28 px-8">
                <h1 className="text-center pb-4 font-serif text-4xl">Contact_Us</h1>

                <form action="">
                    <div className="py-2 flex flex-col">
                        <label for="">Name</label>
                        <input type="text" className="font-sans py-2 px-4 py-2 border-2 border-black shadow-lg w-full" />
                    </div>
                    <div className="py-2 flex flex-col">
                        <label for="">Email</label>
                        <input type="text" className="font-sans py-2 px-4 py-2 border-2 border-black shadow-lg w-full" />
                    </div>
                    <div className="py-2 flex pb-4 flex-col">
                        <label for="">Name</label>
                        <textarea name="" id="" cols="30" rows="4" className="font-sans py-2 px-4 py-2 border-2 border-black shadow-lg w-full"></textarea>
                    </div>
                    <button className="bg-blue-700 text-white py-4 w-full shadow-xl">Send-Message</button>

                </form>

            </div>
        </div>
    )
}