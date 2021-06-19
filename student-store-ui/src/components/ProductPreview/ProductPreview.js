import { Link } from "react-router-dom"
import "./ProductPreview.css"

export default function ProductPreview({products = {} }) {
    return (
        <Link className="product-preview-container" to={`/store${products.name}`} >
            <div className="product-preview-cover" style={{
                backgroundImage: `url(${products.image})`
            }} >

            </div>

            <div className="product-preview-body">
                <div className="product-preview-title">
                    <h1>{products.name}</h1>
                </div>
                <div className="product-preview-summary">
                    <p>{"$" + products.price}</p>
                    <p align="right">
                    <button type="button">Add to cart</button>
                    </p>
                </div>
            </div>

            <div className="product-preview-footer">

            </div>
        </Link>
    )
}