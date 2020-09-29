module.exports = (sequelize, Sequelize) => {
    const Customer = sequelize.define('customer', {
      id: {
        type: Sequelize.UUID,
        // defaultValue: Sequelize.UUIDV1,
        primaryKey: true
        },
      firstname: {
      type: Sequelize.STRING
      },
      lastname: {
      type: Sequelize.STRING
      },
      age: {
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER
      }
    });
    
    return Customer;
  }