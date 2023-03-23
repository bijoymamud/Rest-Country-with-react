import "./Country.css";

const Country = (props) => {

    //! advance option
    const { flags, name, capital, population, area } = props.country;
    // console.log(props.country);
    return (


        <div className='singleCountry'>
            <img src={flags.png} alt="" />
            <h2 className="countryName">{name.common}</h2>
            <h4>Capital: {capital}</h4>
            <h5>Population: {population}</h5>
            <h5>Area: {area}</h5>
        </div>
        //! learning option
        // <div className='singleCountry'>
        //     <h2>Country Name:  {props.country.name.common}</h2>
        //     <h3>Capital: {props.country.capital}</h3>
        //     <h4>Population: {props.country.population}</h4>
        //     <h5>Area: {props.country.area}</h5>
        // </div>
    );
};

export default Country;