import './index.css'

const Destination = props => {
  const {placeDetails} = props
  const {name, imageUrl, description} = placeDetails

  return (
    <li className="place-container">
      <img src={imageUrl} alt={name} className="place-image" />
      <div className="text-container">
        <h1 className="name">{name}</h1>
        <p className="description">{description}</p>
      </div>
    </li>
  )
}

export default Destination
