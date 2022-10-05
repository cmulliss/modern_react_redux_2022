import React from 'react'
import './SeasonDisplay.css'

const seasonConfig = {
  summer: {
    text: "Let's hit the beach!",
    iconName: 'sun'
  },
  winter: {
    text: 'Brr, its chilly!',
    iconName: 'snowflake'
  }
}

// new fn to determine season
const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? 'summer' : 'winter'
  } else {
    return lat > 0 ? 'winter' : 'summer'
  }
}

const SeasonDisplay = (props) => {
  //
  const season = getSeason(props.lat, new Date().getMonth())
  // destructure out text and iconName
  const { text, iconName } = seasonConfig[season] //  will return our object: {text, inconName}

  console.log(season)
  return (
    <div className={`season-display ${season}`}>
      <h1>
        <i className={`icon-left huge ${iconName} icon`}></i>
      </h1>
      <h1>{text}</h1>
      <h1>
        <i className={`icon-right huge ${iconName} icon`}></i>
      </h1>
    </div>
  )
}

export default SeasonDisplay

// good practice to make sure the root element inside the component has a className = to the kind of the CSS version of the component name.
