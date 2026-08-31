document.addEventListener('DOMContentLoaded', () => {
  // 테마 전환 로직
  const themeToggleBtn = document.getElementById('themeToggle');
  const themeIcon = themeToggleBtn.querySelector('i');

  themeToggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    
    if (document.body.classList.contains('dark-mode')) {
      themeIcon.classList.remove('fa-moon');
      themeIcon.classList.add('fa-sun');
    } else {
      themeIcon.classList.remove('fa-sun');
      themeIcon.classList.add('fa-moon');
    }
  });

  // 좋아요 버튼 로직
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