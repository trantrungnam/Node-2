module.exports= (sequelize, type) => {
    return sequelize.define('products', {
        id: {
            type: type.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: type.STRING,
            allowNull: true,
        },
        description: {
            type: type.STRING,
            allowNull: true,
        },
        image: {
            type: type.STRING,
        },
        price: {
            type: type.FLOAT,
        }
    })
}