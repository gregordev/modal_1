const btn = document.getElementById('modalBtn');
const modal = document.getElementById('modal');
const close = document.getElementById('button-close');

btn.addEventListener('click', showModal);


function showModal() {
  modal.style.display = 'block';
  close.addEventListener('click', hideModal);
  window.addEventListener('click', hideModalOut);
  
}


function hideModal() {
  modal.style.display = 'none';
}

function hideModalOut(e) {
  if(e.target == modal) {
    modal.style.display = 'none';
  }
}