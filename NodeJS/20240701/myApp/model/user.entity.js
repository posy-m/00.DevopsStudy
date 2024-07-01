const { Model, DataTypes } = require("sequelize");

// class User extends Sequelize.Model {

// }
// 구조분해할당으로 따로 뺄수 있다는걸 보여주심 
class User extends Model {
  static init(sequelize) {
    return super.init({
      name: {
        type: DataTypes.STRING(20),
        allowNull: false,
        unique: true
      },
      age: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      mag: {
        type: DataTypes.TEXT
      }
    }, {
      // 테이블의 설정값
      sequelize,
      timestamps: true,
      modelName: "user",
      tableName: "users",
      charset: "utf8mb4",
      collate: "utf8mb4_general_ci"
    })
  }
}

module.exports = User;