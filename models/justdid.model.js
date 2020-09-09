const mongoose = require('mongoose')

const JustDidSchema= mongoose.Schema({
    name: String,
    hitcounter: Number,
    lhitcounter: Number,
    rhitcounter: Number
}, {
    timestamps: false
});

module.exports = mongoose.model('Justdid', JustDidSchema)
