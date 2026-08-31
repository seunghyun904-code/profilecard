# CSS 코드 설명서 (style.css)

이 문서는 HTML로 만든 뼈대에 **색상, 크기, 정렬, 반응형 디자인** 등의 옷을 입혀주는 CSS 코드를 설명합니다.

---

## 1. 색상 변수 설정 (`:root`)

```css
:root {
  --bg-color: #f7faf5;
  --card-bg: #ffffff;
  --soft-green: #d8f3dc;
  --vibrant-green: #95d5b2;
  --soft-pink: #ffe5ec;
  --vibrant-pink: #ffb3c6;
  --text-dark: #2d3748;
  --text-muted: #718096;
}
```
- **변수(Variables)**: 자주 사용하는 색상 값을 미리 이름으로 정의해 둡니다. 나중에 색상을 바꾸고 싶을 때 이곳의 값만 수정하면 프로젝트 전체에 일괄 적용됩니다.
- 연두 계열(`--soft-green`, `--vibrant-green`)과 연분홍 계열(`--soft-pink`, `--vibrant-pink`)이 정의되어 있습니다.

---

## 2. 여백 초기화 및 기본 화면 배치

```css
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: var(--bg-color);
  font-family: 'Pretendard', sans-serif;
  padding: 20px;
}
```
- **`*`**: 전체 요소를 뜻합니다. 브라우저가 기본적으로 가지고 있는 여백(`margin`, `padding`)을 0으로 만들어 디자인 오차를 줄입니다.
- **`box-sizing: border-box`**: 요소의 테두리와 여백을 포함하여 전체 크기를 계산하게 해줍니다.
- **`display: flex` / `justify-content: center` / `align-items: center`**: 프로필 카드를 화면 **세로/가로 중앙**에 딱 맞춰 배치합니다.
- **`min-height: 100vh`**: 화면의 전체 높이(100 Viewport Height)만큼 최소 높이를 가집니다.

---

## 3. 프로필 카드 전체 스타일 (`.profile-card`)

```css
.profile-card {
  width: 100%;
  max-width: 350px;
  background-color: var(--card-bg);
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.profile-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
}
```
- **`max-width: 350px`**: PC 화면에서도 카드가 너무 커지지 않도록 최대 너비를 350px로 제한합니다.
- **`border-radius: 20px`**: 모서리를 둥글게 처리합니다.
- **`box-shadow`**: 카드 뒤에 부드러운 그림자 효과를 줍니다.
- **`:hover` / `transform: translateY(-5px)`**: 마우스를 카드 위에 올렸을 때 카드가 살짝 위로 floating(둥실 떠오르는)하는 애니메이션 효과를 줍니다.

---

## 4. 상단 헤더 및 프로필 이미지

```css
.card-header {
  height: 100px;
  background: linear-gradient(135deg, var(--soft-green), var(--soft-pink));
}

.profile-img-container {
  width: 100px;
  height: 100px;
  margin: -50px auto 15px;
  border-radius: 50%;
  ...
}
```
- **`linear-gradient`**: 연두색과 연분홍색이 대각선 방향으로 부드럽게 섞이는 그라데이션 배경을 만듭니다.
- **`margin: -50px auto 15px`**: 음수 마진(`-50px`)을 사용하여 프로필 사진 상자가 상단 헤더 영역 위로 절반쯤 겹쳐 올라가게 만듭니다.
- **`border-radius: 50%`**: 네모난 정사각형 상자와 이미지를 동그란 원형으로 만들어 줍니다.

---

## 5. SNS 버튼 및 좋아요 버튼

```css
.social-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 42px;
  height: 42px;
  border-radius: 50%;
  background-color: var(--soft-green);
  transition: background-color 0.25s ease, transform 0.2s ease;
}

.social-btn:hover {
  background-color: var(--soft-pink);
  transform: scale(1.1);
}
```
- SNS 버튼들을 동그란 모양으로 만들고, 마우스를 올리면 배경색이 연두색에서 **연분홍색**으로 변하면서 크기가 1.1배 살짝 커지는 정교한 반응을 줍니다.

---

## 6. 모바일 반응형 처리 (`@media`)

```css
@media (max-width: 480px) {
  .profile-card {
    max-width: 100%;
  }

  .card-header {
    height: 80px;
  }

  .profile-img-container {
    width: 85px;
    height: 85px;
    margin-top: -42px;
  }

  .name {
    font-size: 1.25rem;
  }
}
```
- **미디어 쿼리 (`@media`)**: 화면 너비가 480px 이하인 **스마트폰 화면**이 되었을 때 적용되는 전용 스타일입니다.
- 카드가 깨지거나 답답해 보이지 않도록 헤더 높이, 이미지 크기, 글자 크기 등을 약간씩 축소하여 모바일 화면에 꼭 맞게 자동 조정됩니다.