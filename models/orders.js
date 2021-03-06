module.exports = (sequelize, type) => {
    return sequelize.define('orders', {
        id: {
            type: type.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        registered: {
            type: type.DATE,
        },
        payment_type: {
            type: type.STRING,
        },
        date: {
            type: type.DATE,
        },
        status: {
            type:type.STRING,
        },
        session: {
            type: type.STRING,
        },
        total: {
            type: type.FLOAT
        },
    }, {underscored: true})
}