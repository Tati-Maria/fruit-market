import {AiOutlineShoppingCart} from "react-icons/ai"
import {Link} from "react-router-dom";
import {useSelector} from "react-redux"
import {selectcart} from "../store/store"


const Navbar = () => {
  const cartItems = useSelector(selectcart)
  return (
    <nav className="navbar">
        <div className="navbar__container container">
            <Link to={"/"}>
            <h2>FruitMarket</h2>
            </Link>
            <div className="navbar__links">
              <Link to={"/about"}>
                About
              </Link>
            <Link to={"/cart"} className="navbar__cart">
                <span className="navbar__cart-container">
                    {cartItems.length}
                </span>
                <AiOutlineShoppingCart color="#fff" size={30}/>
            </Link>
            </div>
        </div>
    </nav>
  )
}

export default Navbar;