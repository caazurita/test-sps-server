const { User, userSchema } = require("./user.model")

const setupModel = (sequilize) => {
    User.init(userSchema, User.config(sequilize));
}

module.exports = setupModel
