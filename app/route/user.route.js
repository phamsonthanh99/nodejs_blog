module.exports = function(app) {
 
    //const customers = require('../controller/user.controller.js');
    const user = require('../controller/user.controller');
    const valid = require('../validate/user.validate');
    // Create a new Customer
    app.post('/api/user',valid.createValidator, user.create);
 
    // Retrieve all Customer
    app.get('/api/user', user.findAll);
 
    // Retrieve a single Customer by Id
    app.get('/api/user/:userId', user.findOne);
 
    // Update a Customer with Id
    app.put('/api/user/:userId', user.update);
 
    // Delete a Customer with Id
    app.delete('/api/user/:userId', user.delete);
}