module.exports = (sequelize, Sequelize) => {
	const Customer = sequelize.define('customer', {
	//   firstname: {
	// 		type: Sequelize.STRING
	//   },
	//   lastname: {
	// 		type: Sequelize.STRING
	//   },
	//   age: {
	// 	  type: Sequelize.INTEGER
	//   }
	// id: {
	// 	type: Sequelize.INTEGER,
	// 	primaryKey:true
	// 	},
	name: {
		type: Sequelize.STRING
	},
	middlename: {
	type: Sequelize.STRING
	},
	surname: {
		type: Sequelize.STRING
	},
	passportSeries: {
	type: Sequelize.STRING
	},
	passportNumber: {
		type: Sequelize.STRING
	},
	department: {
		type: Sequelize.STRING
	},
	dateOfDepartment: {
		type: Sequelize.DATE
	},
	dateOfBirth: {
		type: Sequelize.DATE
	},
	passportId: {
		type: Sequelize.STRING
	},
	placeOfBirth: {
		type: Sequelize.STRING
	},
	currentCity: {
		type: Sequelize.STRING
	},
	currentAddress: {
		type: Sequelize.STRING
	},
	telephoneHouse: {
		type: Sequelize.STRING
	},
	telephone: {
		type: Sequelize.STRING
	},
	email: {
		type: Sequelize.STRING
	},
	placeOfWork: {
		type: Sequelize.STRING
	},
	position: {
		type: Sequelize.STRING
	},
	familyStatus: {
		type: Sequelize.STRING
	},
	citizenship: {
		type: Sequelize.STRING
	},
	disability: {
		type: Sequelize.STRING
	},
	pensioner: {
		type: Sequelize.BOOLEAN
	},
	income: {
		type: Sequelize.INTEGER
	},
	
	military: {
		type: Sequelize.BOOLEAN
	}}
	);
	
	return Customer;
}