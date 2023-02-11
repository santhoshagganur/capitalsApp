import {Component} from 'react'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here

class Capitals extends Component {
  state = {activeCapital: countryAndCapitalsList[0].capitalDisplayText, country: countryAndCapitalsList[0].country}

  changeCapital = event => {
    const country = countryAndCapitalsList.filter(
      each => each.id === event.target.value,
    )
    this.setState({activeCapital: event.target.value, country: country[0].country})
  }

  
  render() {
    const {activeCapital, country} = this.state
    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading"> Countries And Capitals </h1>
          <div>
            <select
              id="capitals"
              className="selection-container"
              onChange={this.changeCapital}
              value={activeCapital}
            >
              {countryAndCapitalsList.map(each => (
                <option value={each.id} key= {each.id}> {each.capitalDisplayText} </option>
              ))}
            </select>
            <label htmlFor="capitals" className="text">
              is capital of which country?
            </label>
          </div>

          <p className="country"> {country} </p>
        </div>
      </div>
    )
  }
}

export default Capitals
