import { Link } from 'react-router-dom'
import '../styles/Navbar.css'

function Navbar() {
  return (
    <>
      <div className="nav">
        <Link to={'/'}>
          <h1 className="heading">Flavors</h1>
        </Link>
      </div>
    </>
  )
}

export default Navbar
