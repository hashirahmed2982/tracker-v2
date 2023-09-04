const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let TransactionSchema = new Schema({
    id: {
        type: Number
    },
    date: {
        type: String
    },
    description: {
        type: String
    },
    category: {
        type: String
    },
    type: {
        type: String
    },
    user: {
        type: String
    },
    amount: {
        type: String
    }
    },

 {
	collection: 'Transactions'
})

module.exports = mongoose.model('Transactions', TransactionSchema)