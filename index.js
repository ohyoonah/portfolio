// 헤더 스크롤 시 배경색 투명 --> 흰색으로 변경
const header = document.querySelector('#header');
const up = document.getElementById('up');

// getBoundingClientRect().height로 해당 DOM의 높이를 변수로 잡음
const headerHeight = header.getBoundingClientRect().height;

window.addEventListener('scroll', () => {
  if (window.scrollY > headerHeight) {
    header.setAttribute("style", "background: white;");
    up.setAttribute("style", "display: block");
  } else {
    header.setAttribute("style", "background: transparent;");
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
      'top': target.offsetTop-70
  });
}

for(var i = 0; i < nav.length; i ++) {
    nav[i].onclick = scroll;
}