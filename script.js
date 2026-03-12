document.addEventListener('DOMContentLoaded', function() {
  // smooth navigation
  const links = document.querySelectorAll('nav a');
  links.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 20,
          behavior: 'smooth'
        });
      }
    });
  });

  // gallery interaction: click to zoom
  const gallery = document.querySelector('.gallery');
  if (gallery) {
    gallery.addEventListener('click', function(e) {
      const img = e.target.closest('img');
      if (!img) return;
      openLightbox(img.src, img.alt || '');
    });
  }
});

// lightbox helper
function openLightbox(src, alt) {
  // create overlay
  const overlay = document.createElement('div');
  overlay.className = 'lightbox-overlay';
  overlay.addEventListener('click', () => document.body.removeChild(overlay));

  // create image container
  const img = document.createElement('img');
  img.className = 'lightbox-img';
  img.src = src;
  img.alt = alt;

  const box = document.createElement('div');
  box.className = 'lightbox-box';
  box.appendChild(img);

  overlay.appendChild(box);
  document.body.appendChild(overlay);
}
