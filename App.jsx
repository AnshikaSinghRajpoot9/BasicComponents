//import React from 'react'

import Navbar from "./components/Navbar";
import Searchbar from "./components/Searchbar";
import ProductCard from "./components/ProductCard";
import Uppercase from "./components/Uppercase";
import Hover from "./components/Hover";
import Products from "./components/Products";

export default function App() {
  return (
    <div className="bg-orange-700 text-white p-4">
    <Navbar />
    <Searchbar />
    <ProductCard />
    <Uppercase/>
    <Hover/>
    <Numerical/>
    <Products />
    </div>
  )
}
