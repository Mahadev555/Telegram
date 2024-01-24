

import { useEffect, useState } from 'react';
import LogInButton from './LogInButton';
import Qr from './Qr';
import QrFooter from './QrFooter';
import QrMiddle from './QrMiddle';
function Page1() {

    const [backData, setBackData] = useState([{}]);

    useEffect(() => {
        fetch('/api').then(
            res => res.json()).then(
                data => {
            setBackData(data)
        })
    }, [])


    console.log(backData[0]?.name)
    return (
        <>
            <Qr />
            <QrMiddle />
            <LogInButton />
            <QrFooter />
            {/* <span>{backData[0]?.name}</span> */}
        </>
    )
}

export default Page1;