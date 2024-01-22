function QrMiddle() {
    const style2={
        fontWeight:'500'
    }
    const style={
        alignItems: 'baseline',
        // width: '200px', // Uncomment this line if needed
        flexDirection: 'column',
        display: 'flex',
        justifyContent: 'space-between',
        paddingLeft: '40px',
    }
    return (
        <div className="QrMiddle">
            <h1 style={style2}>Login to Telegram by QR code</h1>
            <div style={style}><h4>
            1. Open Telegram on your mobile
            </h4>
            <h4>
            2. Go to   <b>Settings</b> &gt; <b>Devices</b> &gt; <b>New Desktop Device</b> 
            </h4>
            <h4>
            3. Point your phone at this screen to confirm login
            </h4>
            </div>
        </div>
    )
}

export default QrMiddle;