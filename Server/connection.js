const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/telegram")
        console.log("successfully connect")
    }
    catch (e) {
        console.log("failed db connect")
        process.exit(0)
    }
}


module.exports= connectDB