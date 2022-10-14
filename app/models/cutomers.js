// import sequelize 
import { Sequelize } from "sequelize";
// import connection 
import DB from "../config/db.js";
 
// init DataTypes
const { DataTypes } = Sequelize;
 
// Define schema
const Customers = DB.define('customers', {
  // Define attributes
  id: {
    type: DataTypes.BIGINT,
    primaryKey: true
  },
  first_name: {
    type: DataTypes.STRING
  },
  last_name: {
    type: DataTypes.STRING
  },
  gender: {
    type: DataTypes.STRING
  },
  date_of_birth: {
    type: DataTypes.DATE
  },
  contact_number: {
    type: DataTypes.STRING
  },
  email: {
    type: DataTypes.STRING
  },
  created_at: {
    type: DataTypes.STRING
  },
  updated_at: {
    type: DataTypes.STRING
  }, 
  
}, {
    createdAt: false,
    updatedAt: false
}
);
 
// Export model Product
export default Customers;