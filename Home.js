import React from 'react';
import { useNavigate } from 'react-router-dom';
const Home = () => {
    const navi = useNavigate()
    return (
        <div>
            <h5>you are at home page</h5>
            <button onClick={()=>navi('detail')}>view details </button>
        </div>
    );
};

export default Home;