const mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);

const BAIinfo = mongoose.Schema({
    name: {
        type: String,
        // required: [true, "can't be blank"],
    },
    registration_number: {
        type: String,
    },
    org_name: {
        type: String,
    },
    email: {
        type: String,
    },
    address: {
        type: String,
    },
    city: {
        type: String,
    },
    state: {
        type: String,
        // required: [true, "can't be blank"],
    },
    pin: {
        type: String,
    },
    phone: {
        type: String,
    },
    office: {
        type: String,
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
        type: String,
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
    credentials: {
        type: String,
    },
}, {
    timestamps: true
});

module.exports = mongoose.model('BAIinfo', BAIinfo);
