import {Link} from "react-router-dom"

const NotFound = () => {
  return (
    <div style={{textAlign: "center"}}>
      <h2>This Page does not exist</h2>
      <p>Go back to homepage</p>
      <Link to={"/"} style={{textDecoration: "underline", padding: "1rem 0"}}>
        Homepage
      </Link>
    </div>
  )
}

export default NotFound;