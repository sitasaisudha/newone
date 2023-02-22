import React from 'react';
import { useNavigate } from 'react-router-dom';
const About = () => {
   const navi_gate = useNavigate()
    return (
        <div>
            <h1>i'm at about page</h1>
            {/* <button onClick={()=>navi_gate(-1)}> view details</button> */}
          
        </div>
    );
};

export default About;