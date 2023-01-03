import {Link} from 'react-router-dom'

import Header from '../Header'

import RegisterContext from '../../context/RegisterContext'
import {Button} from './styledComponents'
import './index.css'

const Home = props => {
  const onRegister = () => {
    const {history} = props
    history.replace('/register')
  }

  return (
    <RegisterContext.Consumer>
      {value => {
        const {isRegistered, name, topic} = value
        console.log(isRegistered)
        return (
          <div>
            <Header />
            {isRegistered === true ? (
              <div className="home-container">
                <h1 className="main-heading">Hello {name}</h1>
                <p className="description">Welcome to {topic}</p>
                <img
                  className="image"
                  src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
                  alt="meetup"
                />
              </div>
            ) : (
              <div className="home-container">
                <h1 className="home-heading">Welcome to Meetup</h1>
                <p className="home-paragraph">Please register for the topic</p>
                <Link to="/register">
                  <Button onClick={onRegister}>Register</Button>
                </Link>
                <img
                  className="image"
                  src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
                  alt="meetup"
                />
              </div>
            )}
          </div>
        )
      }}
    </RegisterContext.Consumer>
  )
}
export default Home
