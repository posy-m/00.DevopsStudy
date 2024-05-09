const input = document.querySelector(".uid");
const input2 = document.querySelector(".upw");
const inputBtn = document.querySelector(".uid-btn");
console.log(input.value);
inputBtn.onclick = function (e) {
    const _value = input.value;
    const _value2 = input2.value;
    const userDate = {
        uid: _value,
        upw: _value2,
        "name": "안녕"
    };
    userDate["name"];
    console.log(userDate === null || userDate === void 0 ? void 0 : userDate.city);
    console.log(userDate);
};
