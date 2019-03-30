import './SeasonDisplay.css'
import React from 'react'

const getSeason = (lat, month) => {
    if(month > 2 && month < 9) {
        return lat > 0 ? 'summer' : 'winter'
    } else {
        return lat < 0 ? 'summer' : 'winter'
    }
}

const seasonConfig = {
    summer: {
        text: 'Lecimy na plażę!',
        iconName: 'sun'
    },
    winter: {
        text: 'Brrrr... Zimno!',
        iconName: 'snowflake'
    }
}

const SeasonDisplay = (props) => {
    const season = getSeason(props.lat, new Date().getMonth())
    const {text, iconName} = seasonConfig[season]
    return (
        <div className={`season-display ${season}`}>
            <i className={`icon-left massive ${iconName} icon`} />
            <h1>{text}</h1>
            <i className={`icon-right massive ${iconName} icon`} />
        </div>
    )
}

export default SeasonDisplay