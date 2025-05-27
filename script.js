// Open mobile navi
const openBtnNavi = document.getElementById('navi-open-btn');
const closeBtnNavi = document.getElementById('navi-close-btn');
const naviWrapperMobile = document.getElementById('navi-wrapper-mobile');

openBtnNavi.addEventListener('click', () =>{
  naviWrapperMobile.classList.remove('hidden');
});

closeBtnNavi.addEventListener('click', () => {
  naviWrapperMobile.classList.add('hidden');
});