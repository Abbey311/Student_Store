import "./ProductDescription.css"
// import Hero from "../Hero/Hero"
import { useState, useEffect } from "react"
import "./ProductDescription.css"
import axios from "axios"
import { useParams } from "react-router-dom"

export default function ProductDescription() {
    const { id } = useParams()
    const [products, setProducts] = useState({})
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect (()=> {
        const fetchProductbyId = async () => {
            setIsLoading(true)

            try {
                const res = await axios.get(`http://localhost:3001/${id}`)
                console.log({res});
                if (res?.data?.product) {
                  setProducts(res.data.product)
                }
              } catch (err) {
                console.log({err})
                setError("Product Not Found")
              }finally{

              setIsLoading(false)  
              }
        }

        fetchProductbyId()
    }, [id])
    

    const renderProductContent = () => {
        if(isLoading) {
            return <h1>Loading...</h1>
        }
        if(error){
            return (
                <>
                <h1>Error</h1>
                <p className="error">{String(error)}</p>
                </>
            )
        }
            return (
                <>
        <div>
            <div className="image"><img src={products.image}></img></div>
            <div className="content">
                <h1>{products.name}</h1>
            </div>

            <div className="description">
                <>{products.description}</>
            </div>

            <div className="price">
            <>{products.price}</>
            </div>
        </div>
                </>
            )
        }

  return (
    <div className="ProductDescription" >
        {/* <Hero bgImage={products.image}/> */}
            {renderProductContent()}
    </div>
  )
}