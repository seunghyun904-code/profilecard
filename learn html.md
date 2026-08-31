# HTML 코드 설명서 (index.html)

이 문서는 프로필 카드의 **뼈대(구조)**를 담당하는 HTML 코드가 어떻게 구성되어 있는지 초보자도 쉽게 이해할 수 있도록 설명합니다.

---

## 1. 전체 구조 (`<!DOCTYPE html>` ~ `</html>`)

```html
<!DOCTYPE html>
<html lang="ko">
<head> ... </head>
<body> ... </body>
</html>
```

- **`<!DOCTYPE html>`**: 웹 브라우저에게 "이 문서는 최신 HTML5 버전으로 작성되었습니다"라고 알려주는 선언입니다.
- **`<html lang="ko">`**: 웹 페이지 전체를 감싸는 태그입니다. `lang="ko"`는 페이지의 주요 언어가 **한국어**임을 지정합니다.

---

## 2. 문서 정보 (`<head>` 영역)

`<head>` 태그 안에는 화면에 직접 보이지는 않지만, 웹페이지 설정 및 외부에 있는 파일(스타일시트, 아이콘 등)을 불러오는 코드들이 들어갑니다.

```html
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>노승현 프로필</title>
<link rel="stylesheet" href="style.css">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/.../all.min.css">
```

- **`<meta charset="UTF-8">`**: 한글이나 특수문자가 깨지지 않고 정상적으로 표시되도록 인코딩 방식을 설정합니다.
- **`<meta name="viewport" ...>`**: 스마트폰, 태블릿, PC 등 다양한 화면 크기(반응형)에 맞게 화면 폭과 확대 비율을 조정합니다.
- **`<title>노승현 프로필</title>`**: 브라우저 상단 탭에 표시되는 페이지 제목입니다.
- **`<link rel="stylesheet" href="style.css">`**: 우리가 만든 **CSS 디자인 파일(style.css)**을 이 HTML 문서에 연결합니다.
- **`<link rel="stylesheet" href="https://..."`**: GitHub, Instagram 등의 로고 아이콘을 쉽게 사용할 수 있도록 도와주는 외부 라이브러리(**FontAwesome**)를 불러옵니다.

---

## 3. 화면에 보이는 내용 (`<body>` 영역)

`<body>` 태그 내부의 내용들이 실제로 웹 브라우저 화면에 출력됩니다.

### (1) 프로필 카드 상자 (`.profile-card`)
```html
<div class="profile-card">
  <div class="card-header"></div>
  <div class="card-body"> ... </div>
</div>
```
- **`<div>`**: 여러 요소를 하나의 상자(그룹)로 묶어주는 태그입니다.
- **`class="profile-card"`**: CSS에서 이 상자만 선택하여 스타일을 적용할 수 있도록 이름을 붙여둔 것입니다.
- **`card-header`**: 카드 상단의 알록달록한 배경 영역입니다.
- **`card-body`**: 프로필 사진, 이름, 소개글, 버튼 등이 들어가는 메인 컨텐츠 영역입니다.

---

### (2) 프로필 사진 영역
```html
<div class="profile-img-container">
  <img src="profile.jpg" alt="노승현 프로필 사진" class="profile-img">
</div>
```
- **`<img>`**: 이미지를 화면에 보여주는 태그입니다.
- **`src="profile.jpg"`**: 표시할 이미지 파일의 경로입니다.
- **`alt="..."`**: 이미지가 불러와지지 않았을 때 대신 보여줄 대체 텍스트입니다. (시각장애인용 접근성 향상에도 쓰입니다.)

---

### (3) 이름 및 한 줄 소개
```html
<h2 class="name">노승현</h2>
<p class="bio">저는 행복한 사람입니다.</p>
```
- **`<h2>`**: 주요 제목을 나타내는 태그입니다. (1~6단계 중 2번째로 큰 제목)
- **`<p>`**: 일반적인 텍스트 단락(Paragraph)을 나타내는 태그입니다.

---

### (4) SNS 링크 목록 (`.social-links`)
```html
<div class="social-links">
  <a href="https://github.com" target="_blank" aria-label="GitHub" class="social-btn github">
    <i class="fab fa-github"></i>
  </a>
  ...
</div>
```
- **`<a>`**: 클릭하면 지정한 웹주소로 이동시켜주는 하이퍼링크 태그입니다.
- **`href="https://..."`**: 이동할 웹 사이트 주소입니다.
- **`target="_blank"`**: 링크 클릭 시 새 탭에서 페이지를 열도록 설정합니다.
- **`<i>`**: FontAwesome 아이콘 라이브러리를 통해 SNS 모양 아이콘을 출력하는 태그입니다.

---

### (5) 좋아요 버튼
```html
<button id="likeBtn" class="like-btn">
  <i class="fa-regular fa-heart"></i> <span id="likeCount">0</span>
</button>
```
- **`<button>`**: 클릭할 수 있는 버튼을 만듭니다.
- **`id="likeBtn"`**: JavaScript에서 이 버튼을 클릭했을 때 이벤트를 동작시키기 위한 고유한 이름(ID)입니다.
- **`<span id="likeCount">0</span>`**: 좋아요 개수 숫자를 감싸는 태그입니다. 자바스크립트가 이 숫자를 1씩 올리거나 내리게 됩니다.

---

### (6) 자바스크립트 파일 연결
```html
<script src="script.js"></script>
```
- HTML 동작의 맨 마지막 부분에 **JavaScript 파일(script.js)**을 불러와 연결합니다.