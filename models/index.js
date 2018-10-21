const Sequelize  = require ('sequelize')
const AdminModel = require('./admins')
const CustomersModel = require('./customers')
const LoginsModel = require('./logins')
const OrderModel = require('./orders')
const Delivery_AddressModel = require('./delivery_address')
const ProductModel = require('./product')
const CategoryModel = require('./categories')
const OrderItemsModel = require('./orderItem')

const sequelize = new Sequelize('postgres','postgres','postgres', {
    host:'localhost',
    dialect:'postgres',
    pool: {
        max:10,
        min:0,
        acquire:30000,
        idle:10000
    }
})

const Admins = AdminModel(sequelize, Sequelize)
const Customers = CustomersModel(sequelize, Sequelize)
const Logins = LoginsModel(sequelize, Sequelize)
const Delivery_Address = Delivery_AddressModel(sequelize, Sequelize)
const Orders = OrderModel(sequelize, Sequelize)
const Products = ProductModel(sequelize, Sequelize)
const OrderItems = OrderItemsModel(sequelize, Sequelize)
const Categories = CategoryModel(sequelize, Sequelize)


//ASSOCIATIONS

Logins.belongsTo(Customers);
Customers.hasMany(Orders);
Orders.belongsTo(Delivery_Address);
Orders.belongsToMany(Products , {
    through: OrderItems,
});
Products.belongsToMany(Orders, {
    through: OrderItems,
});
Products.belongsTo(Categories)

sequelize.sync({force: true})
    .then( () => {
        console.log(`Database & table created!`)
    })

module.exports = {
    Admins,
    Customers,
    Logins,
    Delivery_Address,
    Orders,
    OrderItems,
    Categories,
    Products
}
