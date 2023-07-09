const {db, Datatypes} = require(".db/connections.js");
let User = User.init({
    username: Datatypes.STRING,
    email: Datatypes.STRING
}, {
    sequelize: db,
    modelName: "User"
});


module.exports = User;