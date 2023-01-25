import {useDispatch} from "react-redux";
import {AiOutlinePlus} from "react-icons/ai";
import { addToCart } from "../Slices/cartSlice";
import { Product } from "../Slices/productSlice";
import {Link} from "react-router-dom"

type ProductItemProps = {
  product: Product
}

const ProductItem = ({product}: ProductItemProps) => {
  const dispatch = useDispatch();

  return (
    <section className="product__item">
      <Link to={`/products/${product.id}`}>
      <img src={product.image} alt={product.name} />
      </Link>
      <div className="product__info">
        <h4>{product.name}</h4>
        <p>€ {product.price}</p>
      </div>
      <button
      onClick={() => {
        dispatch(addToCart(product))
      }}>
        <AiOutlinePlus />
        <span>Add to cart</span>
      </button>
    </section>
  )
}

export default ProductItem;