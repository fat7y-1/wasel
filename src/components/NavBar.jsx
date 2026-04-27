import { Link } from "react-router-dom"
const NavBar = ({ user, handleLogOut }) => {
  let signedIn = (
    <>
      <Link to="/user" className="nav-link">
        <h3 className="space">List Orders</h3>
      </Link>
      <Link to="/" onClick={handleLogOut} className="nav-link">
        <h3 className="space">Sign Out</h3>
      </Link>
    </>
  )
  let notSignedIn = (
    <>
      <Link to="/sign-in" className="nav-link">
        <h3 className="space">Sign In</h3>
      </Link>
      <Link to="/sign-up" className="nav-link">
        <h3 className="space">Sign up</h3>
      </Link>
    </>
  )
  return (
    <header>
      <nav className="navbar">
        <div className="navv">
          <Link to="/" className="nav-link">
            <h3 className="space">Home</h3>
          </Link>
          {user ? signedIn : notSignedIn}
        </div>
      </nav>
    </header>
  )
}
export default NavBar
