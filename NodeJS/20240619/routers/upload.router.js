const router = require("express").Router();
const { upload } = require("../lib/mid/imgUpload")

// single : 하나의 파일을 올리겠다. 
// array : 여러개의 파일을 올리겠다.
// "upload" : form에서 name으로 키를 준 키값
// formData : 객체의 키를 넣어주면 된다.
// 파일을 가지고 있는 input의 name
router.post("/", upload.single("upload"), (req, res) => {
  console.log(req.body);
  console.log(req.file);
  res.send("파일 업로드 완료")
  //send : express에서 제공하는 모듈 _ 하나보내고 응답 종료

})

module.exports = router;