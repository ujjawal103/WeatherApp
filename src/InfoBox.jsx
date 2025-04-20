// import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SunnyIcon from '@mui/icons-material/Sunny';
import "./InfoBox.css"


export default function InfoBox({info}){

 
    let HOT_URL = "https://images.unsplash.com/photo-1584267385494-9fdd9a71ad75?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    let COLD_URL = "https://images.unsplash.com/photo-1561484930-998b6a7b22e8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    let RAINY_URL = "https://images.unsplash.com/photo-1562155618-e1a8bc2eb04f?q=80&w=2091&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

   return(
    <div className="InfoBox">
      <div className='cardContainer'>
            <Card sx={{ maxWidth: 345 }}>
        <CardMedia
            sx={{ height: 140 }}
            image={info.humidity > 80 ? RAINY_URL : info.temp > 15 ? HOT_URL : COLD_URL}
            title="green iguana"
        />
        <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            {info.city}
            {info.humidity > 80 
            ? <ThunderstormIcon /> :
             info.temp > 15 ? 
            <SunnyIcon /> :
            <AcUnitIcon />}
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
            <p>Temperature : {info.temp}&deg;C</p>
            <p>Humidity : {info.humidity}</p>
            <p>Min Temp : {info.tempMin}&deg;C</p>
            <p>Max Temp : {info.tempMax}&deg;C</p>
            <p>The Weather can be described as <b>{info.weather}</b> & feels like <strong><i>{info.feelsLike}</i></strong></p>
            </Typography>
        </CardContent>
        
        </Card>
      </div>
    </div>
   )
}