// Tabs for namul section
document.querySelectorAll('.namul-tabs .tab').forEach(btn => {
  btn.addEventListener('click', () => {
    const target = btn.dataset.tab;
    document.querySelectorAll('.namul-tabs .tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.namul-panel').forEach(p => p.classList.remove('active'));
    btn.classList.add('active');
    const panel = document.querySelector(`.namul-panel[data-panel="${target}"]`);
    if (panel) panel.classList.add('active');
  });
});

// Cart counter
const cartCountEl = document.getElementById('cartCount');
let cartCount = 0;
document.querySelectorAll('.add-cart').forEach(btn => {
  btn.addEventListener('click', e => {
    e.preventDefault();
    cartCount++;
    cartCountEl.textContent = cartCount;
    const original = btn.textContent;
    btn.textContent = '담음 ✓';
    btn.disabled = true;
    setTimeout(() => {
      btn.textContent = original;
      btn.disabled = false;
    }, 1200);
  });
});

// Smooth in-view reveal
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.farmer-card, .process-step, .product-card, .trust-item, .namul-item, .recipe-card').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity .6s ease, transform .6s ease';
  observer.observe(el);
});
