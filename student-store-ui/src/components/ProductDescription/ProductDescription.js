import "./ProductDescription.css"
import Hero from "../Hero/Hero"
import { useState, useEffect } from "react"
import "./ProductDescription.css"
import axios from "axios"
import { useParams } from "react-router-dom"

export default function ProductDescription({}) {
    const { id } = useParams()
    const [products, setProducts] = useState({})
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect (()=> {
        const fetchProductbyId = async () =>{
            setIsLoading(true)

            try {
                const res = await axios.get(`http://localhost:3000/store/${id}`)
                console.log({res});
                if (res?.data?.products) {
                  setProducts(res.data.products)
                } else {
                  setError("Post Not Found")
                }
              } catch (err) {
                console.log({err})
                setError("Post Not Found")
              }
        }
        setIsLoading(false)

        fetchProductbyId()
    }, [id])
    

    const renderPostContent = () => {
        if(isLoading) {
            return <h1>Loading...</h1>
        }
        if(error){
            return (
                <>
                <h1>Error</h1>
                <p className = "error"></p>
                </>
            )
            return (
                <>
        <div className="content">
            <h1>{products.name}</h1>
        </div>

        <div className="description">
            <>{products.description}</>

        </div>


                </>


            )
        }
    }



  return (
    <div className="ProductDescription" >
        <Hero bgImage={products.image}/>
            {renderPostContent()}
    </div>
  )
}