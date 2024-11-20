const jwtHandler = require("../utils/jwt.handler");
const checkSession = async (req, res, next) => {
    const accessToken = req.headers.authorization
    if (!accessToken) {
        return res.status(401).send({
            success: false,
            message: "NO_TOKEN_PROVIDED",
            data: []
        });
    }

    try {
        const jwt = accessToken ? accessToken.split(" ").pop() : "";
        const decoded = await jwtHandler.verifyJWT(jwt);
        req.user = decoded;
        next();
    } catch (e) {
        return res.status(401).send({
            success: false,
            message: "INVALID_TOKEN",
            data: []
        });
    }
}

module.exports = checkSession