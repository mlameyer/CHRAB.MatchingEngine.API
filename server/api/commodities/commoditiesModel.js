const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Commodity = new Schema({
    CommodityId: Schema.Types.ObjectId,
    Commodity: String,
    DestinationCity: String,
    OriginCity: String,
    IntraCity: Boolean,
    InterCity: Boolean,
    EnteredDateTime: { type: Date, default: Date.now },
    ModifiedDateTime: Date,
    ExpireDateTime: Date
}, { collection: 'MatchingEngine.Commodities' });

module.exports = mongoose.model('commodity', Commodity);