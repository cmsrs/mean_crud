    var mongoose = require("mongoose"),
     Schema = mongoose.Schema,
     objectId = mongoose.Schema.ObjectId;
     
    var userSchema = new Schema({
     _id: { type: objectId, auto: true },
     first_name: { type: String, required: true },
     last_name: { type: String, required: true },
     age: { type: Number, required: true },
     first_name_mother : { type: String, required: true },
     first_name_father : { type: String, required: true }
    }, {
     versionKey: false
    });
     
    var user = mongoose.model('users', userSchema);
     
    module.exports = user;
