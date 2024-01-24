import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Select from 'react-select';
import axios from 'axios';

function RegisterMiddle(){
    const [selectedValue, setSelectedValue] = useState(' ');
    const [dialingCode, setDialingCode] = useState('');
    const [mobile, setMobile] = useState('');
    const [isFormValid, setIsFormValid] = useState(false);
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');


    const style = {
        paddingTop: '20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
    };
    const dialingCodeS = {
        paddingLeft: '15px',
        width: '40px',
        height: '53px',
        border: '1px solid rgb(204, 204, 179)',
        borderRadius: '10px 0 0 10px',
        fontSize: '19px',
        fontWeight: 500,
        color: '#666666',
    }

    const mobileS = {
        paddingLeft: '12px',
        width: '290px',
        height: '53px',
        border: '1px solid rgb(204, 204, 179)',
        borderLeft: '1px solid transparent',
        borderRadius: ' 0 10px 10px 0',
        fontSize: '19px',
        fontWeight: 500,
        color: '#666666',
    }

    const commonInputStyle = {
        margin: '5px',
        width: '329px',
        height: 'max-content',
        fontSize: '16px',
        fontWeight: 500,
        color: 'rgb(38, 38, 38)',
        padding: '1px',
        display: 'flex'
    };


    const selectStyle = {
        ...commonInputStyle,
        width: '302px',
        
        fontSize: '17px', 
        height: '53px',
        paddingLeft: '25px',
        borderRadius: '10px',
        marginBottom: '10px',      border: '1px solid rgb(204, 204, 179)',
    };

   
    useEffect(() => {
        const countryCodes = {
            India: '+91 ',
            Pakistan: '+92 ',
            UK: '+44 ',
            US: '+1 ',
            // Add more countries as needed
        };

        setDialingCode(countryCodes[selectedValue.value] || '');
    }, [selectedValue]);

    const handleSelectChange = (newValue) => {
        setSelectedValue(newValue);

    };

    const handleInputChange = (e) => {
        let inputValue = e.target.value;

        inputValue = inputValue.replace(/\D/g, '');

        inputValue = inputValue.slice(0, 10);

        setMobile(inputValue); validateForm();
    };

    const handlePass=(e)=>{
        let inputValue = e.target.value;
        setPassword(inputValue)
    }

    const handleConfirmPass=(e)=>{
        let inputValue = e.target.value;
        setConfirmPassword(inputValue)
    }

    const validateForm = () => {
        const isInputFilled = mobile && mobile.trim() !== '';
        setIsFormValid(isInputFilled);
    };

    const style6 = {
        cursor: isFormValid ? 'pointer' : 'not-allowed',
        backgroundColor: isFormValid ? '#1aa3ff' : '#cccccc',
        color: isFormValid ? '#ffffff' : 'white',
        border: 'none',
        paddingLeft: '25px',
        paddingRight: '25px',
        borderRadius: '10px',
        fontSize: '19px',
        fontWeight: '500',
        transition: 'background 0.1s ease',
        marginTop:'15px',
        width: '330px',
        height: '50px',
    };

    
    const fullCode = dialingCode + " " + mobile;
    const navigate = useNavigate();

    function handleClick() {

        if(password!==confirmPassword){
            window.alert("massword not matching")

        }
       else{ 
        axios.post('/register', { mobile, password })
       .then(response => {
           window.alert("Successfully registered");
           navigate('/', {
               state: {
                   fullCode: fullCode
               }
           });
       })
       .catch(error => {
           console.error('Registration failed:', error);
          
       });
    }
    }

    return (

        <div style={style}>
            
            <Select
                options={[
                    { value: 'India', label: 'India' },
                    { value: 'Pakistan', label: 'Pakistan' },
                    { value: 'UK', label: 'UK' },
                    { value: 'US', label: 'US' },
                ]}
                styles={{
                    ...selectStyle,
                    control: (provided) => ({
                        ...provided,
                        width: '330px',
                        height: '55px',
                        paddingLeft: '20px',
                        marginTop:'17px',
                        borderRadius: '10px',
                        marginBottom: '10px',
                    }),
                }}
                placeholder="Select Country"
                value={selectedValue}
                onChange={handleSelectChange}
            />
            <div style={commonInputStyle}>
                <input
                    style={dialingCodeS}
                    placeholder=""
                    value={dialingCode}
                /><input
                    style={mobileS}
                    placeholder=""
                    value={mobile}
                    onChange={handleInputChange}
                />
            </div>
            <div>
                <input
                type='password'
                    style={selectStyle}
                    placeholder="Password" 
                    value={password}  
                    onChange={handlePass}                  
                />
            </div>
            <div>
                <input
                    style={selectStyle}
                    placeholder="Confirm Password" 
                    value={confirmPassword}
                    onChange={handleConfirmPass}
                />
            </div>



            <button
                onClick={handleClick}
                style={{
                    ...style6,
                    cursor: isFormValid ? 'pointer' : 'not-allowed',
                    backgroundColor: isFormValid ? '#1aa3ff' : '#cccccc',
                }}
                className=""
                disabled={!isFormValid}
            >
                Register
            </button>


        </div>
    );
}

export default RegisterMiddle;
