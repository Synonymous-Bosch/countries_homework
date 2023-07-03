import React, {useState, useEffect} from 'react';
import CountrySelector from '../components/CountrySelector';
import FavouriteCountries from '../components/FavouriteCountries';

const CountriesContainer = () => {
    const [countries, setCountries] = useState([]);
    const [selectedCountrycca3, setSelectedCountrycca3] = useState("");
    const [favouriteCountries, setFavouriteCountries] = useState([]);

    const getCountries= () => {
      fetch("https://restcountries.com/v3.1/all")
      .then(response => response.json())
      .then(countriesData => setCountries(countriesData))
    }


    

    useEffect(() => {
      getCountries()
    }, [])


    const handleCountrySelected = (cca3) => {
      setSelectedCountrycca3(cca3)
    }

    const totalPopulation = countries.reduce(
    (accumulator, country) => accumulator + country.population, 0);

    const selectedCountry = countries.find(
      country => country.cca3 === selectedCountrycca3
    )
    

    const handleAddFavouriteCountry = () => {
        
        const tempList = [...favouriteCountries];
        console.log(tempList)
        tempList.push(selectedCountry);
        setFavouriteCountries(tempList);
    }

    


    return (
        <>
        <div>
            <h1>This is the countries container</h1>
            <CountrySelector countries={countries} onCountrySelected={handleCountrySelected} />
            <p>Total world population: {totalPopulation}</p>
        </div>
        <div>
            
            <FavouriteCountries countries={countries} selectedCountry={selectedCountry} addFavouriteCountry={handleAddFavouriteCountry} favouriteCountries={favouriteCountries} />
        </div>
        </>
    )

}

export default CountriesContainer;