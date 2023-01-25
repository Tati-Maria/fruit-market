import {BsPlus} from "react-icons/bs"
import {BiMinus} from "react-icons/bi"
import {decrementQty, incrementQty, removeFromCart} from "../Slices/cartSlice";
import { selectcart } from "../store/store";
import {useDispatch, useSelector} from "react-redux";
import {FaTimesCircle} from "react-icons/fa";
import {toast} from "react-toastify"

const Cart = () => {
  const cartItems = useSelector(selectcart);
  const dispatch = useDispatch();

  const handleCheckout = () => {
    toast.info("Functionality not added", {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 1000
    })
  }

  return (
    <>
    <h2 className="cart__title">Your Cart</h2>
    <section className="cart">
      <div className="cart__container">
      {cartItems.length === 0 && (<span className="empty">Your shopping cart is empty!</span>)}
      <div className="cart__items">
        {cartItems.map(item => (
          <div key={item.id} className="cart__items-item">
            <div className="cart__items-item-info">
              <img src={item.image} alt={item.name} />
              <div>
                <h4>{item.name}</h4>
                <p>€ {item.price}</p>
              </div>
            </div>
            <div className="cart__items-btn">
              <button onClick={() => dispatch(decrementQty(item))}>
                <BiMinus />
              </button>
              <span>{item.quantity}</span>
              <button onClick={() => dispatch(incrementQty(item))}>
                <BsPlus />
              </button>
            </div>
            <button 
            onClick={() => dispatch(removeFromCart(item))}
            className="cart__remove-btn">
              <FaTimesCircle color="red" size={25} />
            </button>
            <div className="cart__subtotal">
              <p>Subtotal: <span>€ {item.price * item.quantity}</span></p>
            </div>
          </div>
        ))}
        <div className="cart__summary">
          <div className="cart__summary-container">
            <h2>Order Summary</h2>
            <div>
              <p>Total: <span>€ {cartItems.reduce((acc, item) => acc += item.price * item.quantity, 0)}</span></p>
            </div>
            
          </div>
          <button className="cart__btn" onClick={handleCheckout}>
            Order Now
          </button>
        </div>
      </div>
      </div>
    </section>
    </>
  )
}

export default Cart;