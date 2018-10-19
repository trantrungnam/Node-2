module.exports = (sequelize, type) => {
    return sequelize.define('delivery_addresses', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        registered: {
            type: type.DATE,
            allowNull: false,
        },
        payment_type: {
            type: type.STRING,
            allowNull: false,
        },
        date: {
            type: type.DATE,
            allowNull: true,

        },
        status: {
            type: type.STRING,
        },
        session: {
            type: type.STRING,
        },
        total: {
            type: type.FLOAT,
            validate: {
                min: 0.0,
            }
        }
    })
}