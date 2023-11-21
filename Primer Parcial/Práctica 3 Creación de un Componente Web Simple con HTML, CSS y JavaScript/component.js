
const showMessageButton = document.getElementById('showMessage');
const messageBox = document.getElementById('messageBox');

showMessageButton.addEventListener('click', () => {
  messageBox.value = '¡Hola, Mundo!';
});