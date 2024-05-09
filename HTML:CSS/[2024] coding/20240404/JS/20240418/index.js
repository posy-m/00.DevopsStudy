const commentFrm = document.querySelector("#commentFrm")
const commentList = document.querySelector("#comment-list");
const state = [];

class Comment {
  constructor(content) {
    this.uid = "soon";
    this.content = content;
    //수정중인 게시글인지
    this.updated = false;
    this.now = new Date(); // 생성한 시간
  }

  getToday(text){
    const date = this.now;
    let m = date.getMonth() + 1;
    let d = date.getDate();

    //(m > 9 ? "" : "0") : 날짜를 두자리 문자로 표현사기 위해서 , 한자리 숫자에 앞에0을 붙여서 보여주려고 ex) 01 02
    // 2024 04 18
    return [
      date.getFullYear(),
      (m > 9 ? "" : "0") + m,
      (d > 9 ? "" : "0") + d,
    ].join(text) // text = / === "2024/04/18"
  }
}

const setTotalRecoed= () => {
  const span = document.querySelector("h4 > span");
  span.innerHTML = state.length;
}

function addState(value) {
  try {
    const instance = new Comment(value);
    state.push(instance);
    setTotalRecoed();
  }catch(e) {
    // e : 에러객체
    // message === 에러의 내용이 문자열
    alert(e.message);
  }
}

function createRow(index) {
  //{uid, content, updated, now}
  const item = state[index];
  const commentRow = document.createElement("ul");
  const commentId = document.createElement("li");
  const commentContent = getContentBox(item.updated, item.content);
  const commentDate = document.createElement("li");

  commentRow.classList.add("comment-row")
  commentRow.dataset.index = index;
  // <ul data-index = "1"></ul>

  commentId.classList.add("comment-id");
  commentId.innerHTML = item.uid;

  commentDate.classList.add("comment=date");
  commentDate.innerHTML = item.getToday("-"); //2024-04-28

  commentRow.append(commentId, commentContent, commentDate);
  return commentRow;
}

// //return 없고 있고
// const a = createRow(0); //undefined
// const b = createRow(0); //commentRow

// 화살표 함수에 중괄호가 없으면 return 합니다
//const getContentBox = (flag, content) => (return !flag ? "수정중이 아닐때" : "수정중일때"}; 
const getContentBox = (flag, content) => !flag ? createContentWrap(content) : createUpdateBox(content); //flase면 앞에거 true면 뒤에거

function createContentWrap(content) {
  const commentContent = document.createElement("li");
  const comment = document.createElement("span");
  const commentDelete = document.createElement("span");

  comment.classList.add("comment-update-btn");
  comment.innerHTML = content;

  commentDelete.classList.add("comment-delete-btn");
  commentDelete.innerHTML =  "❌";

  commentContent.classList.add("comment-content");
  commentContent.append(comment,commentDelete);
  return commentContent;
}

function drawing() {
  commentList.innerHTML = "";
  //[1, 2, 3, 4, 5] === (5 -1)
  // 마지막 요소의 인덱스를 만드는 방법은 배열의 길이에서 -1ㅎ나 값이 배열의 마지막 요소 인덱스
  // 4~0 으로 거꾸로 감
  for(let i = state.length -1; i >=0; i--) {
    //댓글 하나를 완성해서 변수에 할당해 놓고
    const row = createRow(i);
    commentList.append(row);
  }
}

// form submit 이벤트가 발생하면 
// 기본 이벤트 동작을 없애고 새로고침되는걸 방지하고
function submitHandler(e) {
  e.preventDefault();
  // 객체의 구조 분해 할당
  const {content} = e.target; // e.target 객체 안에는 content가 name으로 작성한 input
  const {value} = content; // input에 입력된 값

  addState(value);
  drawing();
}


function createUpdateBox(content) {
  const span = document.createElement("span");
  const commentUpdateInput = document.createElement("input");
  const commentDeleteBtn = document.createElement("span");

  commentUpdateInput.classList.add("comment-update-input");
  //onkeyup : 키를 눌렀다가 때면 발생하는 이벤트
  commentUpdateInput.onkeyup = function(e) {
      //엔터를 누르면 함수의 기능을 동작하게
      //keycode == 
      console.log(e.keyCode)
      if(e.keyCode !== 13) return;
      try {
        // dataeset === 호출하게 되면 요소안에 있는 data-키 {index : "0"}
        const {index} = e.target.parentNode.parentNode.parentNode.dataset;
        // e.target 수정 input
        const {value} = e.target;
        state[index].content = value;
        state[index].updated = !state[index].updated
        
        drawing();
      }catch(e) {
        alert(e.messange);
      }
  }
  commentUpdateInput.value = content;

  commentDeleteBtn.classList.add("comment-delete-btn");
  commentDeleteBtn.innerHTML = "❌";
  span.append(commentUpdateInput);
  //(span : "span 변수 안에 있는 값 ", commentDeleteBtn : commentDeleteBtn 변수 안에 있는 값);
  // const uid = "이순현";
  // const obj = {uid }
  return {span, commentDeleteBtn};
}

function clickHandler(e) {
  const contentNode = e.target.parentNode
  const {index} = contentNode.parentNode.dataset;
  if(e.target.className === "comment-update-btn"){
    state[index].updated = !state[index].updated;
    const content = e.target.innerHTML;
    const{span,commentDeleteBtn} = getContentBox(state[index].updated, content);
    contentNode.append(span, commentDeleteBtn);
  } else if(e.target.className === "comment-delete-btn"){
    //확인은 trun 취소는 flase
    const flag = confirm ("글 삭제?")
    if (!flag) return;

    state.splice(index, 1);
    setTotalRecoed();
    drawing();
  }
}

commentList.onclick = function (e) {
  clickHandler(e);
}

commentFrm.onsubmit = function(e) {
  submitHandler(e);
}