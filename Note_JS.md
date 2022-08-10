### #변수
- let : 값 재할당 가능
- const : 값 재할당 불가
- var

### #예약어
특별한 의미를 가지고 있어 변수나 함수 이름 등으로 사용할 수 없는 단어

### #함수
특정 동작을 수행하는 일부 코드의 집합
- function

✔️ 기명함수
```js
fuction hello() {
	console.log('Hello');
}
```
✔️ 익명함수
```js
let world = fuction() {
	console.log('World');
}
```
### #메소드 체이닝
- split : 문자를 인수 기준으로 쪼개서 배열로 반환
- reverse : 배열 뒤집기
- join : 배열을 인수 기준으로 문자로 병합해 반환
```js
const a = 'Hello~';
const b = a.split('').reverse().join('');  //메소드 체이닝

console.log(a);  //Hello~
console.log(b);  //~olleH~
```
