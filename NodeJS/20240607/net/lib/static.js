const fs = require("fs");
const path = require("path")

// public 폴더의 파일들의 루트 경로를 지정
// public 폴더의 경로가 루트 경로

const rootName = "public";
// c/~/public
// ".." : 한단계 위로 울라간거
const rootDir = path.join(__dirname, "..", rootName)

//폴더 안의 내용을 찾는 함수
// c/~/public/css/style.css
// c/~/public/js/index.js

const result = {};
const find = (currentPath = rootDir) => {
  // 경로의 파일과 디렉터리 목록을 읽어오자
  // readdirSync : 동기적으로 파일과 디렉터리 목록을 가져오는 메서드 
  // 처음 호출 currentPath = c/~/public/
  // css 폴더 경로가 나오고 호출 currentPath = c/~/public/css
  // rootDir = public 경로
  // currentPath =  c/~/public/css
  const directory = fs.readdirSync(currentPath)
  //(currentPath) 있을경우 

  // ()안에 rootDir 이 있을경우 = c/~/public

  // c/~/public/css
  // c/~/public/js
  // directiory = [0 : "css", 1 : "js"] 배열안에서 반환

  // directiory 배열의 갯수만큼
  // index => 0, 1
  for (const index in directory) {
    // console.log(index);
    // 폴더들의 경로를 완성
    // c/~/public/css
    // 경로가 있어야 폴더나 파일을 가져올 수 있다.
    // currentPath : 찾을 루트 경로와 참을 폴더
    // 파일의 경로를 만들고 싶어
    // __dirname +"..+` ${directory[index]}` 으로 사용할 수 있지만 이 방법은 힘듬  // c/~/public../css

    // join : 문자열 반환 경로를 완성시켜서 하나의 면자을을 반환해준다.

    // 폴더
    // css // js
    // 0 : c/~/public/css 
    // 1 : c/~/public/js

    // c/~/public/css 
    // directory[0] === css
    // directory[1] === js
    // currentPath = c/~/public/css 

    //[home, mypage, style.css]
    // 0 : c/~/public/css/home
    // 1 : c/~/public/css/mypage
    // 2 : c/~/public/css/style.css


    const findPath = path.join(currentPath, directory[index]);
    // console.log(findPath);

    // 만약 폴더인지 파일인지 모른당.
    // c/~/public/css/css === 우리가 css 라는 폴더가 없기 때문에경로를 찾아갈 수가 없어
    // 오류가 팡팡팡!!
    const isFile = fs.statSync(findPath).isFile(); // 반환되는 값이 파일이면 true, 디렉터리 : false

    if (!isFile) {
      // 폴더 안의 폴더
      // 재귀적으로 탐색
      // c/~/public/css
      find(findPath)
      // 코드 중단
    } else {
      // 파일인 경우
      // 탐색하는 경로가 public 디렉터리인지 확인ㄴ
      const key = currentPath === rootDir ? "/" : currentPath.replaceAll(rootDir, "");
      // key 를 만드는 이유는 객체화 시킬거라서 key 값을 뽑는 것. 
      // js/indexjs
      // css/style.css
      // http 경로 생성
      // \\ 문자열이 역슬래시 \\ 로 들어오는데 css\\style.css => css/style.css

      // "\\css\\home\\index.css" =>  "/css/home/index.css" 
      const httpPath = path.join(key, directory[index]).replaceAll("\\", "/");
      // replaceAt === 직접 만들어서 사용해야한다.

      // console.log(httpPath);
      result[httpPath] = directory[index];
    }
  }
  console.log(result);
  return result;
}

module.exports = find(rootDir);
