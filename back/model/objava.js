import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let Objava = new Schema({
    naziv:{
        type: String
    },
    kategorija:{
        type: String
    },
    opis:{
        type: String
    },
    glavnaslika:{
        type: String
    },
    sveslike:{
        type: [String]
    }
});

export default mongoose.model('objava', Objava);