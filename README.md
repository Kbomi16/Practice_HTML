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

### #클래스 선택자
1️⃣일치 선택자, 복합<br/>
선택자를 동신에 만족하는 요소 선택
```
<span class="orange"></span>

span.orange {
	color:red;
}
```

2️⃣자식 선택자, 복합<br/>
선택자의 자식 요소 선택
```
<ul>
	<li class="orange"></li>
</ul>

ul>.orange{
	color:red;
}
```

3️⃣하위(후손) 선택자, 복합<br/>
선택자의 하위 요소 선택. '띄어쓰기'가 기호임.
```
<div>
	<ul>
		<li class="orange"></li>
	</ul>	
</div>

div .orange{
	color:red;
}
```

4️⃣인접 형제 선택자, 복합<br/>
선택자의 다음 형제 요소 중 하나 선택
```
<ul>
	<li>딸기</li>
	<li class="orange"></li>
	<li>딸기</li>  //이 문장이 출력됨.
	<li>딸기</li>
</ul>

.orange+li {
	color:red;
}
```

5️⃣일반 형제 선택자, 복합<br/>
선택자의 다음 형제 요소 모두 선택

```
<ul>
	<li>딸기</li>
	<li class="orange"></li>
	<li>딸기</li>  //이 문장이 출력됨.
	<li>딸기</li>  //이 문장이 출력됨.
</ul>

.orange~li {
	color:red;
}
```

### #가상클래스 선택자
1️⃣hover<br/>
선택자 요소에 마우스 커서가 올라가 있는 동안 선택

2️⃣active<br/>
선택자 요소에 마우스를 클릭하고 있는 동안 선택

3️⃣focus<br/>
선택자 요소가 포커스되면 선택
```
input:focus{
	background-color:orange //input칸을 선택하면 배경이 오렌지색으로 바뀜.
}
```

4️⃣first child<br/>
선택자가 형제 요소 중 첫째라면 선택
```
<div class="fruits">
	<span>딸기</span>  //이 문장만 출력됨.
	<span>사과</span>
	<span>망고</span>
</div>

.fruits span:first-child{
	color:red;
}
```

5️⃣last child<br/>
선택자가 형제 요소 중 막내라면 선택
```
<div class="fruits">
	<span>딸기</span>  
	<span>사과</span>
	<h3>망고</h3>  //이 문장만 출력됨.
</div>

.fruits h3:last-child{
	color:red;
}
```

6️⃣nth child<br/>
선택자가 형제 요소 중 n번째라면 선택
```
<div class="fruits">
	<span>딸기</span>  
	<span>사과</span>  //이 문장만 출력됨.
	<h3>망고</h3>  
</div>

.fruits *:nth-child(2){
	color:red;
}
```

```
<div class="fruits">
	<span>딸기</span>  
	<span>사과</span>  //이 문장만 출력됨.
	<h3>망고</h3> 
	<h3>사과</h3>  //이 문장만 출력됨.

</div>

.fruits *:nth-child(2n){  //n은 0부터 시작(짝수번째만 선택)
	color:red;
}
```
- 2n : n은 0부터 시작(짝수번째만 선택)
- 2n+1 : n은 0부터 시작(홀수번째만 선택)

7️⃣not 부정선택자<br/>
선택자가 아닌 다른 요소 선택
```
<div class="fruits">
	<span>딸기</span>  
	<span>사과</span>  
	<h3>망고</h3>  //이 문장만 출력됨.
	<h3>사과</h3>  //이 문장만 출력됨.

</div>

.fruits *:not(span){  
	color:red;
}
```

