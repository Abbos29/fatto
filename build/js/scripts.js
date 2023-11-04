// Custom Scripts
// Custom scripts







// Мобильное меню бургер
function burgerMenu() {
  const burger = document.querySelector('.burger')
  const menu = document.querySelector('.menu')
  const body = document.querySelector('body')
  burger.addEventListener('click', () => {
    if (!menu.classList.contains('active')) {
      menu.classList.add('active')
      burger.classList.add('active-burger')
      body.classList.add('locked')
    } else {
      menu.classList.remove('active')
      burger.classList.remove('active-burger')
      body.classList.remove('locked')
    }
  })
  menu.addEventListener("click", (event) => {
    if (event.target) {
      menu.classList.remove('active')
      burger.classList.remove('active-burger')
      body.classList.remove('locked')
    }
  })
  // Вот тут мы ставим брейкпоинт навбара
  window.addEventListener('resize', () => {
    if (window.innerWidth > 991.98) {
      menu.classList.remove('active')
      burger.classList.remove('active-burger')
      body.classList.remove('locked')
    }
  })
}
burgerMenu()


// Вызываем эту функцию, если нам нужно зафиксировать меню при скролле.
function fixedNav() {
  const nav = document.querySelector('nav')

  // тут указываем в пикселях, сколько нужно проскроллить что бы наше меню стало фиксированным
  const breakpoint = 1
  if (window.scrollY >= breakpoint) {
    nav.classList.add('fixed__nav')
  } else {
    nav.classList.remove('fixed__nav')
  }
}
window.addEventListener('scroll', fixedNav)




const selectItem = document.querySelectorAll('.shop__top-select');
const selectList = document.querySelectorAll('.shop__top-select-list');
const selectArrow = document.querySelectorAll('.shop__top-select-list');

document.addEventListener('click', (event) => {
  const isOutsideSelectItem = !event.target.closest('.shop__top-select');
  if (isOutsideSelectItem) {
    // Удаляем класс "active" у всех элементов selectList и selectItem
    selectList.forEach((listItem) => {
      listItem.classList.remove('active');
    });
    selectItem.forEach((item) => {
      item.classList.remove('active');
    });
  }
});

selectItem.forEach((item, index) => {
  item.addEventListener('click', () => {
    // Проверяем, имеет ли текущий selectList класс "active"
    const isActive = selectList[index].classList.contains('active');

    // Удаляем класс "active" у всех элементов selectList и selectItem
    selectList.forEach((listItem) => {
      listItem.classList.remove('active');
    });
    selectItem.forEach((item) => {
      item.classList.remove('active');
    });

    // Добавляем класс "active" только к соответствующему элементу selectList и selectItem,
    // если они не были активными ранее
    if (!isActive) {
      selectList[index].classList.add('active');
      selectItem[index].classList.add('active');
    }
  });
});
// console.log(selectItem);
