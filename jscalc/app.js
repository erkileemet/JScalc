// Input values
const first = document.querySelector("#first");
const second = document.querySelector("#second");
const btnplus = document.querySelector("#plus");
const btnminus = document.querySelector("#minus");
const btnmul = document.querySelector("#multiply");
const btndev = document.querySelector("#devide");
const answer = document.querySelector("#answer");
// Calc functions
function plus() {
    answer.innerText = parseInt(first.value) + parseInt(second.value);
}

function minus() {
    answer.innerText = parseInt(first.value) - parseInt(second.value);
}

function multiply() {
    answer.innerText = parseInt(first.value) * parseInt(second.value);
}

function devide() {
    answer.innerText = parseInt(first.value) / parseInt(second.value);
}
//Output things
btnplus.addEventListener("click", plus);
btnminus.addEventListener("click", minus);
btnmul.addEventListener("click", multiply);
btndev.addEventListener("click", devide);
