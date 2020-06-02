const mongoose = require('mongoose')

const orderSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    userId: {
        type: String,
        required: true
    },
    books: {
        type: [String],
        required: true
    },
    noOfDays: {
        type: Number,
        required: true
    },
    totalAmount: {
        type: Number,
        required: true
    }

})

module.exports = mongoose.model('order', orderSchema)