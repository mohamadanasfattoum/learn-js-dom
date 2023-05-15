// let myIdElement = document.getElementById('my-div');
// let myTagElements = document.getElementsByTagName('p');
// let myClssElement = document.getElementsByClassName('my-span')
// // let myQueryElement = document.querySelector('.special');
// let myQueryElement = document.querySelector('#my-div');
// let myQueryAllElement = document.querySelectorAll('.my-span');




// console.log(myIdElement);
// console.log(myTagElements[1]);
// // myTagElements[1].innerHTML = "test";
// console.log(myClssElement[1]);
// console.log(myQueryElement);
// console.log(myQueryAllElement);

// console.log(document.title);
// console.log(document.body);
// // console.log(document.forms[0]);
// // console.log(document.forms[0].one);
// console.log(document.forms[0].one.value);
// // console.log(document.links[1]);
// console.log(document.links[1].href);
// ---------- End learn dom-js 1

// ---------- learn js-dom 2
let myElement = document.querySelector('.js')



console.log(myElement.innerHTML)
console.log(myElement.textContent)
myElement.innerHTML = 'Text From <span>Main.js</span> File';
myElement.textContent = 'Text From <span>Main.js</span> File';


document.images[0].src = 'https://google.com';
document.images[0].alt = "alternate";
document.images[0].title = "Picture";
document.images[0].id = 'id';
document.images[0].className = 'img';

let myLink = document.querySelector('.link');

console.log(myLink.getAttribute('class'))
console.log(myLink.getAttribute('herf'))


// myLink.getAttribute('class')
// myLink.getAttribute('herf')

myLink.setAttribute('herf', "https://twitter.com");
myLink.setAttribute('title','twitter');


// ----------- End learn js-dom