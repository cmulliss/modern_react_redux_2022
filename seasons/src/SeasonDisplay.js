import React from 'react'

// new fn to determine season
const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? 'summer' : 'winter'
  } else {
    return lat > 0 ? 'winter' : 'summer'
  }
}

const SeasonDisplay = (props) => {
  const season = getSeason(props.lat, new Date().getMonth())
  const text = season === 'winter' ? 'Brrr, it is chilly' : "Let's hit the beach"
  const icon = season === 'winter' ? 'snowflake' : 'sun'

  console.log(season)
  return (
    <div>
      <h1>
        <i className={`${icon} icon`}></i>
      </h1>
      <h1>{text}</h1>
      <h1>
        <i className={`${icon} icon`}></i>
      </h1>
    </div>
  )
}

export default SeasonDisplay

// /* <div>
// Latitude: {this.state.lat}
// <br />
// Longitude: {this.state.lon}
// </div> */
