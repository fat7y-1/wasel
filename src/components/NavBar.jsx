import { Link } from "react-router-dom"
const NavBar = () => {
  return (
    <header>
      <nav className="navbar">
        <Link to="/">
          <img
            height="40px"
            src="https://cdn-icons-png.flaticon.com/128/263/263115.png"
            alt="Home"
          />
        </Link>
        <Link to="/user">
          <img
            height="40px"
            src="https://cdn-icons-png.flaticon.com/128/456/456283.png"
            alt="User Page"
          />
        </Link>
        <Link to="/sign-in">
          <img
            height="40px"
            src="https://cdn-icons-png.flaticon.com/128/2939/2939220.png"
            alt="Sign in"
          />
        </Link>
        <Link to="/sign-up">Sign up</Link>
      </nav>
    </header>
  )
}
export default NavBar
