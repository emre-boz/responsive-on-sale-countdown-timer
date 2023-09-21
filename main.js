const days = document.querySelector("#days");
const hours = document.querySelector("#hours");
const minutes = document.querySelector("#minutes");
const seconds = document.querySelector("#seconds");

const dummyTime = new Date();
let finishTime = new Date();

finishTime.setDate(dummyTime.getDate() + 2);
finishTime.setHours(1, 0, 0);

const updateTime = () => {
  const currentTime = new Date();
  const diff = finishTime - currentTime;

  const day = Math.floor(diff / 1000 / 60 / 60 / 24);
  const hour = Math.floor(diff / 1000 / 60 / 60) % 24;
  const minute = Math.floor(diff / 1000 / 60) % 60;
  const second = Math.floor(diff / 1000) % 60;

  days.innerHTML = day;
  hours.innerHTML = hour < 0 ? "0" + hour : hour;
  minutes.innerHTML = minute < 0 ? "0" + minute : minute;
  seconds.innerHTML = second < 0 ? "0" + second : second;
};

setInterval(updateTime, 1000);