const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let User = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    korisnickoime:{
        type: String,
        required: true,
        unique: true
    },
    sifra:{
        type: String,
        required: true
    },
});

export default mongoose.model('User', User);