const UserModel = require('../Models/usermodel');
const bcrypt = require('bcrypt')

const home = async (req, res) => {
    try {
        res.send("welcome");
    } catch (e) {
        console.error(e);
        res.status(500).send("Internal Server Error");
    }
};

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
            const userCreated = await UserModel.create({ mobile, password: hashPass });
            res.json(userCreated);
        }
    } catch (e) {
        console.error(e);
        res.status(500).send("Internal Server Error");
    }
};

const login = async (req, res) => {
    try {
        const { mobile, password } = req.body;
        const userExist = await UserModel.findOne({ mobile });

        if (!userExist) {
            return res.json({ msg: true });
        } else {
            //Hasing of password
            bcrypt.compare(password, userExist.password, function(err, result) {
                if (err) {
                    console.error(err);
                    return res.status(500).send("Internal Server Error");
                }

                if (result) {
                    // Passwords match
                    return res.json({ passMatch: true });
                } else {
                    // Passwords don't match
                    return res.json({ passMatch: false });
                }
            })
        }
    } catch (e) {
        console.log(e)
    }
}
// const check = async (req, res) => {
//     try {
//         const users = await UserModel.find({});
//         res.json(users);
//     } catch (err) {
//         console.error(err);
//         res.status(500).send('Server Error');
//     }
// };

module.exports = { home, register,login };
