const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const trainSortSchema = new Schema({
    arr : {type : Array, require : true},
    typesort : {type : String, require : true},
    arrsort : {type : Array, require : true},
});

module.exports = mongoose.model('trainsort', trainSortSchema);