const db = require('../config/db.config.js');
//const Customer = db.customers;
const User = db.user;
// Post a User
exports.create = (req, res) => {  
  // Save to MySQL database
  User.create({  
    username: req.body.username,
    password: req.body.password
  }).then(user => {    
    // Send created customer to client
    res.json('them user thanh cong');
    
  });
};
 
// FETCH all Customers
exports.findAll = (req, res) => {
  User.findAll({
    attributes: ['id', 'username']
  }).then(user => {
    // Send all customers to Client
    res.send(user);
  });
};
 
// Find a Customer by Id
exports.findOne = (req, res) => {  
    User.findOne({ where: { id: req.params.userId } }).then(user => {
    res.send(user);
  })
};
 
// Update a Customer
exports.update = (req, res) => {
  const id = req.params.userId;
  User.update( { username: req.body.username, password: req.body.password }, 
           { where: {id: req.params.userId} }
           ).then(() => {
           res.status(200).send("updated successfully a user with id = " + id);
           });
};
 
// Delete a Customer by Id
exports.delete = (req, res) => {
  const id = req.params.userId;
  User.destroy({
    where: { id: id }
  }).then(() => {
    res.status(200).send('deleted successfully a user with id = ' + id);
  });
};