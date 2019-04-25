const BAIinfo = require('../models/note.model.js');

// Create and Save a new Note
exports.create = (req, res) => {
    if(!req.body) {
        return res.status(400).send({
            message: "Note can not be empty"
        });
    }

    // Create a Note
    const info = new BAIinfo({
        name: req.body.name, 
        org_name: req.body.org_name,
        email: req.body.email,
        address: req.body.address,
        city: req.body.city,
        state: req.body.state,
        pin: req.body.pin,
        phone: req.body.phone || "",
        office: req.body.office, 
        md_name: req.body.md_name || "N/A", 
        partner_name: req.body.partner_name || "N/A", 
        director_name: req.body.director_name || "N/A", 
        equipments: req.body.equipments,
        org_type: req.body.org_type || "N/A",
        member: req.body.member, 
        website: req.body.website || "N/A",
        clients: req.body.clients,
        contract_type: req.body.contract_type || "N/A",
        largest_contract: req.body.largest_contract,
        one_year: req.body.one_year || 0,
        two_year: req.body.two_year || 0,
        three_year: req.body.three_year || 0,  
        work_nature: req.body.work_nature
    });

    // Save Note in the database
    info.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Note."
        });
    });
};

exports.findAll = (req, res) => {
    BAIinfo.find()
    .then(notes => {
        res.send(notes);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving notes."
        });
    });
};
