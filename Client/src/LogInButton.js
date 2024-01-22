import React, { useState } from 'react';
import './App.css';
import { Link } from "react-router-dom";

function LogInButton(){
    
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const style={

        color: isHovered ? '#008ae6' : '#008ae6',
        backgroundColor: isHovered? '#ccebff':'white',
        border: 'none',
        background: 'white',
        margin: '30px',
        padding: '15px',
        paddingLeft: '25px',
        paddingRight: '25px',
        borderRadius:'10px',
        fontSize: '17px', 
        cursor: 'pointer',
        transition: 'background 0.1s ease', 

        ':hover': {
            background: '#03A9F4',
            color: 'white',
        },
}
    

    return(
        <Link to="/Page2"><button onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave} style={style} className="LogInButton" >LOG IN BY PHONE NUMBER</button>
    </Link>)
    
}

export default LogInButton;