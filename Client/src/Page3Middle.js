
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';

function Page3Middle({ number, Otp }) {
    const [dialingCode, setDialingCode] = useState('');
    const [isFormValid, setIsFormValid] = useState(false);
    const [isOtpCorrect, setIsOtpCorrect] = useState(false)

    const handleInputChange = (e) => {
        setDialingCode(e.target.value);

        validateForm();
    };

    const validateForm = () => {
        const isInputFilled = dialingCode && dialingCode.trim() !== '';
        setIsFormValid(isInputFilled);
    };

  
    const style = {
        paddingLeft: '20px',
        paddingTop: '10px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    };

    const style2 = { 
        height: '20px',
        padding: '15px',
        width: '280px',
        border: '1px solid #ccccb3',
        borderRadius: '10px',
        fontSize: '20px',
        marginTop: '20px'
    };

    const style3 = {
        padding: '20px',
        height: '0px',
        width: '20px',
        cursor: 'pointer',
        marginLeft: '-10px',
        marginTop: '-39px',
    };

    const style4 = {
        height: '30px',
        width: '210px',
        paddingBottom: '20px',
        fontSize: '25px',
    };

    const style5 = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    };
    const style6 = {
        color: isFormValid ? '#ffffff' : 'white',
        backgroundColor: isFormValid ? '#007acc' : '#1aa3ff',
        border: 'none',
        paddingLeft: '25px',
        paddingRight: '25px',
        borderRadius: '10px',
        fontSize: '19px',
        fontWeight: '500',
        cursor: 'pointer',
        transition: 'background 0.1s ease',
        marginTop: '35px',
        width: '330px',
        height: '50px',
    };
    const style7 = {
        fontSize: '15px',
        color: 'grey'
    }

    const style8 = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    }

    const handlePencilClick = () => {
        const userConfirmed = window.confirm('Do you want to change pone number?');

        if (userConfirmed) { 
            console.log('User confirmed! Navigating to Page 2...');
        } else { 
            console.log('User canceled the action.');
        }
    };
    // console.log(number,Otp)
    // const location = useLocation();
    // console.log(location)

    const navigate = useNavigate();
    function handleClick() {

        if (Otp === dialingCode) {
            setIsOtpCorrect(true)
            setTimeout(() => {
                navigate('/page4');
            }, 2000)
        }
        else {
            window.alert("Incorrect OTP , Please go back")
        }

        // navigate('/page4');

    }

    const style10 = {
        paddingTop: '5px',
        color: 'green',
        fontSize: '12px'
    }
    const style11={
        padding:'10px', 
        color:'Red',
        fontSize: '12px'
    }
        

    return (
        <>
            <div style={style}>
                <div style={style5}
                ><span style={style4}>{number}</span>
                    <span onClick={handlePencilClick}>
                        <div style={style3}>
                            <FontAwesomeIcon icon={faPencilAlt} style={{ color: 'grey' }} />
                        </div>
                    </span>

                </div>


            </div>
            <div style={style8}>
                <span style={style7}>{"We have sent you a message in Telegram with code"}</span>
                <input style={style2} onChange={handleInputChange} placeholder="OTP" /> 
                {isOtpCorrect ? (
                    <span style={style10}>Correct OTP, Loading....</span>
                ) : (
                    <span style={style11}> Please Enter OTP Manually</span>
                )}


                <button
                    onClick={() => {
                        handleClick();
                    }}
                    style={{
                        ...style6,
                        cursor: isFormValid ? 'pointer' : 'not-allowed',
                        backgroundColor: isFormValid ? '#1aa3ff' : '#cccccc',
                    }}
                    className=""
                    disabled={!isFormValid}
                >
                    NEXT
                </button>


            </div>
        </>
    );
}

export default Page3Middle;
