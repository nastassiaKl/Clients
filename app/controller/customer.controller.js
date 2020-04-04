const db = require('../config/db.config.js');
const Customer = db.customers;



// Post a Customer
exports.create = (req, res) => {	
	Customer.create({
				"name": req.body.name,
				"middlename": req.body.middlename,
				"surname": req.body.surname,
				"passportSeries": req.body.passportSeries,
				"passportNumber": req.body.passportNumber,
				"department": req.body.department,
				"dateOfDepartment": req.body.dateOfDepartment,
				"dateOfBirth": req.body.dateOfBirth,
				"passportId": req.body.passportId,
				"placeOfBirth": req.body.placeOfBirth,
				"currentCity": req.body.currentCity,
				"currentAddress": req.body.currentAddress,
				"telephoneHouse": req.body.telephoneHouse,
				"telephone": req.body.telephone,
				"email": req.body.email,
				"placeOfWork": req.body.placeOfWork,
				"position": req.body.position,
				"familyStatus": req.body.familyStatus,
				"citizenship": req.body.citizenship,
				"disability": req.body.disability,
				"pensioner": req.body.pensioner,
				"income": req.body.income,
				"military": req.body.military

			}).then(customer => {		
			// Send created customer to client
			res.json(customer);
		}).catch(err => {
			console.log(err);
			res.status(500).json({msg: "error", details: err});
		});
};
 

exports.findAll = (req, res) => {
	Customer.findAll().then(customers => {
			res.json(customers.sort(function(c1, c2){return c1.id - c2.id}));
		}).catch(err => {
			console.log(err);
			res.status(500).json({msg: "error", details: err});
		});
};


exports.findById = (req, res) => {	
	Customer.findById(req.params.id).then(customer => {
			res.json(customer);
		}).catch(err => {
			console.log(err);
			res.status(500).json({msg: "error", details: err});
		});
};
 

exports.update = (req, res) => {
	const id = req.body.id;
	Customer.update( req.body, 
			{ where: {id: id} }).then(() => {
				res.status(200).json( { mgs: "Updated Successfully -> Customer Id = " + id } );
			}).catch(err => {
				console.log(err);
				res.status(500).json({msg: "error", details: err});
			});
};


exports.delete = (req, res) => {
	const id = req.params.id;
	Customer.destroy({
			where: { id: id }
		}).then(() => {
			res.status(200).json( { msg: 'Deleted Successfully -> Customer Id = ' + id } );
		}).catch(err => {
			console.log(err);
			res.status(500).json({msg: "error", details: err});
		});
};