const {db, Datatypes} = require("../db/connection");
let Profile = Profile.init({
    bio: Datatypes.STRING,
    profilePicture: Datatypes.STRING,
    birthday: Datatypes.STRING
}, {
    sequelize: db,
    modelName: "Profile"
});


module.exports = Profile;