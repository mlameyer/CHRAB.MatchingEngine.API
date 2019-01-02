const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Bid = new Schema({
    BidId: Schema.Types.ObjectId,
    Commodity: String,
    PartyCode: String,
    Price: Number,
    Quantity: Number,
    UnitOfMeasurement: Number,
    DestinationCity: String,
    OriginCity: String,
    IntraCity: Boolean,
    InterCity: Boolean,
    EnteredDateTime: { type: Date, default: Date.now },
    ModifiedDateTime: Date,
    ExpireDateTime: Date
}, { collection: 'MatchingEngine.Bid' });

module.exports = mongoose.model('bid', Bid);