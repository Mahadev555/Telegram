import React from 'react';
import Page3Img from './Page3Img';
import Page3Middle from './Page3Middle'; 
import { useLocation } from 'react-router-dom';

function Page3() {
    

    const  location = useLocation(); 
    const number =location.state.fullCode;
    const Otp = location.state.Otp
    console.log(number)
    console.log(Otp)
    console.log(location)
    return (
        <>
            <Page3Img />
            <Page3Middle  number={number} Otp={Otp} />
        </>
    );
}

export default Page3;
