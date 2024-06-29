const { Posts } = require("../models")

const post = {
  //user_name : 포링키 _ 글을 작성하는 사람
  async create(content, user_name) {
    console.log(content, user_name);
    try {
      await Posts.create({
        content, user_name
      })
    } catch (error) {
      return error
    }
  },

  async postSelectIndex(id) {
    try {
      return await Posts.findOne({ where: { id } })
    } catch (error) {
      return error
    }
  },

  async postSelectAll() {
    try {
      return await Posts.findAll();
    } catch (error) {
      return error
    }
  }
}

module.exports = post;