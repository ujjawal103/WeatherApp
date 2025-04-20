import { useState } from "react";
import InfoBox from "./InfoBox";
import Searchbox from "./SearchBox";

export default function WeatherApp(){

    const [weatherInfo , setWeatherInfo] = useState(
        {
            city : "Delhi",
            feelsLike : 57,
            temp : 25.06,
            tempMin : 25.05,
            tempMax : 24.08,
            humidity : 47,
            weather : "haze"
        }
    );

    let updateInfo = (result) =>{
        setWeatherInfo(result);
    }


    return(
        <div style={{textAlign : "center"}}>
            <h2>  weather App Using React </h2>
            <Searchbox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo} />
        </div>
    )
}