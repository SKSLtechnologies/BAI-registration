const BAIinfo = require('../models/bai.model.js');
const fs = require('fs');
const nodeMailer = require('nodemailer');

// Create and Save a new member
exports.create = (req, res) => {

    if (!req.body) {
        return res.status(400).send({
            message: "member can not be empty"
        });
    }
    var registeration_no;
    async function trying() {

        //find the total number of documents
        await BAIinfo.countDocuments({}, function (err, count) {
            registeration_no = (count + 1).toString();
            switch (8 - registeration_no.length) {
                case 7:
                    registeration_no = '0000000' + registeration_no;
                    break;
                case 6:
                    registeration_no = '000000' + registeration_no;
                    break;
                case 5:
                    registeration_no = '00000' + registeration_no;
                    break;
                case 4:
                    registeration_no = '0000' + registeration_no;
                    break;
                case 3:
                    registeration_no = '000' + registeration_no;
                    break;
                case 2:
                    registeration_no = '00' + registeration_no;
                    break;
                case 1:
                    registeration_no = '0' + registeration_no;
                    break;
                default:
                    registeration_no = registeration_no;
            }
        });

        //send email with confirmation number
        let transporter = nodeMailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            secure: true,
            auth: {
                user: 'tech@sksl.in',
                pass: 'SKSLtech@1234'
            }
        });

        let mailOptions = {
            from: '"SKSLtechnologies" <tech@sksl.in>', // sender address
            to: req.body.email, // list of receivers
            subject: 'BAI Registeration Number', // Subject line
            html: 'Hello, <br><br>Thank you for submitting your form. Your BAI registeration number is <b>' + registeration_no + '.</b><br><br>Regards,<br>SKSLtechnologies' // html body
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return console.log(error);
            }
            console.log('Message %s sent: %s', info.messageId, info.response);
        });

        console.log(registeration_no);
        // Create a member
        const info = new BAIinfo({
            name: req.body.name,
            registration_number: registeration_no,
            org_name: req.body.org_name,
            email: req.body.email,
            address: req.body.address,
            city: req.body.city,
            state: req.body.state,
            pin: req.body.pin,
            phone: req.body.phone || "N/A",
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
            work_nature: req.body.work_nature,
            credentials: req.body.credentials || "N/A"
        });

        // Save member in the database
        info.save()
            .then(data => {
                res.redirect('/success')
            }).catch(err => {
                res.status(500).send({
                    message: err.message || "Some error occurred while creating the member."
                });
            });
    }

    trying();


};

exports.findAll = (req, res) => {
    BAIinfo.find().sort('name')
        .then(members => {
            var mySJON = JSON.stringify(members)
            fs.writeFileSync("writeMe.json", mySJON, function (err) {
                if (err) {
                    return console.log(err);
                }
                console.log("The file was saved!");
            });
            res.json(members);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving members."
            });
        });
};

exports.search = (req, res) => {

    var query = {};
    for (var key in req.body) { //could also be req.query and req.params
        req.body[key] !== "" ? query[key] = req.body[key] : null;
        console.log(key)
    }

    console.log(req.body.largest_contract)
    if (req.body.largest_contract) {
        if (req.body.largest_contract == 100000) {
            query["largest_contract"] = {
                $lte: 100000
            };
        } else if (req.body.largest_contract == 500000) {
            query["largest_contract"] = {
                $lte: 500000,
                $gte: 100000
            };
        } else if (req.body.largest_contract == 1000000) {
            query["largest_contract"] = {
                $lte: 1000000,
                $gte: 500000
            };

        } else if (req.body.largest_contract == 10000000) {
            query["largest_contract"] = {
                $lte: 10000000,
                $gte: 1000000
            };

        } else if (req.body.largest_contract == 50000000) {
            query["largest_contract"] = {
                $lte: 50000000,
                $gte: 10000000
            };

        } else {
            query["largest_contract"] = {
                $gte: 50000000
            };

        }
    }
    console.log(query);

    BAIinfo.find(query).sort('name')
        .then(function (data) {
            var mySJON = JSON.stringify(data)
            fs.writeFileSync("writeMe.json", mySJON, function (err) {
                if (err) {
                    return console.log(err);
                }
                console.log("The file was saved!");
            });
            res.redirect('/list')
        }).catch(function (err) {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving members."
            });
        });
}