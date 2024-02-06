const UserModel = require('../Models/usermodel');
const nodemailer = require("nodemailer");
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
const skey = "mahadev"

const commonFunction = require('../helper/utils')
const authFunction = require('../helper/auth')

const home = async (req, res) => {
    try {
        res.send("welcome");
    } catch (e) {
        console.error(e);
        res.status(500).send("Internal Server Error");
    }
};

//register
const register = async (req, res) => {
    try {
        const { mobile, password } = req.body;

        const userExist = await UserModel.findOne({ mobile });

        if (userExist) {
            return res.json({ msg: true });
        } else {
            //Hasing of password
            const saltR = 10;
            const hashPass = await bcrypt.hash(password, saltR)
            const userCreated = await UserModel.create({ mobile, password: hashPass  });
            res.json(userCreated);
        }
    } catch (e) {
        console.error(e);
        res.status(500).send("Internal Server Error");
    }
};


//login
const login = async (req, res) => {
    try {
        const { mobile, password } = req.body;
        const userExist = await UserModel.findOne({ mobile });

        if (!userExist) {
            return res.json({ userNotFound: true });
        }

        const passwordMatch = bcrypt.compareSync(password, userExist.password);

        if (passwordMatch) {

            const obj = {
                mobile :mobile, 
                id: userExist._id , 
                isAdmin : userExist.isAdmin
            }
            const token = commonFunction.generateToken(obj)
            console.log(token)
            

            return res.json({ passMatch: true, token });
        } else {
            // Passwords don't match
            return res.json({ passMatch: false });
        }
    } catch (err) {
        console.error(err);
        return res.status(500).send("Internal Server Error");
    }
};


//add email and name
const login2 = async (req, res) => {
    try {
        const { id, email, name } = req.body;

        console.log('Request Body:', req.body)

        const updatedUser = await UserModel.findOneAndUpdate(
            { _id: id },
            { $set: { email, name } },
            { new: true }
        );

        if (!updatedUser) {
            return res.status(404).json({ error: 'User not found' });
        }

        return res.json({ success: true, updatedUser });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
};


//send email
const generateOTP = () => {
    return Math.floor(100000 + Math.random() * 900000).toString();
};

const sendEmail = async (req, res) => {
    const { id ,email } = req.body;
    console.log("🚀 ~ sendEmail ~ id:", id)
    
    const otp = generateOTP();
 
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'atharvx555@gmail.com',
            pass: 'ftzw vbgk qgnv vmsy'
        },
    });

    // Email options
    const mailOptions = {
        from: 'telegram-clone-MH.com',
        to: email,
        subject: 'OTP Verification ',
        text: `Your OTP is: ${otp}. Please use it to verify your account.`,
    };

    try {
        // Send email
        const info = await transporter.sendMail(mailOptions);

        console.log('Email sent: ', info.response);

        await UserModel.findOneAndUpdate(
            { _id: id },
            { $set: { otp: otp } },
            
        );

        
        return res.json({send:true}); 
        
    } catch (error) {
        console.error('Error sending email:', error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
     
};
 

//verify otp
const verifyotp = async (req, res) => {
    try {
        const { id, EnteredOtp } = req.body;
        console.log("🚀 ~ verifyotp ~ EnteredOtp:", EnteredOtp)

        const userExist = await UserModel.findOne({ _id:id });

        if (!userExist) {
            return res.json({ userNotFound: true });
        }

        // Check 
        if (userExist.otp != EnteredOtp) {
            console.log("🚀 ~ verifyotp ~ userExist.otp:", userExist.otp)
            return res.json({ otpMatch: false });
        }

        // Clear  OTP 
        await UserModel.findOneAndUpdate(
            { _id: userExist._id },
            { $unset: { otp: 1 } }
        );

        return res.json({ otpMatch: true });

    } catch (err) {
        console.error(err);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
};


//get user details 
const userDetails = async (req, res) => {
    try {

        const userId = req.body.id;
    
        if (!userId) {
          return res.status(400).json({ message: 'Missing _id in the request body' });
        }
    
        const user = await UserModel.findById(userId);
    
        if (!user) {
          return res.status(404).json({ message: 'User not found' });
        }
    
        // Construct the response object based on the presence of name and email
        const response = {
          mobile: user.mobile,
          email: user.email || 'not added',
          name: user.name || 'not added',
        };
    
        res.json(response);
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
      }
  };
  




module.exports = { home, register, login, login2, sendEmail ,verifyotp ,userDetails };
