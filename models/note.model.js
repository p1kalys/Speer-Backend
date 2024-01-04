const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    todonote: {
        type: String,
        required: true
    },
    owner: {
        type: String
    },
    sharedWith: [
        {
            type: String
        }
    ]
})

module.exports = mongoose.model('Note', noteSchema);