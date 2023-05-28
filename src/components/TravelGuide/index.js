import {Component} from 'react'
import Loader from 'react-loader-spinner'

import Destination from '../Destination'
import './index.css'

class TravelGuide extends Component {
  state = {fetching: false, places: []}

  componentDidMount() {
    this.getTravelDetails()
  }

  getTravelDetails = async () => {
    this.setState({fetching: true})
    const response = await fetch('https://apis.ccbp.in/tg/packages')
    if (response.ok) {
      const {packages} = await response.json()
      const data = packages.map(place => ({
        id: place.id,
        name: place.name,
        imageUrl: place.image_url,
        description: place.description,
      }))
      this.setState({fetching: false, places: data})
    }
  }

  render() {
    const {places, fetching} = this.state
    return (
      <div className="main-container">
        <h1 className="heading">Travel Guide</h1>
        {fetching ? (
          <div data-testid="loader">
            <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
          </div>
        ) : (
          <ul className="places-container">
            {places.map(place => (
              <Destination placeDetails={place} key={place.id} />
            ))}
          </ul>
        )}
      </div>
    )
  }
}

export default TravelGuide
