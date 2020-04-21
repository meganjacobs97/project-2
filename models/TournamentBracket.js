module.exports = function(sequelize, DataTypes) {
    const TournamentBracket = sequelize.define('TournamentBracket', {
       name: DataTypes.STRING,
       current_round: DataTypes.INTEGER,
       is_complete: {
           type: DataTypes.BOOLEAN,
           defaultValue: false
       },
       winner: DataTypes.STRING
    });

    TournamentBracket.associate = function(models) {
        // add associations here
        // ex:Review.hasMany(models.BlogPost);
        //each tournamentbracket belongs to a user 
        TournamentBracket.belongsTo(models.User, {
            foreignKey: {
              allowNull: false
            }
        });

        //brackets have many rounds 
        TournamentBracket.hasMany(models.MatchUp);
        //and many options 
        TournamentBracket.hasMany(models.Option); 
    };

    return TournamentBracket;
};