const form = document.querySelector('#registration-form');
const imageInput = document.querySelector('#image');
const dropArea = document.querySelector('#image-drop');
const imagePath = document.querySelector('#image-path');
const statusMessage = document.querySelector('#form-status');

function showSelectedImage() {
  const file = imageInput.files[0];
  imageInput.setCustomValidity('');
  statusMessage.textContent = '';
  if (!file) {
    imagePath.textContent = '';
    return;
  }
  if (!file.type.startsWith('image/')) {
    imageInput.value = '';
    imagePath.textContent = 'Selecciona un archivo de imagen válido.';
    imageInput.setCustomValidity('Selecciona un archivo de imagen válido.');
    return;
  }
  // El navegador oculta la ruta real por privacidad. El archivo queda en el input.
  imagePath.textContent = `Archivo: ${file.name}`;
}

imageInput.addEventListener('change', showSelectedImage);

['dragenter', 'dragover'].forEach((eventName) => {
  dropArea.addEventListener(eventName, (event) => {
    event.preventDefault();
    dropArea.classList.add('dragging');
  });
});

dropArea.addEventListener('dragleave', (event) => {
  if (!dropArea.contains(event.relatedTarget)) dropArea.classList.remove('dragging');
});

dropArea.addEventListener('drop', (event) => {
  event.preventDefault();
  dropArea.classList.remove('dragging');
  const files = event.dataTransfer.files;
  if (files.length !== 1 || !files[0].type.startsWith('image/')) {
    statusMessage.textContent = 'Arrastra una sola imagen. La selección anterior se conserva.';
    return;
  }
  imageInput.files = files;
  showSelectedImage();
});

form.addEventListener('input', () => { statusMessage.textContent = ''; });

form.addEventListener('submit', (event) => {
  event.preventDefault();
  statusMessage.textContent = 'Formulario validado. Los datos y la imagen están listos para un envío posterior; todavía no se han enviado ni guardado.';
});

form.addEventListener('reset', () => {
  imageInput.setCustomValidity('');
  imagePath.textContent = '';
  statusMessage.textContent = '';
  dropArea.classList.remove('dragging');
});
