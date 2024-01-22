import Monkey from '../src/Images/Monkey.png'; 
function Page3Img() {

    const style1={  
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop:"40px",
        height:"155px",
        borderRadius:'50%'
    }
    
    return (
        <img style={style1} alt="QR code" src={Monkey} />
    );
}


export default Page3Img;