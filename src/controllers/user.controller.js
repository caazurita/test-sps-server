
const UserService = require("../services/user.service");

const service = new UserService();
class UserController {
    async getAll(req, res, next) {
        try {
            const users = await service.getAll();
            return res.json(
                {
                    success: true,
                    message: "USERS_FOUND",
                    data: users
                }
            )
        } catch (error) {
            return next(error);
        }
    }

    async getOne(req, res, next) {
        try {
            const { id } = req.params;
            const user = await service.getOne(id);
            return res.json({
                success: true,
                message: "USER_FOUND",
                data: user
            });
        } catch (error) {
            return next(error);
        }
    }

    async create(req, res, next) {
        try {
            const { body } = req;
            const user = await service.create(body);
            return res.json({
                success: true,
                message: "USER_CREATED",
                data: user
            });
        } catch (error) {
            return next(error);
        }

    }

    async update(req, res, next) {
        try {
            const { body } = req;
            const { id } = req.params;
            const user = await service.update(id, body);
            return res.json({
                success: true,
                message: "USER_UPDATED",
                data: user
            });
        } catch (error) {
            return next(error);
        }

    }

    async delete(req, res, next) {
        try {
            const { id } = req.params;
            const user = await service.delete(id);
            return res.json({
                success: true,
                message: "USER_DELETED",
                data: user
            });
        } catch (error) {
            return next(error);
        }
    }
}
module.exports = UserController;