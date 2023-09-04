const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let CompanySchema = new Schema({
name: {
	type: String
},
id: {
	type: Number
},
cid: {
	type: String
}
}, {
	collection: 'Companies'
})

module.exports = mongoose.model('Companies', CompanySchema)