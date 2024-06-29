// 유저에 관련된 데이터는 이파일에 정리!!

// 시퀄라이즈에 매핑할 유저 객체의 내용
// 객체의 형태가 정해져있다.
const Sequelize = require("sequelize");

// Sequelize.Model === class
// Sequelize.Model 상속 받아서 매핑할 객체를 생성해라

// User 클래스 생성
class User extends Sequelize.Model {
  // 초기화 함수
  // init 우리가 만든 init 함수
  // 시퀄라이즈 객체를 받을거임
  // _sequelizeobj는 idex.js에 있는 
  // const _sequelizeobj = new Sequelize(config.dev.database, config.dev.username, config.dev.password, config.dev) 이거임
  static init(_sequelizeobj) {
    // super 상속받은 부모의 생성자 호출 super()
    // super.init() 상속받은 부모의 init함수를 호출
    // Sequelize.Model.init() : 매개변수 2개
    // 첫번째 매개변수(객체) :  매핑할 테이블의 내용 entity 데이터의 내용
    // 두번째 매개변수 (객체): 매핑할 테이블의 설정( 이름 등등) 
    // super.init : 테이블이 없으면 만들고 있으면 매핑 (entitiy가 다르면 에러가 발생한다.)
    // orm을 사용하게 되면 테이블을 만들지 않아도 된다.
    return super.init({
      // 컬럼의 내용
      /*
      create table user ( id int auto_increment primary key, name varchar(20), age int, msg text, date DATE d Date.now()); */
      // name varchar(20)
      // 컬럼의 이름
      name: {
        // 컬럼의 속성 내용
        // varchar를 만들면 안됨. 시퀄라이즈가 만들어줌
        // 시퀄라이즈 타입
        // type : 시퀄라이즈 안에 존재
        type: Sequelize.STRING(20),
        unique: true // 중복안됨!
      },
      age: {
        // age int
        type: Sequelize.INTEGER
      },
      msg: {
        type: Sequelize.TEXT
      }

    }, {
      // 매핑할 테이블의 속성 내용
      // sequelize 키값으로 시퀄라이즈 객체를 추가
      // sequelize 키를 맞춰서 작성을 해줘야겠죠? 왜냐하면 객체니까!
      // 뒤에 있는 sequelize는 매개변수
      sequelize: _sequelizeobj,
      // 생성시간 속성을 추가 컬럼을 추가할지 말지
      // created_at 컬럼을 추가할지 말지
      // updated_at 컬럼을 추가하지 말지
      // timestamps 주면 시간을 우리가 따로 안줘도됨
      timestamps: true,
      // 컬럼으로 created_at, updated_at 두 컬럼을 추가해준다.

      //underscored : 표기법을 바꿔주는 속성 
      // 기본적으로 스네티크 표기법을 사용하는데
      // 스네이크 표기법을 카멜 표기법으로 변경 
      // true를 주면  스네이크표기법 => created_at
      underscored: false,
      modelName: "user", // 모델의 이름을 설정 join관계 조회시에
      tableName: "users", // 매핑할 테이블이 이름 없으면 이 잉름으로 테이블을 생성
      paranoid: false, // paranoid : 속성이 true면 deleted_at 을 만듬 // 컬럼의 값이 삭제되면 시간이 표기되고 삭제를 했지만 데이터는 남겨두고 싶을때, 하지만 조회가 안된다.
      charset: "utf8mb4",
      collate: "utf8mb4_general_ci"
    })
  }
  // associte 우리가 만든 함수명
  // 테이블의 관계성을 만들 함수
  // 테이블들 내용을 매개변수로 받고 그 중에서 어떤 테이블과 관계를 맺을지
  static associte(db) {
    // 1:1로 사용자와게시글이 테이블의 관계를 설정
    // hasMany : 테이블의 관계를 정의 한다. 1:n (통상적으로 많이 사용)
    // hasOne : 1:1의 관계를 정의할때 
    // users가 부모 테이블 될것.
    //soureceKey : foreignKey가 연결할 키 부모 테이블에서 제공할 키
    //foreignKey : 생성할 외래키 이름 외래키를 가질 테이블에 줄 컬럼명
    db.Users.hasMany(db.Posts, { foreignKey: "user_name", sourceKey: "name" })
  }

}

module.exports = User;