const sendBtn = document.getElementById('send-btn');
const sendMail = document.getElementById('send-email');
const sendName = document.getElementById('send-name');
const sendMessage = document.getElementById('send-message');
const error = document.getElementById('error');
const form = document.getElementById('form');

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
    error.innerHTML="※ 이름을 입력해 주세요! ※";
    sendName.focus();
  } 
  else if (!sendMail.value) {
    error.innerHTML="※ 이메일을 입력해 주세요! ※";
    sendMail.focus();
  }
  else if (!checkMail(sendMail.value)) {
    error.innerHTML="※ 잘못된 이메일 형식입니다! ※";
    sendMail.focus();
  }
  else if (!sendMessage.value) {
    error.innerHTML="※ 메시지를 입력하세요! ※";
    sendMessage.focus();
  }
  else {
    e.preventDefault();
    error.innerHTML=`${sendName.value}님! 메일이 발송되었습니다 감사합니다! :)`;
    form.submit();
    //5초 후에 메시지 삭제
    setTimeout(() => {
      error.innerHTML = "";
    }, 5000);
    sendMail.value = null;
    sendName.value = null;
    sendMessage.value = null;
  }
});
