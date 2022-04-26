import React from "react";

function WeatherShower(props) {
    
    let weather = "";

    switch (props.weather) {
        case "Clear":
            weather = "Soleggiato";
            break;
        
        case "Clouds":
            weather = "Nuvoloso";
            break;

        case "Rain":
            weather = "Pioggia";
            break;

        case "Snow":
            weather = "Neve";
            break;

        case "Mist":
            weather = "Nebbia";
            break;
        
        default:
            weather = "Nessuna informazione";
    }
    
    return (
        <>

            <h1>{weather}</h1>
            
        </>
    );
}

export default WeatherShower;