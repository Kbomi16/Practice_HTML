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
### #가상 요소 선택자
1️⃣before<br/>
선택자 요소의 내부 앞에 내용을 삽입.
```
<div class="box">content!</div>

.box::before {
	content : "앞!"
}  //앞! Content! 출력됨.
```

2️⃣after<br/>
선택자 요소의 내부 뒤에 내용을 삽입.
```
<div class="box">content!</div>

.box::after {
	content : "뒤!"
}  //Content! 뒤! 출력됨.
```

### #속성 선택자
1️⃣attr __[ABC]__<br/>
속성ABC을 포함한 요소 선택

2️⃣attr=value __[ABC="XYZ"]__<br/>
속성ABC를 포함하고 값이 XYZ인 요소 선택

### #CSS 단위
- px : 픽셀
- % : 상대적 백분율
- em : 요소의 글꼴 크기
- rem : 루트 요소의 글꼴 크기
- vw : 뷰포트 가로 너비의 백분율
- vh : 뷰포트 세로 너비의 백분율


### #border : 선-두께(border-width) 선(border-style)-종류 선-색상(border-color);

### #box-sizing
- content-box : 요소의 내용으로 크기 계산
- border-box : 요소의 내용 + padding + border로 크기 계산

### #overflow
요소의 크기 이상으로 내용이 넘쳤을 때, 보여짐을 제어하는 단축 속성
- visible : 넘친 내용을 그대로 보여줌.(기본값)
- hidden : 넘친 내용을 잘라냄.
- scroll : 넘친 내용을 잘라냄. 스크롤바 생성
- auto : 넘친 내용이 있는 경우에만 자르고 스크롤바 생성

### #display
요소의 화면 출력 특성
- block : 상자 요소(span은 인라인이지만 block을 통해 너비와 높이를 줄 수 있음.)
- inline : 글자 요소
- inline-block : 글자 + 상자 요소
- flex : 1차원 레이아웃
- grid : 2차원  레이아웃
- none : 보여짐 특성 없음. 화면에서 사라짐
- 기타 : table, table-row, table-cell 등

### #opacity
요소 투명도
- 1 : 불투명(기본값)
- 0~1 : 0부터 1사이의 소수점 숫자

### #글꼴
1️⃣font-style
글자의 기울기
- normal : 기울기 없음
- italic : 이텔릭체
- oblique : 기울어진 글자

2️⃣font-weight
글자의 두께
- normal, 400 : 기본 두께
- bold, 700 : 두껍게
- 100~900
- bolder : 상위 요소보다 더 두껍게
- lighter : 상위 요소보다 더 얇게

3️⃣font-size
글자의 크기
- 16px(r기본값)
- 단위 : px, em, rem 등

4️⃣line-height
한 줄의 높이
- 숫자 : 요소의 글꼴 크기의 배수로 지정
- 단위 : px, em, rem 등

5️⃣font-family : 글꼴1, 글꼴2 .... 글꼴계열;
__띄어쓰기 등 특수문자가 포함된 글꼴은 큰 따옴표로 묶기__

### #문자
1️⃣text-align
텍스트 수평 정렬

2️⃣text-decoration
- none : 없음
- underline : 밑줄
- overline : 윗줄
- line-through : 중앙 선

3️⃣text-indent
문자 첫 줄의 들여쓰기
- 0 : 들여쓰기 없음(기본값)

### #배경
1️⃣background-color
- transparent : 투명함
- 색상 : 지정 가능한 색상

2️⃣background-image
- none : 이미지 없음
- url("경로")

3️⃣background-repeat
- repeat : 이미지를 수직, 수평 반복
- repeat-x : 수평 반복
- repeat-y : 수직 반복
- no-repeat : 반복 없음

4️⃣background-position
- 0%, 0%
- 방향 : top, bottom, left, right, center
- 단위 : x, y축 px, em, rem

5️⃣background-size
- auto : 이미지의 실제 크기
- cover : 비율유지, 요소의 더 넓은 너비에 맞춤
- contain : 비율유지, 요소의 더 짧은 너비에 맞춤

6️⃣background-attachment
- scroll : 이미지가 요소를 따라서 같이 스크롤
- fixed : 이미지가 뷰포트에 고정, 스크롤X

