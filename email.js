const sendBtn = document.getElementById('send-button');
const sendMail = document.getElementById('send-mail');
const sendName = document.getElementById('send-name');

function checkMail(str) {
  let emailCheck =  /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;
  if(!emailCheck.test(str)) {
    return false;
  } else {
    return true;
  }
};


sendBtn.addEventListener('click', (e) => {
  if(!sendName.value) {
    // e.preventDefault();
    alert('이름을 입력하세요!');
    sendName.focus();
  } 
  else if (!sendMail.value) {
    // e.preventDefault();
    alert('이메일을 입력하세요!');
    sendMail.focus();
  }
  else if (!checkMail(sendMail.value)) {
    // e.preventDefault();
    alert('잘못된 이메일 형식입니다.');
    sendMail.focus();
  }
  else {
    e.preventDefault();
    alert(`${sendName.value}님! 메일이 발송되었습니다 :)`);
    //메일 작성자 이름 받아온 후에 초기화
    sendMail.value = null;
    sendName.value = null;
  }
});
