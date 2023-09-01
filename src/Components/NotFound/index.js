import Header from '../Header'

import './index.css'

const NotFound = () => (
  <>
    <Header />
    <div className="center">
      <img
        src="https://assets.ccbp.in/frontend/react-js/tech-era/not-found-img.png "
        alt="not found"
        className="not_found_image"
      />
      <h1>Page Not Found</h1>
      <p>We are sorry, the page you requested could not be found</p>
    </div>
  </>
)

export default NotFound
