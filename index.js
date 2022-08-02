// 헤더 스크롤 시 배경색 투명 --> 흰색으로 변경
const header = document.querySelector('#header');
const up = document.getElementById('up');

// getBoundingClientRect().height로 해당 DOM의 높이를 변수로 잡음
const headerHeight = header.getBoundingClientRect().height;

window.addEventListener('scroll', () => {
  if (window.scrollY > headerHeight) {
    // header.setAttribute("style", "visibility: hidden;");
    header.style.visibility = 'hidden';
    up.style.display = 'block';
  } else {
    // header.setAttribute("style", "background: transparent;");
    header.style.visibility = 'visible';
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
      'top': target.offsetTop
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
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  }
});


// 글자 타이핑 효과
const homeText = document.getElementById("home-text");

const typewriter = new Typewriter(homeText, {});
typewriter
   .typeString("OH YOON AH PORTFOLIO")
   .start()

// 3.5초 후 down-btn 표시(글자 타이핑 끝난 후)
setTimeout(() => {
  const downBtn = document.getElementById('down-btn');
  downBtn.style.display = 'block';
}, 3500);


// 768px 메뉴 토글버튼
const navIcon = document.querySelector('#nav-icon');
const nav = document.querySelector('nav');

navIcon.addEventListener('click', () => {
  nav.classList.toggle('active');
  navIcon.classList.toggle('active');
});