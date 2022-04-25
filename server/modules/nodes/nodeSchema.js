const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const nodeSchema = new Schema({
    username : {type: String, require: true},
    name : {type :String, require: true},
    phone : {type: String, require: true},
    address: {type : String, require: true},
    is_deleted : {type : Boolean, default : false},
    deleted_at : {type : Date,  default: Date.now()}
})

module.exports = mongoose.model('trainnode', nodeSchema);