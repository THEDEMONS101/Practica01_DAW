// JavaScript nativo para conectar los valores RGB con la vista del color.
const channels = ['red', 'green', 'blue'];
const preview = document.querySelector('.color-preview');
const output = document.querySelector('#rgb-value');

function updateColor() {
  const values = channels.map((channel) => {
    const slider = document.querySelector(`#${channel}-range`);
    slider.style.setProperty('--fill', `${Number(slider.value) / 255 * 100}%`);
    return Number(slider.value);
  });
  const color = `rgb(${values.join(', ')})`;
  preview.style.backgroundColor = color;
  preview.setAttribute('aria-label', `Color RGB: ${values.join(', ')}`);
  output.value = color;
}

channels.forEach((channel) => {
  const slider = document.querySelector(`#${channel}-range`);
  const number = document.querySelector(`#${channel}-number`);
  slider.addEventListener('input', () => {
    number.value = slider.value;
    updateColor();
  });
  function syncNumber() {
    if (number.value === '' || !Number.isFinite(number.valueAsNumber)) return;
    const value = Math.max(0, Math.min(255, Math.round(number.valueAsNumber)));
    number.value = String(value);
    slider.value = String(value);
    updateColor();
  }
  number.addEventListener('input', syncNumber);
  number.addEventListener('change', () => {
    if (number.value === '' || !Number.isFinite(number.valueAsNumber)) {
      number.value = slider.value;
    }
    syncNumber();
  });
});

updateColor();
