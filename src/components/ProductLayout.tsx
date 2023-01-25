import {Outlet} from "react-router-dom"

const ProductLayout = () => {
  return (
    <div className="product__layout">
       
        <Outlet />
    </div>
  )
}

export default ProductLayout