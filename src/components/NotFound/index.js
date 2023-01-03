import './index.css'

const NotFound = () => (
  <div className="not-found-container">
    <img
      className="image"
      src="https://assets.ccbp.in/frontend/react-js/meetup/not-found-img.png"
      alt="not found"
    />
    <h1 className="not-found-heading">Page not Found</h1>
    <p className="not-found-para">
      We are sorry, the page you requested could not be found.
    </p>
  </div>
)

export default NotFound
