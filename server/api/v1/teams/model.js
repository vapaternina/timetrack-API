const mongoose = require('mongoose');
const { Schema } = mongoose;


const team = {
    leader: {
        type: String,
        required: true
    },
    date: {
        type: Date, default: Date.now
    },
    members: {
        type: Array,
        required: true, 
    },
    tasks: {
        type: Array,
        required: true
    },
    projects: {
        type: Array,
        required: true
    }
};

module.exports = mongoose.model('team', team);