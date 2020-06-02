const express = require('express')
const router = express.Router();
const app = express();
const mongoose = require('mongoose')

const user = require('../models/userModel')
const order = require('../models/orderModel')
router.use(express.static("public"));


router.post('/addOrder', (req, res) => {
    let userId = req.body.user_id;
    const newOrder = new order({
        _id: new mongoose.Types.ObjectId(),
        userId: req.body.user_id,
        books: req.body.books_list,
        noOfDays: req.body.days,
        totalAmount: req.body.val
    })
    newOrder.save()
        .then(result => {
            console.log(result)
            user.updateOne({ _id: userId }, { wishlist: [] }).exec()
                .catch(err => { console.log(err) })
            return res.send({ message: "order created", }).redirect("/redirect")
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({
                error: err
            })
        })
});

router.get('/showHistory/:userId', async(req, res) => {
    const userId = req.params.userId;
    await order.find({ userId: userId }, function(err, order) {
        if (err) {
            console.log(err);
            res.json(err);
        } else if (order == null) {
            console.log("you haven't rented any book until now")
        } else {
            return res.send(order)
        }
    });
})




module.exports = router