import axios from 'axios'
import React from 'react';
import {useState, useEffect} from 'react'
const First = ()=>{
    const url ='https://jsonplaceholder.typicode.com/users';
//     const getData =()=>{
//         console.log('getting....');
//         axios.get(url).
//         then((response)=>console.log(response.data[0])).
//         catch((error)=>console.log('errorss'))
//     }
    const [data,setData] = useState([])
    useEffect(()=>{
        console.log('use effect');
        axios
        .get(url)
        .then((response)=>{
            console.log(response.data);
        setData(response.data)
        
        }
            )
        .catch((error)=>console.log(error))

    },[])
    return(
        <>
<h1> Api handling</h1>
<table border={1}>
    <thead>
        <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Email</th>
        <th>Street</th>

        </tr>
       
    </thead>
    <tbody>

    
{
    data.map((item)=>{
        return(
            <tr key={item.id}>
                <td >{item.id}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.address.street}</td>
            </tr>
        )
            
        
    })
}
</tbody>
</table>


        </>
    )
}
export default First;