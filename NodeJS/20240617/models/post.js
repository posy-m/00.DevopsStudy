// 우리가 만든 모듈을 가져온거임
const mysql = require("./config")

// 글 조회
// 글 작성
// 글 수정 
// 글 삭제
// 사용하기 편한 메서드 형태로 구성
// async는 함수이고 promise를 반환
const posts = {
  initTable: async () => {
    try {
      // 테이블이 존재하는지 조회를 하고
      const result = await mysql.query("select * from posts")
      console.log(result);
    } catch (error) {
      // 에러가 발생하면 테이블이 없당. 
      await mysql.query("CREATE TABLE posts(id INT AUTO_INCREMENT PRIMARY KEY, title VARCHAR(20), content VARCHAR(100))");
    }
  },

  // 글의 전체 내용을 조회
  getViewPostAll: async () => {
    try {
      // 배열의 구조분홰 할당은 순서대로
      // 배열의 첫번째 내용만 할당 데이터의 구분
      const [result] = await mysql.query("SELECT * FROM posts");
      return result;
    } catch (error) {
      console.log("err : models select post table");
    }
  },

  // 선택 글 조회
  getSelectIndexPost: async (id) => {
    try {
      //[[{}], []]
      //[{}.{}]
      // {}
      //{id : {a : b}}
      // {id: {a,b}}
      const [[result]] = await mysql.query("SELECT * FROM posts WHERE id = ?", [id]);
      console.log(result);
      return result
    } catch (error) {
      console.log("err models : select select index post table");
    }
  },

  // 글 추가 메서드
  setPostContent: async (title, content) => {
    try {
      await mysql.query("INSERT INTO posts(title, content)VALUES(?,?)", [title, content])
      console.log();
    } catch (error) {
      console.log("err : models INSERT post table");
    }
  }
}

posts.initTable();
// posts.setPostContent("제목1", "컨텐츠1");

//글 조회
posts.getSelectIndexPost(2);
// 모자란 orm을 표현 조금.
// 객체와 데이터 페이스 매핑
module.exports = posts;