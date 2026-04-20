import { Link } from "react-router-dom"
const NavBar = ({ user, handleLogOut }) => {
  let signedIn = (
    <>
      <Link to="/user">
        <img
          height="40px"
          src="https://cdn-icons-png.flaticon.com/128/456/456283.png"
          alt="User Page"
        />
      </Link>
      <Link to="/" onClick={handleLogOut}>
        <img
          height="40px"
          src="https://cdn-icons-png.flaticon.com/128/4400/4400629.png"
          alt="Sign out"
        />
      </Link>
    </>
  )
  let notSignedIn = (
    <>
      <Link to="/sign-in">
        <img
          height="40px"
          src="https://cdn-icons-png.flaticon.com/128/2939/2939220.png"
          alt="Sign in"
        />
      </Link>
      <Link to="/sign-up">Sign up</Link>
    </>
  )
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
        {user ? signedIn : notSignedIn}
      </nav>
    </header>
  )
}
export default NavBar
