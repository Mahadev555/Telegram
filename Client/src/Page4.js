 
import React, { useState } from 'react';
import './App.css';
import { Link } from "react-router-dom";
const Page4 = () => {
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

      
}

const style2={
    padding:'100px',
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'center'
}

    
  return (
    <div style={style2}>
       <h2>Welcome to Dasboard</h2>
       <Link to="/"><button onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave} style={style} className="LogInButton" >LOG OUT</button>
    </Link>
    </div>
    
  );
};

export default Page4;