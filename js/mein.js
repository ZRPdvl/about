const burger = document.querySelector('.header__burger');
const headerMenu = document.querySelector('.header__menu');

burger.addEventListener('click' , function(e){
  e.preventDefault();
  burger.classList.toggle('active');
  headerMenu.classList.toggle('active');

  if (burger.classList.contains('active')) {
    document.querySelector('.btn-search').classList.add('lock')
    document.querySelector('.input-search').classList.add('lock')

    window.onscroll = function(){
      burger.classList.remove('active');
      headerMenu.classList.remove('active');
    };
  } else {
    document.querySelector('.btn-search').classList.remove('lock')
    document.querySelector('.input-search').classList.remove('lock')
  }
})









