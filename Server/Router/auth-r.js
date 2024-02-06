const express = require('express')

const router = express.Router();
const authCC= require("../Controllers/auth-controller")


router.route('/').get(authCC.home)
router.route('/api/register').post(authCC.register)
router.route('/api/login').post(authCC.login)
router.route('/api/login').put(authCC.login2)
router.route('/api/sendEmail').put(authCC.sendEmail)
router.route('/api/sendEmail').post(authCC.verifyotp)
router.route('/api/ud').get(authCC.userDetails)


module.exports = router;