module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define('user', {
      id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV1,
      primaryKey: true
      },
      
      username: {
      type: Sequelize.STRING
      },
      password: {
      type: Sequelize.STRING
      }
      
    });
    
    return User;
  }