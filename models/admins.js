module.exports = (sequelize, type) => {
    return sequelize.define('admins', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        username: {
            type: type.STRING,
            allowNull: false,
        },
        password: {
            type: type.STRING(30),
            allowNull: false,
        }
    })
}