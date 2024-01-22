import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Select from 'react-select';


function Page2Form() {
    const [selectedValue, setSelectedValue] = useState(' ');
    const [dialingCode, setDialingCode] = useState('');
    const [mobile, setMobile] = useState('');
    const [isFormValid, setIsFormValid] = useState(false);
    const [Otp, setOtp] = useState('');




    // Function to generate a random 6-digit OTP
    const generateOtp = () => {
        const randomOtp = Math.floor(100000 + Math.random() * 900000).toString();
        setOtp(randomOtp);
        alert(`Generated OTP: ${randomOtp}`);
    };

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

    const checkboxStyle = {
        height: '17px',
        width: '17px',
        backgroundColor: 'lightblue',
        cursor: 'pointer',
    };

    const selectStyle = {
        ...commonInputStyle,
        width: '330px',
        height: '55px',
        marginBottom: '10px',
        fontSize: '17px',
    };

    const style3 = {
        marginBottom: '35px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '20px',
        marginLeft: '-130px',
    };

    const style4 = {
        paddingTop: '2px',
        paddingLeft: '5px',
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

        // Remove non-digit characters
        inputValue = inputValue.replace(/\D/g, '');

        // Limit the input to 10 digits
        inputValue = inputValue.slice(0, 10);

        // Update the state
        setMobile(inputValue);validateForm();
    };

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

        width: '330px',
        height: '50px',
    };

    const style9 = {
        color: isFormValid ? '#ffffff' : 'white',
        backgroundColor: isFormValid ? '#1aa3ff' : '#cccccc',
        border: 'none',
        paddingLeft: '25px',
        paddingRight: '25px',
        borderRadius: '5px',
        marginTop: '10px',
        fontSize: '14px',
        fontWeight: '500',
        transition: 'background 0.1s ease',
        cursor: isFormValid ? 'pointer' : 'not-allowed',
        width: '100px',
        height: '30px',

    }
    const fullCode= dialingCode+" "+mobile;
    const navigate = useNavigate();

    function handleClick() {
        navigate('/page3', {
            state: {
                fullCode: fullCode,
                Otp: Otp
            }
        });
    }

    return (

        <div style={style}>
            <div>


            </div>
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
            <button style={style9} onClick={generateOtp}>OTP</button>
            <div style={style3}>
                <input type="checkbox" id="myCheckbox" style={checkboxStyle} />
                <label style={style4} htmlFor="myCheckbox">
                    Keep me signed in
                </label>
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
                NEXT
            </button>


        </div>
    );
}

export default Page2Form;
