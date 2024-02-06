
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Select from 'react-select';
import axios from 'axios';
import { jwtDecode } from "jwt-decode";
import { faWindowRestore } from '@fortawesome/free-solid-svg-icons';

function LoginMiddle() {
    const [selectedValue, setSelectedValue] = useState(' ');
    const [dialingCode, setDialingCode] = useState('');
    const [mobile, setMobile] = useState('');
    const [isFormValid, setIsFormValid] = useState(false);
    const [password, setPassword] = useState('');
    const [isAdmin, setIsAdmin] = useState();


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
        marginBottom: '10px', border: '1px solid rgb(204, 204, 179)',
    };


    useEffect(() => {
        const countryCodes = {
            India: '+91 ',
            Pakistan: '+92 ',
            UK: '+44 ',
            US: '+1 ',
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

    const handlePass = (e) => {
        let inputValue = e.target.value;
        setPassword(inputValue)
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
        marginTop: '15px',
        width: '330px',
        height: '50px',
    };


    const fullCode = dialingCode + " " + mobile;
    const navigate = useNavigate();

    function handleClick() {
        axios.post('/api/login', { mobile, password })
            .then(response => {
                if (response.data.userNotFound === true) {
                    window.alert("User not exists");
                } else {
                    if (response.data.passMatch === true) {
                        const token = response.data.token;

                        const decoded = jwtDecode(token);

                        setIsAdmin(decoded.isAdmin)
                        console.log("🚀 ~ Page4one ~ isAdmin:", isAdmin)

                        console.log( "decoded" + decoded.id);
                        navigate('/page4', {
                            state: {
                                id: decoded.id,
                                mobile:mobile,
                                isAdmin :isAdmin
                            }
                                 
                        });
                    } else {
                        window.alert("Entered wrong Password");
                    }
                }
            })
            .catch(error => {
                console.error('Login failed:', error);
                window.alert("Login failed");
            });
    }


    return (

        <div style={style}>
            <h2 style={{ marginTop: '-20px' }}>Login</h2>
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
                        marginTop: '17px',
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
                Login
            </button>


        </div>
    );
}

export default LoginMiddle
