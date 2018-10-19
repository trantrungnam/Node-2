module.exports = (sequelize, type) => {
    return sequelize.define( 'order_items', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        quantity: {
            type: type.FLOAT,
        }
    });
}