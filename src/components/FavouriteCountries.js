import React, {useEffect} from 'react'

const FavouriteCountries = ({country, addFavouriteCountry, favouriteCountries}) => {

    const handleChange = () => {
        addFavouriteCountry();
      }

    return (
        <>
        <button onClick={handleChange}>Add to favourite countries</button>
        <h1>My favourite countries</h1>
        {favouriteCountries}
        </>
    )

}

export default FavouriteCountries;