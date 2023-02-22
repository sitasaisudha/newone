import axios from 'axios'
import React from 'react';
import {useState, useEffect} from 'react'


const Dog = () => {
    const [dog,setDog] = useState('')
    const setData =(resp)=>{
setDog(resp)
    }
    const url ='https://dog.ceo/api/breeds/image/random'
    useEffect(()=>{
        
    
    axios
    .get(url)
    .then((response)=>setData(response.data.message))  
    .catch((error)=>console.log(error))      
},[])
    return (
        <div>
            <h1>Dog API </h1>
            <img src={dog}/>
        </div>
    );
};
// console.log(response.data.message)

export default Dog;