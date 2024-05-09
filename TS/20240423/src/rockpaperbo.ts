
let computer : string = prompt ("computer의 값")
let user : string =  prompt ("user의 값")

if (user === computer) {
  alert("비김")
} else if (user !==computer) {
  if(user === "보" && computer === "묵") {
  alert("유저 승리")
} else if (user === "가위" && computer === "보") {
  alert("유저 승리")
}else if (user === "바위" && computer === "가위") {
  alert("유저 승리")
}else {
  alert("컴퓨터 승리")
}}


//가위바위보가 아닌 다른 걸 냈을때
// let player : string = prompt("플레이어 값")

// if (player === "가위"|| player == "바위" || player == "보"){
//   let com : string = prompt("컴퓨터의 값")
//   if (com === "가위"|| com == "바위" || com == "보") {
//     if (player === com) {
//   alert("비김")
// } else if (player !==com) {
//   if(player === "보" && com === "바위") {
//   alert("유저 승리")
// } else if (player === "가위" && com === "보") {
//   alert("유저 승리")
// }else if (player === "바위" && com === "가위") {
//   alert("유저 승리")
// }else {
//   alert("컴퓨터 승리")
// }}
//   } else {alert("가위, 바위, 보 중 다시 적어주세요")}
// }  else {alert("가위, 바위, 보 중 다시 적어주세요")}


