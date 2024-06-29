const Sequelize = require("sequelize");
const config = require("./config");
const Users = require("./users");
const Posts = require("./posts");
// Sequelize class 생성자
// Sequelize 객체 생성
// Sequelize 생성자 함수
// 매개변수를 순서대로 줘야한다.
// 데이터베이스 이름, 사용자 이름, 비밀번호, 전체 객체 내용 (정해져있는 순서! 바뀌면 안됩니당)


// 시퀄라이즈 객체 생성
// 매개변수 순서 맞춰서 작성 => 데이터베이스 이름, 사용자 이름, 비밀번호, 전체 객체 내용
const _sequelizeobj = new Sequelize(config.dev.database, config.dev.username, config.dev.password, config.dev)

const db = {};
db.sequelize = _sequelizeobj;
db.Users = Users;
db.Posts = Posts;

Users.init(_sequelizeobj);
Posts.init(_sequelizeobj);

Users.associte(db);
Posts.associte(db);

// 시퀄라이즈 연결
// mysql에 커넥션 요청을 보내고 
// 매칭까지

// sync 시퀄라이즈 연결 요청
// 반환하는 값이 promise
// 초기화할지?
// sync({ force: true }) : 테이블 전부 초기화 
// sync({ force: flase }) : 초기화 안함
_sequelizeobj.sync({ force: false }).then(async () => {
  //연결 성공 
  console.log("연결 성공 ");
  // User 테이블 매핑 객체
  // create : insert into user (name , age, msg) valuse("soon", 20, "하이")
  // create
  // Users.create({
  //   name: "soon",
  //   age: 20,
  //   msg: "하잉"
  // })

  //
  // await Posts.create({
  //   content: "32322433"
  // })
  // Posts.findOne
  // Posts.findAll
  // 여러개 조회
  // select * from Posts where id =1;
  // const datas = await Posts.findAll({ where: { content: 1 } });
  // const data = datas.reduce((acc, el) => { acc.push(el.dataValues); return acc }, [])
  // dataValues key를 파싱해서 사용하면 된다.
  // 서버측에서 확인하고 있어서
  // axios 요청 보내서 데이터를 응답 받으면 파싱이 되어 있을것.

  // const data = await Posts.findOne({ where: { id: 1 } });
  // console.log(data.dataValues);

  //CRUD 중에서 U
  // await Posts.update({
  //   content: "435"
  // }, { where: { id: 3 } })
  // 3 잘 처리 됐다.
  // // console.log(data.dataValues);

  // const data2 = await Posts.findOne({ where: { id: 3 } })
  // console.log(data2.dataValues);

  //CRUD 중에서 D
  // /  await Posts.destroy({ where: { id: 1 } });





}).catch((err) => {
  // 실패
  console.log("연결 실패여...", err);
})

// 테이블간에 매핑할 객체를 만들어줘야한다.
// 자바스크립트로 매핑할 내용을 객체로 작성해줘야한다. 
// 사용자 객체를 만들어 봅시다.

// module.exports = { sequelize: _sequelizeobj, Users, Posts };
module.exports = db

// 게시글을 추가 삭제 수정 조히
// 사용자가 글을 쓸 수 있게 설계
// 게시글이 있다는 것은 로그인이 된다는 가정하에 사용자가 있다는 얘기
// 사용자가 없으면 게시글을 추가할 수 없다. 제약조건 외래키
// 조회할때는 사용자의 글이 맞는지 조회 join