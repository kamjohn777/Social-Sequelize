const {db, Datatypes} = require(".db/connections.js");
let Comment = Comment.init({
    body: Datatypes.STRING,
    createAt: Datatypes.STRING
}, {
    sequelize: db,
    modelName: "Comment"
});


module.exports = Comment;