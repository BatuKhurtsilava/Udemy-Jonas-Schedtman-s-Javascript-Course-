'use strict';
const modalbtn = document.querySelectorAll('.show-modal');
const modalContainer = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const closeModal = document.querySelector('.close-modal');


modalbtn.forEach(btn => btn.addEventListener('click', function() {
  modalContainer.classList.toggle('hidden');
  overlay.classList.toggle('hidden');
  document.body.addEventListener('click', function(e){
    console.log(e);
    if(e.target === overlay ) {
      modalContainer.classList.toggle('hidden');
      overlay.classList.toggle('hidden');
    }
  })

}));

closeModal.addEventListener('click', function() {
  modalContainer.classList.toggle('hidden');
  overlay.classList.toggle('hidden');
});



