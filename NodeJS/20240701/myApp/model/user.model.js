// 유저만 관리하는 모듈
const { user } = require("./lib")

class UserModel {
  async findUserId(id) {
    return await user.findOne({ where: { id } });
  }

  async createUser(name, age, msg) {
    await user.create({ name, age, msg });
  }
}

module.exports = UserModel;