# shopping-cart-server
A shopping cart system is a crucial component of e-commerce websites and applications. It handles various functionalities related to user authentication and authorization, managing the cart, inventory management, user profiles, payment processing, notifications, and product recommendations.

# How to configure
Run the following command
```bash
yarn install
```
To run the application, run the following command
```bash
yarn run start
```

## Setting up database configuration
Create a Sequelize migration script that checks if the database exists and creates it if necessary. You can use the sequelize.query method to run raw SQL queries. Create a new migration file using the Sequelize CLI

```bash
npx sequelize-cli migration:generate --name create-database
```

### Run Migrations
Run the migrations to apply the changes to the database
```bash
npx sequelize-cli db:migrate
```
