let myName = "HEY!!";
let email = 'kimbomi2172@naver.com';
let hello = `HEllo ${123}?!`;

console.log(myName);
console.log(email);
console.log(hello);

let user = {
  name:'hi',
  age: 85
};

console.log(user);
console.log(user.age);
console.log(user.name);

let boxEl = document.querySelector('.box');

console.log(boxEl);

boxEl.addEventListener('click', function () {
  console.log('click~');
  boxEl.classList.add('active');
  console.log(
    boxEl.classList.contains('active')
  );
  boxEl.classList.remove('active');
  console.log(
    boxEl.classList.contains('active')
  );
});