module.exports = (sequelize, type) => {
    return sequelize.define('categories', {
        id: {
            type: type.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: type.STRING,

        },
        description: {
            type: type.STRING,
        },
        image: {
            type: type.STRING,
        }

    } )
}