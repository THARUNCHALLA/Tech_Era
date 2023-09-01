import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <Link to="/">
    <nav className="nav_Container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/tech-era/website-logo-img.png "
        alt="website logo"
        className="website_logo_image"
      />
      <h1 className="Tharun_Challa">THARUN CHALLA</h1>
    </nav>
  </Link>
)

export default Header
