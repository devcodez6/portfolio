import "./productlist.css"
import Product from "../product/Product"
import { products } from "../../data"



const ProductList = () => {
  return (
    <div className="pl">
        <div className="pl-texts">
            <h1 className="pl-title">it's devcodez</h1>
            <p className="pl-desc" >
                Devcodez is a creative portfolio that your work has been
            </p>
        </div>
        <div className="pl-list">
          {products.map((item)=>(
            <Product key={item.id} img={item.img} link = {item.link} />
            ))}
        </div>
    </div>
  )
}

export default ProductList