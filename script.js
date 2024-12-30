const form = document.getElementById('myForm');
const messageDiv = document.getElementById('message');

form.addEventListener('submit', (event) => {
  event.preventDefault(); 

  
  const message = document.createElement('div');
  message.textContent = 'Terima kasih atas ucapan Anda!';
  message.classList.add('message'); 

  messageDiv.appendChild(message);

  setTimeout(() => {
    message.remove();
  }, 3000);

  form.submit();
});