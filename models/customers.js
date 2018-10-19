module.exports = (sequelize, type) => {
    return sequelize.define('customers', {
        id: {
            primaryKey: true,
            autoIncrement: true,
            type: type.INTEGER,
        },
        forname: {
            type: type.STRING,
            allowNull: false,
        },
        surname: {
            type: type.STRING,
            allowNull: false,
        },
        add1: {
            type:type.STRING,
            allowNull: true,
        },
        add2: {
            type:type.STRING,
            allowNull: true,
        },
        add3: {
            type:type.STRING,
            allowNull: true,
        },
        postcode: {
            type:type.STRING,
            allowNull: true,
        },
        phone: {
            type: type.STRING,
            allowNull:false,
        },
        email: {
            type: type.STRING,
            validate: {
                isEmail: true
            }
        },
        registered: {
            type: type.DATE,
            defaultValue: type.NOW,
            validate: {
                isDate: true,
            }
        }
    }, {underscored: true})
}