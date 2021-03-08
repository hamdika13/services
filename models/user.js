const mongoose = require('mongoose');
const schema = mongoose.Schema;


const UserSchema = new schema({
    userName : {
        type :String
    },
    email: {
        type : String
    }, 
    phone : {
        type : String
    },
    address: {
        type : String
    }
})

module.exports = mongoose.model(user, UserSchema)