//우리가 만들어볼 게임은 업다운 게임
//숫자를 맞추는 게임

// 1. 플레이어가 있고 컴퓨터가 있어요.
// 2. 플레이어는 선택을 할 수 있고, 컴퓨터는 랜덤값.
// 3. 플레이어가 선택할 수 있는 제어문이 ex) 게임을 몇판할래? 이런거..
// 4. 게임의 종료 시점을 정한다.

let playerselect;
// 
//게임 시작하자마자 랜덤값을 뽑아놓고 시작.
//math.random(); 랜덤 값 뽑을때 
//parseInt : 정수로 변환
let comselect = parseInt(Math.random() * 99); // 0 ~ 1
console.log(comselect);

let count = 0; // 우리가 게임을 시도한 횟수

let max = 99; // 플레이어가 선택할 수 있는 최대 숫자 범위
let min = 0; // 플레이어가 선택할 수 있는 최소 숫자 범위

let text = ""; // 컴퓨터가 안내해 줄 문구

// prompt 입력값은 문자열
// parseInt   데이터 타입을 숫자로 변환한다.
let gamecount =parseInt(prompt ("게임 몇판할래?"));

while((playerselect !== comselect) && count < gamecount) {
  //정답의 내용 text와 입력의 설명 문구를 같이 작성
  //`${}` : 템플릿 리터럴
  //문자열과 변수를 같이 사용하는 경우
  //${} 작성하면 괄호안에 자바스크립트를 입력하겠다.
  playerselect = prompt(`${text} 숫자를 입력하세요 최소 : ${min} | ${max} | 남은 횟수 : ${gamecount - count}`);

  //문자열을 입력하게 되면
  //NaN 
  //isNaN(값)_함수
  //숫자가 아닌 값을 입력했는가?
  console.log(parseInt("sfefsefgs"))
  console.log(isNaN(playerselect));
  if(isNaN(playerselect)){
    text = "숫자를 입력 하세요";
    continue;
  }

  //최소와 최대 범위의 값을 입력했는지.
  if((min >= playerselect) || (max <= playerselect)) {
    text = "입력값을 최소 최대에 맞게 작성하세요";
    continue;
  }


  //게임 판수 증가
  count++;
  //게임의 로직 시작
  //오늘의 이슈는 타입
  //typeof

  // alert(typeof playerselect);
  // alert(typeof comselect);
  // alert(playerselect > comselect); 없어도 됨 이건...

  playerselect = parseInt(playerselect)  // parseInt 문자를 정수로 변환 !!!!!!!!!!!!!!!

  //문자열과 숫자열은 비교를 할 수 없다.



  if(playerselect > comselect){
    max = playerselect; 
    text = "다운";
  } else if (playerselect < comselect) {
    min = playerselect;
    text = "업";
  } else {
    alert(`${count}번 시도해서 정답을 맞췄어! 축하해`);
    break;
  }

  if(count >= gamecount) {
    alert(`님 게임 오버ㅋ 정답은 ${comselect}`);
    break;
  }
}