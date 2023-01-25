import ProductItem from "../components/ProductItem";
import {useSelector} from "react-redux";
import {selectProducts} from "../store/store"



const Products = () => {
  const products = useSelector(selectProducts)

  return (
    <div className='product'>
      <h1>Shop Our Products</h1>
      <div className="product__container">
      {products.map((product) => (<ProductItem key={product.id} product={product} />))}
      </div>
    </div>
  )
}

export default Products;