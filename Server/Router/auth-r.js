const express = require('express')

const router = express.Router();
const authCC= require("../Controllers/auth-controller")


router.route('/').get(authCC.home)
router.route('/api/register').post(authCC.register)
router.route('/api/login').post(authCC.login)

module.exports = router;