// import Hero from "../Hero/Hero"
import "./Home.css"
import Navbar from "../Navbar/Navbar"
import ProductPreview from "../ProductPreview/ProductPreview"

// const heroBgImage = "https://images.unsplash.com/photo-1526470498-9ae73c665de8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2674&q=80"

export default function Home({products = []}){
    return (
        <div className="Home">
            <Navbar />
            {/* <Hero bgImage={heroBgImage} /> */}

            <div className="feed">
                {products.map(products => (
                    <ProductPreview products={products} key={products.id} />
                ))}
            </div>
            </div>
    )
}