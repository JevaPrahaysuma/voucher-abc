// import sequelize 
import { Sequelize } from "sequelize";
// import connection 
import DB from "../config/db.js";
 
// init DataTypes
const { DataTypes } = Sequelize;
 
// Define schema
const VoucherTransaction = DB.define('voucher_transactions', {
  // Define attributes
  id: {
    type: DataTypes.BIGINT,
    primaryKey: true
  },
  voucher_id: {
    type: DataTypes.BIGINT
  },
  customer_id: {
    type: DataTypes.BIGINT
  },
  voucher_code: {
    type: DataTypes.STRING
  },
  status: {
    type: DataTypes.STRING
  },
  expired_at: {
    type: DataTypes.STRING
  },
  created_at: {
    type: DataTypes.STRING
  }
}, {
    createdAt: false,
    updatedAt: false
}
);
 
// Export model Product
export default VoucherTransaction;