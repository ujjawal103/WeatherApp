import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css"
import { useState , useEffect} from 'react';

export default function Searchbox({updateInfo}){
    let [city , setCity] = useState("");
    let [langLat , setLangLat] = useState({latitude : "" , longitude : ""});
    let [submittedCity, setSubmittedCity] = useState("");
    let [error , setError] = useState(false);

    const WEATHER_API = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "530549e07cd94c6ff5ab756a3f3f60c8";
    const API_URL = "https://geocoding-api.open-meteo.com/v1/search";        //generate longitude and latitude.
    





    let getCountryInfo = async () =>{
        try{
       let response =  await fetch(`${API_URL}?name=${city}&count=10&language=en&format=json`);
       let responseJson = await response.json();
    //    console.log(responseJson.results[0].latitude);
    //    console.log(responseJson.results[0].longitude);
       setLangLat( 
        {latitude : responseJson.results[0].latitude , longitude : responseJson.results[0].longitude}
    );
    }catch(err){
        setError(true); 
    }
    }




    useEffect(() => {
        const fetchWeather = async () => {
            try{
            if (langLat.latitude && langLat.longitude) {
                let newInfo = await getWeatherInfo(submittedCity); 
                updateInfo(newInfo);
            }
            }catch(err){
                setError(true); 
            }
        };
    
        fetchWeather();
    }, [langLat , submittedCity]);



    let getWeatherInfo = async (city) =>{
        try{
        let response =  await fetch(`${WEATHER_API}?lat=${langLat.latitude}&lon=${langLat.longitude}&units=metric&appid=${API_KEY}`);
        let responseJson = await response.json();
        // console.log(responseJson); 
        let result = {
            city : (error) ? "Delhi" : city,
            temp : responseJson.main.temp,
            tempMin : responseJson.main.temp_min,
            tempMax : responseJson.main.temp_max,
            humidity : responseJson.main.humidity,
            feelsLike : responseJson.main.feels_like,
            weather : responseJson.weather[0].description
        }
        console.log(result);
        return result;
        }catch(err){
            throw err;
        }
     }

   

    let handleChange = (event) =>{
        setCity(event.target.value);
    }

    let handleSubmit = async (event) => {
        try{
        event.preventDefault();
        console.log(city);
        setSubmittedCity(city);
        setCity("");
        setError(false); 
        await getCountryInfo();
        }
        catch(err){
            setError(true); 
        }
        
    }

    return(
        <div className='searchBox'>

            <form action="" onSubmit={handleSubmit}>
            <TextField id="city" 
            label="Enter City"
            variant="outlined"
            value={city} 
            onChange={handleChange}
            required
            />

             <br /><br />
            <Button variant="contained" type='submit'>Search
            </Button>
            {error && <p style={{color:"red"}}>No such place in our api Exists</p>}
            </form>
        </div>
    )
}