import {useSelector, useDispatch} from "react-redux";
import {selectProducts} from "../store/store";
import {useParams} from "react-router-dom";
import {addToCart} from "../Slices/cartSlice"
import NotFound from "./NotFound";

const Product = () => {
    const dispatch = useDispatch()
    const {id} = useParams();
    const products = useSelector(selectProducts);
    const item = products.find(prod => {
        if(id) {
            return prod.id === +id
        }
        return null;
    })

  return (
    <section className="product__detail">
        <h2>Product <span>{item?.name}</span></h2>
        {!item ? <NotFound /> : (
            <div className="product__detail-container">
            <img src={item?.image} alt={item?.name} />
            <div className="product__detail-info">
                <h4>{item?.name}</h4>
                <p>€ {item?.price}</p>
            </div>
            <p>{item?.desc}</p>
            <button onClick={() => dispatch(addToCart(item!))}>
                Add to cart
            </button>
        </div>
        )}
    </section>
  )
}

export default Product;