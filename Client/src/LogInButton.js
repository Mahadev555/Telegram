import React, { useState } from 'react';
import './App.css';
import { Link } from "react-router-dom";

function LogInButton() {

    const [isHovered, setIsHovered] = useState(false);
    const [isHovered1, setIsHovered1] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const handleMouseEnter2 = () => {
        setIsHovered1(true);
    };

    const handleMouseLeave2 = () => {
        setIsHovered1(false);
    };
    const style = {

        color: isHovered ? '#008ae6' : '#008ae6',
        backgroundColor: isHovered ? '#ccebff' : 'white',
        border: 'none',
        background: 'white',
        margin: '30px 10px',
        padding: '15px',
        paddingLeft: '25px',
        paddingRight: '25px',
        borderRadius: '10px',
        fontSize: '17px',
        cursor: 'pointer',
        transition: 'background 0.1s ease',

        ':hover': {
            background: '#03A9F4',
            color: 'white',
        },
    }

    const style2 = {

        color: isHovered1 ? '#008ae6' : '#008ae6',
        backgroundColor: isHovered1 ? '#ccebff' : 'white',
        border: 'none',
        background: 'white',
        margin: '30px 10px',
        padding: '15px',
        paddingLeft: '25px',
        paddingRight: '25px',
        borderRadius: '10px',
        fontSize: '17px',
        cursor: 'pointer',
        transition: 'background 0.1s ease',

        ':hover': {
            background: '#03A9F4',
            color: 'white',
        },
    }

    return (<div style={{display:'flex'}}>
        {/* <Link to="/Page2"><button onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave} style={style} className="LogInButton" >LOG IN BY PHONE(OTP)</button>
    </Link> */}
    <Link to="/login"><button onMouseEnter={handleMouseEnter2}
        onMouseLeave={handleMouseLeave2} style={style2} className="LogInButton" >LOG IN BY PASSWORD</button>
    </Link>
    </div>
    )

}

export default LogInButton;