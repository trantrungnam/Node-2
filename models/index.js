const Sequelize  = require ('sequelize')
const AdminModel = require('./admins')
const CustomersModel = require('./customers')
const LoginsModel = require('./logins')
const OrderModel = require('./orders')
const Delivery_AddressModel = require('./delivery_address')
const ProductModel = require('./product')
const CategoryModel = require('./categories')

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
const Categories = CategoryModel(sequelize, Sequelize)


//ASSOCIATIONS

Logins.belongsTo(Customers);
// Orders.belongsTo(Customers);
Orders.belongsTo(Delivery_Address);
Customers.hasMany(Orders);






sequelize.sync({force: true})
    .then( () => {
        console.log(`Database & table created!`)
    })

module.exports = {
    Admins
}
