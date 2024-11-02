const createStars = () => {
    for (let i = 0; i < 100; i++) {
      const star = document.createElement('div');
      star.className = 'star';
      const starSize = Math.random() * 2 + 1;
      star.style.width = starSize + 'px';
      star.style.height = starSize + 'px';
      star.style.left = Math.random() * 100 + 'vw';
      star.style.top = Math.random() * 100 + 'vh';
      document.body.appendChild(star);
    }
  };
  
  createStars();