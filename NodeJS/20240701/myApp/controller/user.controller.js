class UserController {
  constructor(userService) {
    this.userService = userService;
  }
  async getUser(req, res) {
    const { id } = req.params;
    const user = await this.userService.getUser(id);
    res.send(user);
  }

  async signup(req, res) {
    const { name, age, msg } = req.body;
    await this.userService.signup(name, age, msg);
    res.send("회원가입 완료")
  }
}

module.exports = UserController