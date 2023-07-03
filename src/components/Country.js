import React from "react";

const Country = ({country}) => {
  
    if(!country){
        return null
    }


    return (
        <option key={country.cca3} value={country.cca3}>
            {country.flag}{country.name.common}
        </option>
    )

}

export default Country;