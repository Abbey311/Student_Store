import {useState, useEffect} from "react"
import axios from "axios"
import Home from "../Home/Home"
import './App.css';
import Navbar from "../Navbar/Navbar"
import { BrowserRouter, Routes, Route } from "react-router-dom"
// import About from "../About/About"
import ProductDescription from "../ProductDescription/ProductDescription"

function App() {
  const [products, setProducts] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)


  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true)
      try {
        const res = await axios.get("http://localhost:3001/")
        const products = res?.data?.products;
        if (products) {
          setProducts(products)
        }
      } catch (err) {
        console.log({err})
        setError(err)
      }
      setIsLoading(false)
    }

    fetchProducts()
  },[])

  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home 
        products={products}
        isLoading={isLoading} 
        error={error}
        />}/>
        {/* <Route path="/about" element={<About/>}/> */}
        <Route path="/:id" element={<ProductDescription/>} />

      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
