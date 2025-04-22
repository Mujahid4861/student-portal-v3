javascript
const pdfs = [
  { title: "CSC 113", file: "pdfs/CSC_113.pdf" },
  { title: "Internet Security", file: "pdfs/Internet_Security.pdf" }
];

const buttonsContainer = document.getElementById('pdf-buttons');
const viewer = document.getElementById('pdf-viewer');
const viewerBox = document.getElementById('viewer-box');

pdfs.forEach(pdf => {
  const btn = document.createElement('button');
  btn.textContent = pdf.title;
  btn.addEventListener('click', () => {
    viewer.src = pdf.file;
    viewerBox.style.display = 'block';
  });
  buttonsContainer.appendChild(btn);
});
js
document.getElementById('search').addEventListener('input', function(e) {
  const value = e.target.value.toLowerCase();
  document.querySelectorAll('#pdf-buttons button').forEach(btn => {
    btn.style.display = btn.textContent.toLowerCase().includes(value) ? 'inline-block' : 'none';
  });
});
