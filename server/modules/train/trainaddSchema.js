const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const trainaddSchema = new Schema({
    a : {type : String, require : true},
    b : {type : String, require : true},
    output : {type : String, require : true},
});

module.exports = mongoose.model('trainadd', trainaddSchema);