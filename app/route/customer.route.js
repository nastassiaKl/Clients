module.exports = function(app) {
    const customers = require('../controller/customer.controller.js');

    const express = require('express');
    const { body } = require('express-validator');
    app.use(express.json());

 
    // Create a new Customer
    app.post('/api/customers',
//     [check('username').custom(async function(value){
//         var user = await User.find({username:value})
//         return user.length == 0;
//     })
//     .withMessage('username already exits')],function(req,res,next){
//                var Errors = validationResult(req)
// },
 customers.create, [
        body('name')
            .not().isEmpty()
            .uniq,
        body('middlename')
        .not().isEmpty(),
        body('surname')
            .not().isEmpty(),
        body('passportSeries')
            .not().isEmpty(),
        body('passportNumber')
            .not().isEmpty(),
        body('department')
            .not().isEmpty(),
        body('dateOfDepartment')
            .not().isEmpty(),
        body('dateOfBirth')
            .not().isEmpty(),
        body('passportId')
            .not().isEmpty(),
        body('placeOfBirth')
            .not().isEmpty(),
        body('currentCity')
            .not().isEmpty(),
        body('currentAddress')
            .not().isEmpty(),
        body('familyStatus')
            .not().isEmpty(),
        body('citizenship')
            .not().isEmpty(),
        body('email')
            .isEmail()
            .normalizeEmail(),
           
        ], (req, res) => {
        // Handle the request somehow
        });
 
    // Retrieve all Customer
    app.get('/api/customers', customers.findAll);
 
    // Retrieve a single Customer by Id
    app.get('/api/customers/:id', customers.findById);
 
    // Update a Customer with Id
    app.put('/api/customers', customers.update);
 
    // Delete a Customer with Id
    app.delete('/api/customers/:id', customers.delete);
}