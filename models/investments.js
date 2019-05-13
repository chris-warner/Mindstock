module.exports = function (sequelize, DataTypes) {
    var Investments = sequelize.define("Investments", {

        mutual_fund_name: {
            type: DataTypes.STRING
        },
        fund_sector: {
            type: DataTypes.STRING
        },
        growth_rate: {
            type: DataTypes.STRING
        },
        description: {
            type: DataTypes.STRING
        },

    });

    Investments.associate = function (models) {
        
        Investments.belongsTo(models.Investor);

    }

    return Investments;
}

