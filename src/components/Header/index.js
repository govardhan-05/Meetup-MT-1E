import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <nav className="nav-el">
    <Link to="/">
      <img
        className="logo-image"
        src="https://assets.ccbp.in/frontend/react-js/meetup/website-logo-img.png"
        alt="website logo"
      />
    </Link>
  </nav>
)
export default Header
