const express = require('express')
const router = express.Router();
const app = express();
const mongoose = require('mongoose')

const Register = require('../models/userModel')
router.use(express.static("public"));

router.post('/', (req, res, next) => {
    var email = req.body.name;
    var password = req.body.password
    Register.findOne({ email: email, password: password }, function(err, user) {
        if (err) {
            console.log('Error')
            return res.status(500).json({
                messsage: "Please register!!"
            })
        }
        if (!user) {
            return res.status(404).redirect('/')
        }
        if (user) {
            return res.status(200).redirect('/home')
        }

    })

})

router.get('/', function(req, res) {
    Register.find()
        .exec()
        .then(books => {
            res.json(books).status(200);
        })
})

module.exports = router