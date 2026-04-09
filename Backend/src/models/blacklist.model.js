const { default: mongoose } = require("mongoose");
const monoose = require("mongoose");

const blacklistSchema = new monoose.Schema({
    token:{
        type:String,
        required:[true, "token is required for blacklisting."],

    }
},{timestamps:true})

const blacklistModel = mongoose.model("blacklist", blacklistSchema)

module.exports = blacklistModel