import {useState, useEffect} from "react"
import axios from "axios"
import Home from "../Home/Home"
import './App.css';
import Navbar from "../Navbar/Navbar"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import About from "../About/About"
import ProductDescription from "../ProductDescription/ProductDescription"

function App() {
  const [products, setProducts] = useState([])
  const [isFetching, setIsFetching] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchProducts = async () => {
      setIsFetching(true)
      try {
        const res = await axios.get("http://localhost:3000/store")
        console.log(res.data.products);
        if (res?.data?.products) {
          setProducts(res.data.products)
        } else {
          setError("Error fetching products.")
        }
      } catch (err) {
        console.log(err)
        const message = err?.response?.data?.error?.message
        setError(message ?? String(err))
      } finally {
        setIsFetching(false)
      }
    }

    fetchProducts()

  },[])

  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home products={products}/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/store/:id" element={<ProductDescription/>} />
      </Routes>
      isFetching={isFetching}
      error={error}
      </BrowserRouter>
    </div>
  );
}

export default App;
