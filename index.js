const hour = $(".hour");
const minute = $(".minute");
const second = $(".second");

function setDate() {
  const now = new Date();

  const getSecond = now.getSeconds();
  const getMinute = now.getMinutes();
  const getHour = now.getHours();

  const secondDegree = (getSecond / 60) * 360;
  const minuteDegree = (getMinute / 60) * 360;
  const hourDegree = (getHour / 12) * 360;

  second.css("transform", `rotate(${secondDegree}deg)`);
  minute.css("transform", `rotate(${minuteDegree}deg)`);
  hour.css("transform", `rotate(${hourDegree}deg)`);
}

setInterval(setDate, 1000);
