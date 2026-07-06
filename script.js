const colorCards = document.querySelectorAll('.color-card');
const previewTitle = document.getElementById('preview-title');
const previewText = document.getElementById('preview-text');
const year = document.getElementById('year');

if (year) {
  year.textContent = new Date().getFullYear();
}

colorCards.forEach((card) => {
  card.addEventListener('click', () => {
    const title = card.getAttribute('data-title');
    const text = card.getAttribute('data-text');

    if (previewTitle) previewTitle.textContent = title;
    if (previewText) previewText.textContent = text;
  });
});
