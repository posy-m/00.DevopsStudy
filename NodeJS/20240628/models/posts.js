const Sequelize = require("sequelize");

class Post extends Sequelize.Model {
  static init(sequelize) {
    return super.init({
      content: {
        type: Sequelize.STRING(100),
        allowNull: false, // NULL 이어도 되냐? 안되냐? null을 허용할건지 말건지
        // primaryKey: true, // 기본키 id가 기본으로 생긴다. // primaryKey가 속성에 없으면 기본으로 생긴다.
      }
    }, {
      sequelize,
      timestamps: true,
      modelName: "Post",
      // modelName: "Post", // 원래 대문자로 이렇게 해주기!!
      tableName: "posts",
      charset: "utf8mb4",
      collate: "utf8mb4_general_ci"
    })
  }

  static associte(db) {
    // 자식 테이블
    // belongsTo : 자식 테이블이 부모의 테이블에서 외래키를 foreignKey를 사용을 하고
    // target : 참조할 부모의 테이블의 키
    // users.js랑 같이 봐야함
    db.Posts.belongsTo(db.Users, { foreignKey: "user_name", target: "name" });
  }

  // static associte(db) {
  //   // 자식 테이블에 부모테이블 내용을 받을거임
  //   // belongsTo 부모테이블에서 받았다 _ usertabl에서 받았다
  //   db.Posts.belongsTo(db.Users, { foreignkey: "user_name", target: "name" })
  // }
}

module.exports = Post;