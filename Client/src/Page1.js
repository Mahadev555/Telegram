

import { useEffect, useState } from 'react';
import LogInButton from './LogInButton';
import Qr from './Qr';
import QrFooter from './QrFooter';
import QrMiddle from './QrMiddle';
function Page1() {


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