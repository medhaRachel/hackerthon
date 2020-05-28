const express = require('express')
const router = express.Router();
const mongoose = require('mongoose')

const Register = require('../models/registerModel')

router.post('/', (req, res, next) => {
    var name = req.body.name;
    var password = req.body.password
    Register.findOne({ name: name, password: password }, function (err, user) {
        if (err) {
            console.log('Error')
            return res.status(500).json({
                messsage: "Wrong password or name!!"
            })
        }
        if (!user) {
            return res.status(404).json({
                messsage: "Wrong password or name!!"
            })
        }
        return res.status(200).json({
            messsage: "Logged In"
        })

    })

})


module.exports = router