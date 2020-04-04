var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json())
 
const cors = require('cors')
const corsOptions = {
  origin: 'http://localhost:4200',
  optionsSuccessStatus: 200
}
 
app.use(cors(corsOptions))
 
const db = require('./app/config/db.config.js');
  
// // force: true will drop the table if it already exists
// db.sequelize.sync({force: true}).then(() => {
//   console.log('Drop and Resync with { force: true }');
//   initial();
// });
 
require('./app/route/customer.route.js')(app);
 

var server = app.listen(8080, function () {
 
  let host = server.address().address
  let port = server.address().port
 
  console.log("App listening at http://%s:%s", host, port);
})
 
function initial(){
 
  let customers = [
    {
    //   name: "Joe",
    //   middlename:	"middlename", 
    //   surname: "Thomas",
    //   passportSeries:	"passportSeries" ,
	// 		passportNumber:	"22222", 
	// 		department:	"department" ,
	// 		// dateOfDepartment:	"12-09-2011" ,
	// 		// dateOfBirth:	"22-12-2012" ,
	// 		passportId:	"12", 
	// 		placeOfBirth:	"placeOfBirth" ,
	// 		currentCity:	"currentCity", 
	// 		currentAddress:	"currentAddress", 
	// 		telephoneHouse:	"222-22-22", 
	// 		email:	"email@gmail.com" ,
	// 		placeOfWork:	"placeOfWork",
	// 		position:	"position", 
	// 		familyStatus:	"familyStatus",
	// 		citizenship:	"citizenship", 
	// 		disability:	"disability", 
	// 		pensioner:	"false" ,
    //   		income: 36
    }
        
  ]
 
  
  const Customer = db.customers;
  for (let i = 0; i < customers.length; i++) { 
    Customer.create(customers[i]);  
  }
}