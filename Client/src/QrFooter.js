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

    function handleClickRegister() {
        navigate('/Register' );
    }
    function handleClickLogin() {
        navigate('/login' );
    }
    return (
        <div style={style2}>
            <div style={style}> 
                <button onClick={handleClickRegister} style={style3}> Register here</button>
            </div>
            <div style={style}>
                <button onClick={handleClickLogin} style={style3}>Login with password </button>
               
            </div>
        </div>
    )
}

export default QrFooter;