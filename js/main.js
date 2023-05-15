let myIdElement = document.getElementById('my-div');
let myTagElements = document.getElementsByTagName('p');
let myClssElement = document.getElementsByClassName('my-span')
// let myQueryElement = document.querySelector('.special');
let myQueryElement = document.querySelector('#my-div');
let myQueryAllElement = document.querySelectorAll('.my-span');




console.log(myIdElement);
console.log(myTagElements[1]);
// myTagElements[1].innerHTML = "test";
console.log(myClssElement[1]);
console.log(myQueryElement);
console.log(myQueryAllElement);

console.log(document.title);
console.log(document.body);
// console.log(document.forms[0]);
// console.log(document.forms[0].one);
console.log(document.forms[0].one.value);
// console.log(document.links[1]);
console.log(document.links[1].href);