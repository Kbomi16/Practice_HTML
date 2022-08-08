# Class 정리

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
