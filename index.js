// 헤더 스크롤 시 배경색 투명 --> 흰색으로 변경
const header = document.querySelector('#header');
const up = document.getElementById('up');

// getBoundingClientRect().height로 해당 DOM의 높이를 변수로 잡음
const headerHeight = header.getBoundingClientRect().height;

window.addEventListener('scroll', () => {
  if (window.scrollY > headerHeight) {
    // header.setAttribute("style", "background: white;");
    header.setAttribute("style", "visibility: hidden;");
    up.setAttribute("style", "display: block;");
  } else {
    // header.setAttribute("style", "background: transparent;");
    header.setAttribute("style", "visibility: visible;");
    up.setAttribute("style", "display: none");
  }
});


// 메뉴 링크 이동시 스크롤 효과
const nav = document.querySelectorAll('header a');

function scroll(e) {
  e.preventDefault();
  var target = document.querySelector(this.getAttribute('href'));

  window.scrollTo ({
      'behavior': 'smooth',
      'top': target.offsetTop
  });
}

for(var i = 0; i < nav.length; i ++) {
    nav[i].onclick = scroll;
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
});


// 글자 타이핑 효과
const homeText = document.getElementById("home-text");

      const typewriter = new Typewriter(homeText, {});
      typewriter
        // .pauseFor(2500)
        .typeString("OH YOON AH PORTFOLIO")
        .pauseFor(2000)
        .start();