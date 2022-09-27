// 스크롤 내리면 헤더 없애고 스크롤 올리면 헤더 보이게
const header = document.querySelector('#header');
const up = document.getElementById('up');
// getBoundingClientRect().height로 해당 DOM의 높이를 변수로 잡음
const headerHeight = header.getBoundingClientRect().height;

//e.deltaY값이 양수면 마우스 wheel이 down, 음수면 up
window.addEventListener('wheel', (e) => {
  if(e.deltaY > 0) {
      header.style.visibility = 'hidden';
  } else {
      header.style.visibility = 'visible';
  }
});
// 헤더 위치값 잡아서 #home에 위치하면 up버튼 사라지게
window.addEventListener('scroll', () => {
  if (window.scrollY > headerHeight) {
    up.style.display = 'block';
  } else {
    up.style.display = 'none';
  }
});



// 메뉴 링크 이동시 스크롤 효과
const link = document.querySelectorAll('header a');

function scroll(e) {
  e.preventDefault();
  var target = document.querySelector(this.getAttribute('href'));
  
  window.scrollTo ({
      'behavior': 'smooth',
      'top': target.offsetTop - 70
  });
}

for(var i = 0; i < link.length; i ++) {
  link[i].onclick = scroll;
}


// 프로젝트 스와이퍼 효과
const swiper = new Swiper(".swiper-container", {
  loop: true,
  centeredSlides: true,
  slidesPerView: "auto",
  slideToClickedSlide: true,
  effect: "coverflow",
  coverflowEffect: {
    rotate: 30,
    slideShadows: false,
  },
  // pagination: {
  //   el: '.swiper-pagination',
  //   clickable: true,
  // }
});


// 글자 타이핑 효과
const homeText = document.getElementById("home-text");
const homeTextDes = document.getElementById("home-text-description");

const typewriter = new Typewriter(homeText, {});
typewriter
  .typeString("OH YOON AH PORTFOLIO")
  .start()

// 글자 타이핑 끝난 후
setTimeout(() => {
  const downBtn = document.getElementById('down-btn');
  downBtn.style.display = 'block';
  homeTextDes.style.display = 'block';
}, 3600);




// 768px 메뉴 토글버튼
const navIcon = document.querySelector('#nav-icon');
const nav = document.querySelector('nav');

navIcon.addEventListener('click', () => {
  nav.classList.toggle('active');
  navIcon.classList.toggle('active');
});