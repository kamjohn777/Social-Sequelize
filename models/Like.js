const {db, Datatypes} = require(".db/connections.js");
let Like = Like.init({
    reactionType: Datatypes.STRING,
    createdAt: Datatypes.STRING
}, {
    sequelize: db,
    modelName: "Like"
});

module.exports = Like;