const AuthService = require("../services/auth.service");
const service = new AuthService();

class AuthController {
    async login(req, res, next) {
        try {
            const { email, password } = req.body;
            const { user, accessToken } = await service.login(email, password);
            res.json({ user, accessToken });
        } catch (error) {
            return next(error);
        }
    }

    async logout(req, res, next) {
        res.send("logout");
    }

}

module.exports = AuthController;