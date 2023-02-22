import React from 'react';
import {  NavLink } from 'react-router-dom';

const Navbar = () => {
    const changeStyle =({isActive})=>{
        return{
            color:isActive?'green':'blue'
        }
    }
    return (
        <div>
            <div style={{backgroundColor:'black'}}> 
                <h3>navbar</h3>
                <NavLink to="/" style={changeStyle}>Home</NavLink>
                <NavLink to="about" style={changeStyle} >about</NavLink>

                
            </div>
        </div>
    ); 
};

export default Navbar;