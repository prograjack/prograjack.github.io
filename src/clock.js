
const clockTitle = document.querySelector(".js-clock");

function time() {

  const dday = new Date();
  

 
  const hour = dday.getHours();
  const min = dday.getMinutes();
  const sec = dday.getSeconds();
  clockTitle.innerHTML = `Current time: <br/> ${hour}h ${min}m ${sec}s`;
}

time();
setInterval(time, 1000);