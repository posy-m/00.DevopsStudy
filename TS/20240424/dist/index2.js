class NoticeBoard {
    constructor(name, content) {
        this.name = name;
        this.content = content;
    }
    getName() {
        return this.name;
    }
    getContent() {
        return this.content;
    }
}
class NoticManager {
    constructor() {
        this.notic = [];
    }
    setCreateNotic(_notic) {
        this.notic.push(_notic);
    }
    getNotic(index) {
        return this.notic[index];
    }
}
const noticManager = new NoticManager();
const _headerTitle = document.querySelector("#title1");
const _headerTitle2 = document.querySelector("#content1");
let arr = [];
function handler() {
    const finder = document.querySelector("#content-header");
    let span1 = document.createElement("span");
    let span2 = document.createElement("span");
    let span3 = document.createElement("span");
    finder.append(span1, span2, span3);
    span1.classList.add("line");
    span1.classList.add("no");
    span2.classList.add("line");
    span2.classList.add("box");
    span3.classList.add("box");
    const notic01 = new NoticeBoard(_headerTitle.value, _headerTitle2.value);
    noticManager.setCreateNotic(notic01);
    span1.innerText = `${arr.length + 1}`;
    span2.innerText = noticManager.getNotic(arr.length).name;
    span3.innerText = noticManager.getNotic(arr.length).content;
    arr.push(arr.length);
}
