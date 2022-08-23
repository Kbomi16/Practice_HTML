# Practice_HTML

### #확장 프로그램
1. live server
2. auto rename tag
4. beautify

### #경로
__상대경로__
./ : 주변(생략가능)
../ : 상위 폴더

__절대경로__
http(https) : 원격
/(//)

### #원래 있던 css reset하기
https://www.jsdelivr.com/package/npm/reset-css
 ```
 <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/reset-css@5.0.1/reset.min.css">
```

### #Emmet 문법
```html
div>ul>li*4{&}

<div>
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
    </ul>
  </div>
```

### #태그 이름
<태그 __class="이름"__></태그> - 요소를 지칭하는 중복 가능한 이름<br/>
css에서 class는 .

<태그 __id="이름"__></태그> - 요소를 지칭하는 고유한 이름<br/>
css에서 id는 #


### #@import - 직렬
CSS문서 안에서 또 다른 CSS문서를 가져와 연결하는 방식
```
@import url("./box.css")
```
### #link - 병렬


### 🐻 material icon
```
<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
```

