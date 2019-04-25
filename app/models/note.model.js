const mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);

const BAIinfo = mongoose.Schema({
    name: {
        type: String,
        required: [true, "can't be blank"],
    },
    org_name: {
        type: String,
        required: [true, "can't be blank"],
    },
    email: {
        type: String,
        required: [true, "can't be blank"],
        match: [/\S+@\S+\.\S+/, 'is invalid'],
    },
    address: {
        type: String,
        required: [true, "can't be blank"],
    },
    city: {
        type: String,
        required: [true, "can't be blank"],
    },
    state: {
        type: String,
        required: [true, "can't be blank"],
    },
    pin: {
        type: String,
        required: [true, "can't be blank"],
    },
    phone: {
        type: Number,
    },
    office: {
        type: Number,
        required: [true, "can't be blank"],
    },
    md_name: {
        type: String,
    },
    partner_name: {
        type: String,
    },
    director_name: {
        type: String,
    },
    equipments: [String],
    org_type: {
        type: String,
    },
    member: {
        type: Boolean,
        required: [true, "can't be blank"],
    },
    website: {
        type: String,
    },
    clients: [String],
    contract_type: {
        type: String,
    },
    largest_contract: {
        type: Number,
    },
    one_year: {
        type: Number,
    },
    two_year: {
        type: Number,
    },
    three_year: {
        type: Number,
    },
    work_nature: [String],
    updated: {
        type: Date,
        default: Date.now 
    },
}, {
    timestamps: true
});

module.exports = mongoose.model('BAIinfo', BAIinfo);
