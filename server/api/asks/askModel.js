const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Ask = new Schema({
    AskId: Schema.Types.ObjectId,
    PartyCode: String,
    Price: Number,
    Quantity: Number,
    UnitOfMeasurement: Number,
    Lane: Number,
    IntraCity: Boolean,
    InterCity: Boolean,
    EnteredDateTime: { type: Date, default: Date.now },
    ModifiedDateTime: Date,
    ExpireDateTime: Date
}, { collection: 'MatchingEngine' });

module.exports = mongoose.model('ask', Ask);