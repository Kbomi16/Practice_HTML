# CSS 정리

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

### #배치
✔️ position<br/>
요소의 위치 지정기준
- static : 기준 없음
- relative : 요소 자신을 기준
- absolute : 위치 상 부모 요소를 기준
- fixed : 뷰포트를 기준
✏️position 속성 값으로 absolute, fixed가 지정된 요소는 display 속성이 block으로 바뀜.

✔️ z-index<br/>
요소의 쌓임 정도를 지정
- auto : 부모 요소와 동일한 쌓임 정도
- 숫자가 높을 수록 위에 쌓임

### #플렉스(정렬) : 1차원 레이아웃
✔️ display<br/>
Flex Container의 화면 출력 특성
- flex : 블록 요소와 같이 Flex Container 정의
- inline-flex : 인라인 요소와 같이 Flex Container 정의

✔️ flex-direction<br/>
주 축을 설정
- row : 행 축(좌 => 우) 수평
- row-reverse : 행 축(우 => 좌) 수평
- column : 열 축(위 => 아래) 수직
- column-reverse : 열 축(아래 => 위) 수직

✔️ flex-wrap<br/>
Flex Items 묶음(줄 바꿈) 여부
- nowrap : 묶음(줄 바꿈) 없음
- wrap : 여러 줄로 묶음

✔️ justify-content<br/>
주 축의 정렬 방법(수평 정렬)
- flex-start : Flex Items를 시작점으로 정렬
- flex-end : Flex Items를 끝점으로 정렬
- flex-center : Flex Items를 가운데 정렬

✔️ align-content<br/>
교차 축의 __여러 줄__ 정렬 방법
- stretch : Flex Items를 시작점으로 정렬
- flex-start : Flex Items를 시작점으로 정렬
- flex-end : Flex Items를 끝점으로 정렬
- flex-center : Flex Items를 가운데 정렬

✔️ align-items<br/>
교차 축의 한 줄 정렬 방법
- stretch : Flex Items를 교차축으로 늘림
- flex-start : Flex Items를 각 줄의 시작점으로 정렬
- flex-end : Flex Items를 각 줄의 끝점으로 정렬
- flex-center : Flex Items를 각 줄의 가운데 정렬

### #플렉스 Items
✔️ order<br/>
Flex Item 순서
- 0 : 숫자 없음
- 숫자가 작을 수록 먼저

✔️ flex-grow<br/>
Flex Item의 증가 너비 비율
- 0 : 증가 비율 없음
- 숫자 : 증가 비율

✔️ flex-shrink<br/>
Flex Item의 감소 너비 비율
- 1 : Flex Container 너비에 따라 감소 비율 적용
- 숫자 : 감소 비율

✔️ flex-basis<br/>
Flex Item의 공간 배분 전 기본 너비
- auto : 요소의 Content 너비

### #전환
transition : 속석명 지속시간 타이밍함수 대기시간;<br/>
요소의 전환(시작과 끝) 효과를 지정하는 단축속성

✔️ transition-property<br/>
전환 효과를 사용할 속성 이름 지정
- all : 모든 속성에 적용
- 속성이름 : 전환 효과를 사용할 속성 이름 명시

✔️ transition-duration<br/>
전환 효과의 지속시간 지정
- 0s : 전환 효과 없음
- 시간 : 지속시작 지정

✔️ transition-timing-fuction<br/>
전환 효과의 타이밍 함수 지정
- ease : 느빠느
- linear : 일정
- ease-in : 느빠
- ease-out : 빠느
- ease-in-out : 느빠느
-steps(n) : n번 분활된 애니메이션

✏️ https://easings.net/ko<br/>
✏️ https://developer.mozilla.org/en-US/docs/Web/CSS/easing-function<br/>
✏️ https://greensock.com/docs/v2/Easing<br/>


✔️ transition-delay<br/>
전환 효과가 몇 초 뒤에 시작할지 대기시간 지정
- 0s : 전환 효과 없음
- 시간 : 대기시작 지정

### #변환
✔️ perspective<br/>
하위 요소를 관찰하는 원근 거리를 지정

✔️ backface-visibility<br/>
3D 변환으로 회전된 요소의 뒷면 숨김 여부
- visible : 뒷면 보임
- hidden : 뒷면 숨김


