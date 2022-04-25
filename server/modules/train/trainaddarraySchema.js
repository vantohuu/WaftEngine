const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const trainaddarraySchema = new Schema({
    arr : {type : Array, require : true},
    sum : {type : Number, require : true},
})

module.exports = mongoose.model('trainaddArray', trainaddarraySchema);
