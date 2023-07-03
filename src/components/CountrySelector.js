import React from "react";
import Country from "./Country";

const CountrySelector = ({countries, onCountrySelected}) => {

    const countryNodes = countries.map((country) => {
      return (
        <Country key={country.cca3} value={country.cca3} country={country} />
      )
    })

    const handleChange = (event) => {
      onCountrySelected(event.target.value);
    }

    


    return (
        <>
        <p>This is the country selector</p>
        <select onChange={handleChange}>
            {countryNodes}
        </select>
        </>
    )

}

export default CountrySelector;