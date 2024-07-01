// 주입하는 부분

const container = require("./");
const UserModel = require("../model/user.model")
const UserRepository = require("../repositories/user.repositories")
const UserService = require("../service/user.service");
const UserController = require('../controller/user.controller');

// 만드는 순서
// 데이터베이스 모델
// 레파지토리
// 서비스 로직
// 컨트롤러
// 왜하냐면.... 이후에... 필요함... nest때 필요함

// []안에는 주입
// 데이터베이스 모델
container.register("UserModel", UserModel, []);

//레파지토리
container.register("UserRepository", UserRepository, ["UserModel"]);

// 서비스 로직
container.register("UserService", UserService, ["UserRepository"])

//컨트롤러
container.register("UserController", UserController, ["UserService"])


module.exports = container;