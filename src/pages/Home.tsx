import hero from "../images/hero1.jpeg"
import {Link} from "react-router-dom"
import {AiOutlineArrowRight} from "react-icons/ai"

const Home = () => {
  return (
    <section className="hero" style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${hero})`}}>
        <div className="hero__content">
        <h1>Organic and fresh</h1>
        <Link to={"/products"} className="btn">
            <span>
            Shop Our Products
            </span>
            <AiOutlineArrowRight /> 
        </Link>
        </div>
    </section>
  )
}

export default Home