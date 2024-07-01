// MVC 패턴
// service : 비즈니스 로직을 처리하는곳  repositroy 데이터를 받아서 컨트롤러에 전달하는 역할 
// repository : 데이터 베이스 접근 로직을 서비스에서 분리해서 코드의 책임을 명확히 하는곳.
// 단순하게 http 요청과 응답만 처리할수 있도록 분리 코드의 응집도를 높이는것. 유지보수가 편하다 (코드가 모여있기때문에 편하다.)

// 사용자의 내용만 데이터 베이스에서 repository, service

class UserService {
  constructor(userRepositroy) {
    this.UserRepositroy = userRepositroy
  }
  getUserIndex(id) {
    // 여기에서 id 값을 파싱한다던지?
    // 비즈니스 로직
    id = parseInt(id);
    return this.UserRepositroy.findUserIndex(id);
  }
}

class UserRepositroy {
  // db
  constructor(db) {
    this.db = db; // db 객체를 생성자에서 받고
  }
  findUserIndex(id) {
    // 데이터베이스의 값을 조회
    return this.db.findOne((user) => user.id === id);
  }
}

// 데이터 베이스 가정 User 
// 시퀄라이즈로...예./.?
const dataBase = {
  users: [
    { id: 1, name: "soon" },
    { id: 2, name: "soon2" }
  ],
  findOne(fn) {
    return this.users.find(fn);
  }
}



// express 대기 
const express = require("express");
const app = express();

//의존성 인스턴스
const userRepositroy = new UserRepositroy(dataBase);
const userService = new UserService(userRepositroy);

// userController
class UserController {
  constructor(userService) {
    this.userService = userService;
  }
  getUserIndex(req, res) {
    const { id } = req.params;
    const user = this.userService.getUserIndex(id);
    console.log(user);
    res.send(user);
  }
}
// 의존성 주입
const userController = new UserController(userService);


app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/users/:id", (req, res) => userController.getUserIndex(req, res));
// app.get("/users/:id", userController.getUserIndex); 위에랑 동일

app.listen(3000, () => {
  console.log("port 열림ㅋ");
})

