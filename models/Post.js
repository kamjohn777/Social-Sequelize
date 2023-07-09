const {db, Datatypes} = require("../db/connection");
let Post = Post.init({
    title: Datatypes.STRING,
    body: Datatypes.STRING,
    createAt: Datatypes.STRING
    
}, {
    sequelize: db,
    modelName: "Post"
});


module.exports = Post;