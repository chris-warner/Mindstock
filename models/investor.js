module.exports = function (sequelize, DataTypes) {
    var Investor = sequelize.define("Investor", {
        first_name: {
            type: DataTypes.STRING
        },
        last_name: {
            type: DataTypes.STRING
        },
        email: {
            type: DataTypes.STRING
        },
        investor_type: {
            type: DataTypes.STRING
        }
    });

    Investor.associate = function (models) {
        
        Investor.hasMany(models.Investments);

    }

    return Investor;
}
