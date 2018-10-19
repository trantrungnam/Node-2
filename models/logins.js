module.exports = (sequelize, type) => {
    return sequelize.define('logins', {
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
            type: type.STRING,
            allowNull: false,
        }
    }, {underscored: true})
}