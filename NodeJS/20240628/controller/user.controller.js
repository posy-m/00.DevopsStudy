const { users, Users } = require("../models");
const User = require('../models/users');


// 유저가 가입을 할수 있고.
// CRUD 중 C
const user = {
  async create(name, age, msg) {
    try {
      await Users.create({
        name, age, msg
      })
      return "회원가입 완료";
    } catch (error) {
      return error
    }
  },
  // CRUD 중 R
  async userselectAll() {
    try {
      return await Users.findAll();
    } catch (error) {
      return error
    }
  },

  async userSelectName(name, model) {
    try {
      // include : 시퀄라이즈 join
      return await Users.findOne({ where: { name }, include: { model } });
    } catch (error) {
      return error
    }
  }
}

module.exports = user;