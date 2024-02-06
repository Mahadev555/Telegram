import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
function QrFooter() {
    const [isHovered1, setIsHovered1] = useState(false);
    const navigate = useNavigate();
    const style={
        display:'flex', 
        marginLeft: '10px',
        marginRight: '10px',
    }
    const style2={ 
        
        display:'flex',
        margin:'-10px'
    }
    const style3={ 
        
        color:    '#008ae6', 
       fontWeight:'400',
       cursor:'pointer',
       border: 'none',
        background: 'white',
        fontSize:'18px',
        padding:'13px 28px',
        borderRadius:'7px',
        
        color: isHovered1 ? '#008ae6' : '#008ae6',
        backgroundColor: isHovered1 ? '#ccebff' : 'white',
    }


    const handleMouseEnter2 = () => {
        setIsHovered1(true);
    };

    const handleMouseLeave2 = () => {
        setIsHovered1(false);
    };
    
    function handleClickRegister() {
        navigate('/Register' );
    }
    

    return (
        <div style={style2}>
            <div style={style}> 
                <button onMouseEnter={handleMouseEnter2}
        onMouseLeave={handleMouseLeave2}  onClick={handleClickRegister} style={style3}> Register here</button>
            </div>
            
        </div>
    )
}

export default QrFooter;