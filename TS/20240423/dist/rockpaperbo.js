let computer = prompt("computer의 값");
let user = prompt("user의 값");
if (user === computer) {
    alert("비김");
}
else if (user !== computer) {
    if (user === "보" && computer === "묵") {
        alert("유저 승리");
    }
    else if (user === "가위" && computer === "보") {
        alert("유저 승리");
    }
    else if (user === "바위" && computer === "가위") {
        alert("유저 승리");
    }
    else {
        alert("컴퓨터 승리");
    }
}
