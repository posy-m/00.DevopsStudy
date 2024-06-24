class Popup {
  popup = null;
  text = "";
  constructor(text) {
    this.text = text;
    this.init()
  }

  //팝업을 열수 있는 메서드
  init() {
    const bg = document.createElement("div");
    const popupWrap = document.createElement("div")
    const popupBody = document.createElement("div");
    const popupHeader = document.createElement("div")
    const popupBtnLine = document.createElement("div")
    const popupContent = document.createElement("p");
    const popupBtn01 = document.createElement("button")
    const popupBtn02 = document.createElement("button")


    bg.append(popupWrap);
    popupWrap.append(popupHeader, popupBody, popupBtnLine)
    popupBody.append(popupContent);
    popupBtnLine.append(popupBtn01, popupBtn02);
    bg.classList.add("popup-background");
    popupBody.classList.add("popup-body")
    popupHeader.classList.add("popup-header")
    popupBtnLine.classList.add("popup-btn-line");
    popupWrap.classList.add("popup-wrap")
    popupContent.innerHTML = this.text;
    popupBtn01.innerHTML = "확인"
    popupBtn02.innerHTML = "취소"
    document.body.append(bg);
    this.popup = bg;
  }

  open() {
    if (!this.popup.classList.contains("is-active"))
      this.popup.classList.add("is-active");
  }
  addEventListener(handeler, handeler2) {
    // 요소들을 배열로 반환
    const [btn01, btn02] = this.popup.querySelectorAll(".popup-btn-line >button")
    // 이벤트 한번 호출하고 한번만 사용할 수 있도록 
    // {once : true} 는 이벤트가 쌓이지 않고 이걸 쓰면 한번 사용한 후 해제할 수 있도록 사용
    // addEventListener는 이벤트가 계속 쌓임ㄴ
    btn01.onclick = () => { handeler(); this.close() }
    btn02.onclick = () => { handeler2(); this.close() }
    //  쌓인 이벤트를 제거
  }


  close = () => {
    if (this.popup.classList.contains("is-active"))
      this.popup.classList.remove("is-active");
  }
}