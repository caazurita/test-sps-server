const { User } = require("../db/models/user.model")
const { error } = require("../utils/error.handler")

class UserService {

    async getAll() {
        const data = await  User.findAll({
            attributes: {
                exclude: ["password"]
            },
            order: [["id", "DESC"]]
        })
        return data
    }

    async getOne(id) {
        const data = await User.findByPk(id, {
            attributes: {
                exclude: ["password"]
            }
        })
        if (!data) {
            throw error("USER_NOT_EXISTS", 404)
        }
        return data
    }

    async create(user) {
        const data = await User.create(user)
        return data
    }

    async update(id, body) {
        const user = await User.findByPk(id, {
            attributes: {
                exclude: ["password"]
            }
        })
        if (!user) {
            throw error("USER_NOT_EXISTS", 404)
        }
        const data = await user.update(body)
        return data
    }

    async delete(id) {
        const user = await User.findByPk(id)
        if (!user) {
            throw error("USER_NOT_EXISTS", 404)
        }
        await user.destroy()
        return user
    }
}

module.exports = UserService