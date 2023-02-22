import axios from 'axios';
import React from 'react';
import { useState,useEffect } from 'react';
import {useForm} from 'react-hook-form'


const WeatherAPI = () => {
    const url= 'https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=60c62481dfa73d50a66b05290879a155'
    const [DataTransfer,setData] = useState([])
    useEffect(()=>{
        axios
        .get(url)
        .then((response)=>{
            // console.log(response.data.weather[0].main)
            // console.log(response.data.weather[0].description)

            console.log(response.data.clouds.all)
            console.log(response.data.wind.speed)
            console.log(response.data.wind.deg)
            console.log(response.data.coord.lat)
            console.log(response.data.coord.lon)
            console.log(response.data.main.humidity)
            console.log(response.data.sys.timezone)
            console.log(response)
        })
        .catch((errors)=>console.log(errors))
    },[])
    return (
        <div>
           
        </div>
    );
};

export default WeatherAPI;