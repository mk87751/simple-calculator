let btns = document.querySelectorAll('button');
let input = document.querySelector('#input');

//airthmetic operation
let arr = [];
let result;
const numClickHandler = val => {
  input.value += val;
  if (arr.length == 1 || arr.length == 3) arr.push(Number(arr.pop() + val));
  else arr.push(Number(val));
  if (arr.length == 3) {
    let second = arr[2];
    let oper = arr[1];
    let first = arr[0];
    if (oper == '+') result = Number(first) + Number(second);
    else if (oper == '-') result = Number(first) - Number(second);
    else if (oper == 'x') result = Number(first) * Number(second);
    else if (oper == '/') result = Number(first) / Number(second);
    // arr.push(result.textContent);
  }
};

//operand click handler
function signClickHandler(val) {
  if (arr.length == 3) {
    arr = [];
    arr.push(result);
  }
  arr.push(val);
  input.value += ` ${val} `;
}

//all clear
const allClearClickHandler = () => {
  input.value = '';
  result = 0;
  arr = [];
};

//displaying the result
function ansClickHandler() {
  input.value = result;
  arr = [];
  result = 0;
}

//dot click operation
function dotClickHandler() {
  if (arr.length == 1 || arr.length == 3) {
    arr.push(arr.pop() + '.');
    console.log(arr[arr.length - 1], arr);
    input.value += `.`;
  }
  if (arr.length == 2 || arr.length == 0) {
    arr.push('.');
    input.value += `0.`;
  }
}
