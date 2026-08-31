# JavaScript 코드 설명서 (script.js)

이 문서는 프로필 카드에서 **좋아요 버튼 클릭 동작 및 개수 카운트** 등의 동적인 기능을 담당하는 자바스크립트 코드를 설명합니다.

---

## 전체 코드 한눈에 보기

```javascript
document.addEventListener('DOMContentLoaded', () => {
  const likeBtn = document.getElementById('likeBtn');
  const likeCount = document.getElementById('likeCount');
  let count = 0;
  let isLiked = false;

  likeBtn.addEventListener('click', () => {
    const icon = likeBtn.querySelector('i');
    
    if (!isLiked) {
      count++;
      likeCount.textContent = count;
      icon.classList.remove('fa-regular');
      icon.classList.add('fa-solid');
      isLiked = true;
    } else {
      count--;
      likeCount.textContent = count;
      icon.classList.remove('fa-solid');
      icon.classList.add('fa-regular');
      isLiked = false;
    }
  });
});
```

---

## 세부 설명

### 1. 웹페이지 로딩 완료 기다리기
```javascript
document.addEventListener('DOMContentLoaded', () => { ... });
```
- 브라우저가 HTML 문서의 모든 요소(버튼, 텍스트 등)를 전부 읽고 준비를 마쳤을 때 내부의 자바스크립트 코드를 실행하도록 안전하게 감싸주는 부분입니다.

---

### 2. HTML 요소 및 변수 준비
```javascript
const likeBtn = document.getElementById('likeBtn');
const likeCount = document.getElementById('likeCount');
let count = 0;
let isLiked = false;
```
- **`document.getElementById('...')`**: HTML 문서에서 지정한 ID를 가진 요소를 찾아와 변수에 저장합니다.
  - `likeBtn`: 좋아요 버튼 전체
  - `likeCount`: 좋아요 숫자가 적힌 `<span>` 영역
- **`let count = 0;`**: 좋아요 숫자를 기록할 변수입니다. (초기값 0)
- **`let isLiked = false;`**: 현재 사용자가 좋아요를 눌렀는지 안 눌렀는지의 상태를 기억하는 변수입니다. (초기값: 안 누름=`false`)

---

### 3. 버튼 클릭 이벤트 감지 (`addEventListener`)
```javascript
likeBtn.addEventListener('click', () => { ... });
```
- 사용자가 `likeBtn`(좋아요 버튼)을 **클릭(`click`)**할 때마다 `{ }` 안에 있는 중괄호 코드가 실행됩니다.

---

### 4. 하트 아이콘 및 숫자 제어 (조건문 `if - else`)
```javascript
const icon = likeBtn.querySelector('i');
```
- 버튼 내부에 있는 `<i>` (하트 아이콘 태그)를 찾아옵니다.

#### [경우 A] 아직 좋아요를 누르지 않은 상태일 때 (`if (!isLiked)`)
```javascript
count++;
likeCount.textContent = count;
icon.classList.remove('fa-regular');
icon.classList.add('fa-solid');
isLiked = true;
```
1. `count++`: 좋아요 수를 1 증가시킵니다. (0 → 1)
2. `likeCount.textContent = count`: 증가된 숫자를 화면의 텍스트로 업데이트합니다.
3. `icon.classList.remove('fa-regular')` & `add('fa-solid')`: 빈 하트 모양 아이콘 클래스를 지우고, 속이 꽉 찬 하트 모양 아이콘 클래스를 추가합니다.
4. `isLiked = true`: "이제 좋아요를 누른 상태임"으로 변수를 변경합니다.

#### [경우 B] 이미 좋아요를 누른 상태에서 다시 클릭했을 때 (`else`)
```javascript
count--;
likeCount.textContent = count;
icon.classList.remove('fa-solid');
icon.classList.add('fa-regular');
isLiked = false;
```
1. `count--`: 좋아요 수를 1 감소시킵니다. (1 → 0)
2. `likeCount.textContent = count`: 감소된 숫자를 화면에 반영합니다.
3. `icon.classList.remove('fa-solid')` & `add('fa-regular')`: 꽉 찬 하트를 지우고 다시 빈 하트로 바꿉니다.
4. `isLiked = false`: "좋아요 취소 상태임"으로 변수를 변경합니다.