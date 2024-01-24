const UserModel = require('../Models/usermodel');

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

        const userExist = await UserModel.findOne({ Mobile: mobile });

        if (userExist) {
            return res.json({ msg: "Phone number already exists" });
        } else {
            await UserModel.create({ Mobile: mobile, Password: password });
            res.json(req.body);
        }
    } catch (e) {
        console.error(e);
        res.status(500).send("Internal Server Error");
    }
};


const check = async (req, res) => {
    try {
        const users = await UserModel.find({});
        res.json(users);
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
};

module.exports = { home, register,check };
