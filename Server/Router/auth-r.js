const express = require('express')

const router = express.Router();
const authCC= require("../Controllers/auth-controller")


router.route('/').get(authCC.home)
router.route('/register').post(authCC.register)
router.route('/check').get(authCC.check)

module.exports = router;