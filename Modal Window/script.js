'use strict';

const modal = document.querySelector('.modal'); // storiranje na elementot modal vo constanta
const overlay = document.querySelector('.overlay'); // storiranje na elementot overlay vo constanta
const btnCloseModal = document.querySelector('.close-modal'); // storiranje na elementot close-modal vo constanta
const btnsOpenModal = document.querySelectorAll('.show-modal'); // storiranje na elementot open-modal vo constanta


const openModal = function(){
    modal.classList.remove('hidden'); // brisenje na klasata hidden od modalot
    overlay.classList.remove('hidden'); // brisenje na klasata hidden od overlayot
}


for(let i = 0; i < btnsOpenModal.length; i++) // iteracija vo for petlja se dodeka i e pomalo od dolzina na btnsOpenModal
btnsOpenModal[i].addEventListener('click', openModal); // dodavanje na event listener na site btnsOpenModal so povikuvanje na openModal funkcijata 



const closeModal = function(){

    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

btnCloseModal.addEventListener('click', closeModal); // dodavanje na event listener na btnCloseModal so povikuvanje na closeModal funkcijata

overlay.addEventListener('click', closeModal); // dodavanje na event listener na overlayot so povikuvanje na closeModal funkcijata

document.addEventListener('keydown', function(e){
    // if(event.key === 'Escape'){
    //     modal.classList.add('hidden'); // dodavanje na klasata hidden na modalot
    //     overlay.classList.add('hidden'); // dodavanje na klasata hidden na overlayot
    // }

    if(e.key === 'Escape'){
        if(!modal.classList.contains('hidden')){
            closeModal();
        }
    }
})

