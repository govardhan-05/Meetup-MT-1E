import Header from '../Header'
import RegisterContext from '../../context/RegisterContext'
import './index.css'

const topicsList = [
  {
    id: 'ARTS_AND_CULTURE',
    displayText: 'Arts and Culture',
  },
  {
    id: 'CAREER_AND_BUSINESS',
    displayText: 'Career and Business',
  },
  {
    id: 'EDUCATION_AND_LEARNING',
    displayText: 'Education and Learning',
  },
  {
    id: 'FASHION_AND_BEAUTY',
    displayText: 'Fashion and Learning',
  },
  {
    id: 'GAMES',
    displayText: 'Games',
  },
]

const Register = props => (
  <RegisterContext.Consumer>
    {value => {
      const {
        name,
        topic,
        changeName,
        changeTopic,
        showError,
        registerName,
        updateError,
      } = value

      const submitRegistration = event => {
        event.preventDefault()

        if (name !== '' && topic !== '') {
          const {history} = props
          history.replace('/')
          registerName()
        } else {
          updateError()
        }
      }

      const onChangeName = event => {
        changeName(event.target.value)
      }

      const onChangeTopic = event => {
        changeTopic(event.target.value)
      }

      return (
        <div>
          <Header />
          <div>
            <div className="register-container">
              <img
                className="register-image"
                src="https://assets.ccbp.in/frontend/react-js/meetup/website-register-img.png"
                alt="website register"
              />
              <form className="form" onSubmit={submitRegistration}>
                <h1 className="register-heading">Let us join</h1>
                <div className="input-container">
                  <label className="label" htmlFor="name">
                    NAME
                  </label>
                  <input
                    className="input"
                    id="name"
                    value={name}
                    type="text"
                    onChange={onChangeName}
                    placeholder="Your Name"
                  />
                </div>
                <div className="input-container">
                  <label htmlFor="topic">Topics</label>
                  <select
                    className="select"
                    id="topic"
                    value={topic}
                    onChange={onChangeTopic}
                  >
                    {topicsList.map(item => (
                      <option value={item.id} key={item.id}>
                        {item.displayText}
                      </option>
                    ))}
                  </select>
                </div>
                <button className="register-btn" type="submit">
                  Register Now
                </button>
                {showError === true ? (
                  <p className="error-msg">Please enter your name</p>
                ) : (
                  ''
                )}
              </form>
            </div>
          </div>
        </div>
      )
    }}
  </RegisterContext.Consumer>
)

export default Register
