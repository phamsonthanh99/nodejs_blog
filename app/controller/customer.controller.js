const db = require('../config/db.config.js');
const Customer = db.customers;
const User = db.user;
// Post a Customer
exports.create = (req, res) => {  
  // Save to MySQL database
  
  Customer.create({  
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    age: req.body.age,
    userId: req.body.userId
  }, {
    include: [User]
  }).then(customer => {    
    // Send created customer to client
    res.send(customer);
  });
};
 
// FETCH all Customers
exports.findAll = (req, res) => {
  Customer.findAll({
    attributes: [['id', 'id'], 'firstname', 'lastname', 'age'],
    include: [{
      model: User,
      where: {fk_userId: db.Sequelize.col('user.id')},
      attributes: ['id', 'username']
    }]
  }).then(customers => {
    // Send all customers to Client
    res.send(customers);
  });
};
 
// Find a Customer by Id
exports.findOne = (req, res) => {  
  Customer.findOne({ where: { id: req.params.customerId } }).then(customer => {
    res.send(customer);
  })
};
 
// Update a Customer
exports.update = (req, res) => {
  const id = req.params.customerId;
  Customer.update( { firstname: req.body.firstname, lastname: req.body.lastname, age: req.body.age, userId: req.body.userId }, 
           { where: {id: req.params.customerId} }
           ).then(() => {
           res.status(200).send("updated successfully a customer with id = " + id);
           });
};
 
// Delete a Customer by Id
exports.delete = (req, res) => {
  const id = req.params.customerId;
  Customer.destroy({
    where: { id: id }
  }).then(() => {
    res.status(200).send('deleted successfully a customer with id = ' + id);
  });
};