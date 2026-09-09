const button = document.querySelector('#btn');
const status = document.querySelector('#status');

button.addEventListener('click', () => {
  status.textContent = 'JavaScript funcionando dentro da aplicação Nginx!';
});
