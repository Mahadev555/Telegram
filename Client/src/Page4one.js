import React, { useEffect, useState } from 'react'
import axios from 'axios';

// ...

function Page4one({ idd, mob ,isAdmin }) {
console.log("🚀 ~ Page4one ~ isAdmin:", isAdmin)

    console.log("🚀 ~ Page4one ~ idd:", idd)


    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [nameDB, setNameDB] = useState('not added');
    const [emailDB, setEmailDB] = useState('not added');
    const [isTap, setIsTap] = useState(false);
    const [EnteredOtp, setEnteredOtp] = useState('');
    const [isOtpCorrect, setIsOtpCorrect] = useState(false)
    const [id, setId] = useState('');
    const [mobile, setMobile] = useState('');
    const [isverified, setIsVerified] = useState(false);

    

    console.log("🚀 ~ Page4one ~ mobile:", mobile)

    useEffect(() => {
        
   
        setMobile(mob);
        setId(idd);
    }, []);

    const style2 = {
        padding: '100px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    };

    const selectStyle = {
        margin: '5px',
        width: '329px',
        height: 'max-content',
        fontSize: '16px',
        fontWeight: 500,
        color: 'rgb(38, 38, 38)',
        padding: '1px',
        display: 'flex',
        width: '502px',
        fontSize: '17px',
        height: '53px',
        paddingLeft: '25px',
        borderRadius: '10px',
        marginBottom: '10px', border: '1px solid rgb(204, 204, 179)',
    };

    const handleName = (e) => {
        let inputValue = e.target.value;
        setName(inputValue)
    }
    const handleEmail = (e) => {
        let inputValue = e.target.value;

        setEmail(inputValue)
    }

    const handleOTP = (e) => {
        let inputValue = e.target.value;

        setEnteredOtp(inputValue)
    }

    const clearFiled = ()=>{
        setEnteredOtp('')
        setEmail('')
        setName('')
        setIsTap(false)
    }

    console.log(idd)
    const addNameEmail = async () => {
        try {
            await axios.put('/api/login', {
                id: id,
                email: email,
                name: name
            }, {
                headers: {
                    'Content-Type': 'application/json',
                }
            }).then(response => {
                if (response.data.msg === true) {
                    window.alert("User already exists");
                } else {
                    window.alert("Successfully Saved name and Email");

                }
            })

            // Additional actions after the API call if needed
        } catch (error) {
            console.error("Error adding name and email:", error);
        }
    };

    const handleClick = async () => {
        
        try {
            await axios.put('/api/sendEmail', {
                id: idd,
                email:email
            }, {
                headers: {
                    'Content-Type': 'application/json',
                }
            }).then(response => {
            
                    window.alert("Successfully otp sent (if provided mail is valid) ");
                    
                    setIsTap(true)
                
            })

            // Additional actions after the API call if needed
        } catch (error) {
            console.error("Error adding name and email:", error);
        }
    };

                
    
    console.log("🚀 ~ handleClick ~ setId(idd);:", id)
    const  verifyOtp =async () => {
        
        try {
            await axios.post('/api/sendEmail', {
                id: idd,
                EnteredOtp:EnteredOtp
            }, {
                headers: {
                    'Content-Type': 'application/json',
                }
            }).then(response => {
                if (response.data.otpMatch === true) {
                    setIsOtpCorrect(true)
                    setEmailDB(email)
                    setNameDB(name)
                    setIsVerified(true)
                    addNameEmail()
                    clearFiled()
                    window.alert("nice OTP is correct , Name : " + name + "email : " + email + " added")
        
                }
                else {
                    window.alert("Incorrect OTP , Please go back")
                }
                 
                   
                   
                
            })
                console.log("🚀 ~ verifyOtp ~ EnteredOtp:", EnteredOtp) 

            // Additional actions after the API call if needed
        } catch (error) {
            console.error("Error adding name and email:", error);
        }
    };
{

        

    }

    const style6 = {
        cursor: 'pointer',
        backgroundColor: '#1aa3ff',
        color: '#ffffff',
        border: 'none',
        paddingLeft: '25px',
        paddingRight: '25px',
        borderRadius: '10px',
        fontSize: '15px',
        fontWeight: '400',
        transition: 'background 0.1s ease',
        marginTop: '5px',
        width: '190px',
        height: '45px',
    };

    return (

        <>
            <div style={style2}>
                <h2 >Welcome to Dasboard</h2>
                {isAdmin?(<h2>admin</h2>):(<h2>other</h2>)}
                <div  >
                    <div >
                        <input
                            style={selectStyle}
                            placeholder="Add your name"
                            value={name}
                            onChange={handleName}
                        />
                    </div>
                    <div>
                        <input
                            type='text'
                            style={selectStyle}
                            placeholder="Add email "
                            value={email}
                            onChange={handleEmail}
                        />
                    </div>
                    {!isTap ? (
                        <button
                            onClick={handleClick}
                            style={{
                                ...style6,
                            }}
                            className=""
                        >
                            Get OTP
                        </button>
                    ) : (
                        <div style={{ display: 'flex', marginTop: '10px' }}>
                            <input
                                type='text'
                                style={{ ...selectStyle, width: '200px', height: '40px' }}
                                placeholder="Enter OTP"
                                value={EnteredOtp}
                                onChange={handleOTP}
                            />
                            <button
                                style={{
                                    ...style6, width: '150px'
                                }}
                                className=""
                                onClick={verifyOtp}
                            >
                                Verify
                            </button>
                        </div>
                    )}
                    <div>
                    </div>
                    <h3>Details</h3>
                   <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <span> mobile : {mobile}</span>
                            <span> Name  : {nameDB}</span>
                            <span> Email : {emailDB}</span></div>
                </div>
            </div>
        </>
    )
}
export default Page4one
