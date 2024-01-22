import React from 'react';
import { useNavigate } from 'react-router-dom';
function QrFooter() {

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
        fontSize:'15px'
    }

    function handleClick() {
        navigate('/Register' );
    }
    return (
        <div style={style2}>
            <div style={style}> 
                <button onClick={handleClick} style={style3}> Register here</button>
            </div>
            <div style={style}>
                <button style={style3}>Login with password </button>
               
            </div>
        </div>
    )
}

export default QrFooter;