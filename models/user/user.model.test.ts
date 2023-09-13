import { DataTypes } from "sequelize";
import { User } from "./user.model";
import * as bcrypt from 'bcrypt';
import { test } from "../../databases/test-database";
import { sequelize } from "../../databases/database";

describe('User Model', () => {
  beforeAll(async () => {
    // open connection to database 
    await test.authenticate();
    // Recreate DB schema  
    await User.sync({ force: true }); 
    
  });

  beforeEach(async () => {
   // await User.destroy({ truncate: true }); // Empty the table

  });

  it('should hash the password when setting', async () => {
    // hash the password using bcrypt

    const password = 'password123';
    const user = await User.create({
      name: 'John Tola',
      email: 'johndoe@example.com',
      password: bcrypt.hashSync(password, 10),
    });

    expect(user.getDataValue('password')).not.toBe('password123'); // Ensure password is hashed
  });

  // Add more test cases for other aspects of your model as needed

  afterAll(async () => {
    // Close the Sequelize connection
    await test.close(); 
    await sequelize.close();
  });
});