import React from 'react'
import './Country.css'

const Country = (props) => {
    const { name, region, area, flags } = props.country
    return (
        <div className='country'>
            <h1> {name.common}</h1>
            <img src={flags.png} alt="" />
            <h2>{region}</h2>
            <p>Area: {area}</p>
        </div>
    )
}

export default Country