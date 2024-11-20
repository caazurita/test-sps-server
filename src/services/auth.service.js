const { User } = require("../db/models/user.model");
const { error } = require("../utils/error.handler");
const { generateJWT } = require("../utils/jwt.handler");

class AuthService {
    async login(email, password) {
        const checkIs = await User.findOne({ where: { email } });
        if (!checkIs) {
            throw error("USER_NOT_EXISTS", 404);
        }
        const passwordHash = checkIs.password;
        const isValid = passwordHash === password;
        if (!isValid) throw new Error("PASSWORD_INVALID");
        const accessToken = await generateJWT(checkIs.email, "1d");

        return {
            user: checkIs,
            accessToken,
        };
    }
}

module.exports = AuthService