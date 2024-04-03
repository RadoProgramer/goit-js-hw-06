
const fontSizeControl = document.getElementById('font-size-control');
const textSpan = document.getElementById('text');

// Funkcja do aktualizacji rozmiaru tekstu
function updateTextSize() {
  // Pobranie aktualnej wartości suwaka
  const fontSize = fontSizeControl.value + 'px';
  
  
  textSpan.style.fontSize = fontSize;
}

updateTextSize();

fontSizeControl.addEventListener('input', updateTextSize);