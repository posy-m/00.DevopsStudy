//비밀번호 암호화까지 하는거임~!!!!!!!!!지금!!!! 
// 그다음은 암호화 -> 제이슨 웹토큰을 만들어서 로그인을 유지

const crypto = require("crypto");
const pw = "admin123";

// 해시화 : 알고리즘을 통해 데이터를 고정된 크기의 고유한 값으로 바꿔주는 행위. 16진수의 값으로 변환 고정된 크기의 문자열로 변경

// 알고리즙은 sha256알고리즘 사용 (블록체인에서 사용 중)
// sha256 : 데이터를 256비트의 고정 크기 값으로 변환해주는 알고리즘
// 원본 데이터의 길이에 상관이 없이 고정크기의 해시값으로 변경해준다.
// 64자리의 16진수로 표현

const hash = crypto.createHash("sha256");

// hash 암호화 알고리즘 만 정한
// update : 문자열을 해시화
const hashing = hash.update(pw);
console.log(hashing);

// hex 문자열로 변경
const hashString = hashing.digest("hex");

// 문자열을 16진수로 변경
console.log(hashString);

// 해시화하면 일정한 문자열이 계속 나오는데?
// salt 값을 사용해서 예측이 불가능한 데이터를 만들어 주면 된다.
// salt 값은 코드상에 잇으면 위험하다. 그래서 환경변수로 지정해줘야함
// .env
// env 유닉스 운영체제에서 사용하는 쉘 환경 변수
// const env = require("dotenv");

// salt 만들어 봅시다.
// 난수 생성 메서드 사용해서 salt값을 만들어보자. // 난수 : 시간이나 어떤 여러가지 값을 조합해서 랜덤값을 만들어내는것. (랜덤숫자, 난수값)
// 난수 : 랜덤한 값을 생성하는 것.
crypto.randomBytes(32, (err, result) => {
  // 32bit의 길이 랜덤한 byte가 생성
  if (err) {
    console.log(err);
  } else {
    //결과로는 16진수를 출력
    console.log(result.toString("hex"));
  }
})

// 이걸 salt로 만든다면?
// 이 문자열을 salt값으로 포함시켜서 문자열을 만들자.
// salt를 데이터베이스에 저장
// 모든 비밀번호가 salt

// salt값도 노출이 되기 힘들고.
// salt를 찾기위해 시도를 엄청할건데

// 해커를 좀 더 힘들게 하는 방법
// 키 스트레칭 기법
// 키 스트레칭 기법 해시함수를 여러번 반복시켜서 시간을 일부러 오래 걸리게 하는 기법
// 해킹을 시도할때 비밀번호를 대입해서 해킹을 시도하는 경우 암호화 작업을 일부러 오래 걸리게 만들어서 해킹을 어렵게 만드는게 목적
const createSalt = () => {
  return new Promise((res, resj) => {
    crypto.randomBytes(64, (err, result) => {
      res(result.toString("hex"))
    })
  })
}

// 어떻게 Promise 동작하는지 보여주는 방식
const createHash = (salt, password) => {
  return new Promise((res, rej) => {
    crypto.pbkdf2(
      password, // 해싱할 문자열
      salt, // salt 값
      165165, // 키스트레칭 반복 횟수
      64, // 해시값의 바이트
      "sha256", // 해시할 알고리즘
      (err, hash) => {
        if (err) rej(err);
        res(hash.toString("hex"));
      }
    )
  })
}

// const test = async () => {
//   const salt = await createSalt();
//   const hash = await createHash(salt, "admin123");
//   console.log(hash);
// }

// test();

// bcrypto

const express = require("express");
const mysql2 = require("mysql2/promise");
const app = express();
const path = require("path")

app.set("views", path.join(__dirname, "page"))
app.set("view engine", "ejs")
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const mysql = mysql2.createPool({
  user: "root",
  password: "alswl;0113#",
  database: "mypage",
  multipleStatements: true
})


// 테이블 초기화
const userInit = async () => {
  try {
    await mysql.query("SELECT * FROM users")
  } catch (err) {
    await mysql.query("CREATE TABLE users(id INT AUTO_INCREMENT PRIMARY KEY, uid VARCHAR(20), upw VARCHAR(128), salt VARCHAR(128))");
  }
}

userInit();

app.get("/join", (req, res) => {
  res.render("join")
})

app.get("/login", (req, res) => {
  res.render("login");
})

app.post("/join", async (req, res) => {
  const { uid, upw } = req.body;
  const salt = await createSalt();
  const hash = await createHash(salt, upw);
  await mysql.query("INSERT INTO users(uid,upw,salt)VALUES(?,?,?)", [uid, hash, salt]);
  res.redirect("/login");
})

// 반복 횟수와 salt 값
app.post("/login", async (req, res) => {
  const { uid, upw } = req.body;
  const [[result]] = await mysql.query("SELECT * FROM users WHERE uid = ?", [uid]);
  // result?.salt 키가 있으면 ture 없으면 false
  console.log(result);
  if (result?.salt) {
    const { salt } = result;
    const hash = await createHash(salt, upw);
    if (hash == result.upw) {
      res.send("로그인 됨!");
    } else {
      res.send("비밀번호 오류");
    }
  } else {
    res.send("유저 없음");
  }
})

app.listen(3000, () => {
  console.log("3000port 열림! 하이염");
})