import React from 'react'
import Country from '../Country/Country'
import { useEffect } from 'react'
import { useState } from 'react'
import './Countries.css'

const Countries = () => {
    const [countries, setCountries] = useState([])

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])

    return (
        <div>
            <h1>Rest Api called function</h1>
            <div className='country-container'>
                {
                    countries.map(country => <Country country={country} key={country.cca3} />)
                }
            </div>
        </div>
    )
}

export default Countries