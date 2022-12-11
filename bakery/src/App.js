import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import { Homepage } from "./Pages/Homepage"
import { About } from "./Pages/About"
import { Contact } from "./Pages/Contact"
import { Products } from "./Pages/Products"
import { Product } from "./Pages/Product"
import { Admin } from "./Pages/Admin"


function App() {
  return (
    <div classNameName="">
      {/* navigation here */}
      <header className="bg-blue">
        <div className="container mx-auto flex justify-around items-center py-4 px-4">
            <h1 className="font-sans text-4xl text-blue-700 font-bold">MsB</h1>
            <ul className="flex items-center">
                <li className="font-sans mr-8 text-xl border-b-2 border-black">
                  <Link to="/">Home</Link>
                </li>
                <li className="font-sans mr-8 text-xl border-b-2 border-black">
                  <Link to="/products">Products</Link>
                </li>
                <li className="font-sans mr-8 text-xl border-b-2 border-black">
                  <Link to="/contact">Contacts</Link>
                </li>
                <li className="font-sans mr-8 text-xl border-b-2 border-black">
                  <Link to="/about">About</Link>
                </li>
                <li className="font-sans mr-8 text-xl text-red-500 font-bold">
                  <Link to="/admin">Admin</Link>
                </li>
            </ul>
        </div>
    </header>

      <Routes>
        <Route path='/' element={<Homepage />}></Route>
        <Route path='about' element={<About />}></Route>
        <Route path='contact' element={<Contact />}></Route>
        <Route path='admin' element={<Admin />}></Route>
        <Route path='products' element={<Products />}></Route>
        <Route path='products/:id' element={<Product />}></Route>
      </Routes>
    </div>
  );
}

export default App;
