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