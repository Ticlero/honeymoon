const calEle = document.querySelector(
  ".main-d-day-container .meeting-days .meeting-days-column .calendar"
);
const clockEle = document.querySelector(
  ".main-d-day-container .meeting-days .meeting-days-column .clock"
);

const fromToNowEle = document.querySelector(
  ".main-d-day-container .meeting-days .meeting-days-column .from-to-now"
);

const getTime = () => {
  const date = new Date();
  const firstMetting = new Date("2017-04-04");

  let YEARS = date.getFullYear();
  let MONTH = date.getMonth() + 1;
  let DAYS = date.getDate();

  let HOUR = date.getHours();
  let MINUITES = date.getMinutes();
  let SECONDS = date.getSeconds();

  const currentDate = `${YEARS}-${MONTH < 10 ? `0${MONTH}` : MONTH}-${
    DAYS < 10 ? `0${DAYS}` : DAYS
  }`;
  const TIME = `
  ${HOUR < 10 ? `0${HOUR}` : HOUR}:
  ${MINUITES < 10 ? `0${MINUITES}` : MINUITES}:
    ${SECONDS < 10 ? `0${SECONDS}` : SECONDS}`;

  const calDDAY = firstMetting.getTime() - date.getTime();
  const DDAY = Math.floor(calDDAY / (1000 * 60 * 60 * 24)) * -1;

  calEle.innerHTML = currentDate;
  clockEle.innerHTML = TIME;
  fromToNowEle.innerHTML = DDAY + "일";
};

const getDates = () => {
  getTime();
  setInterval(getTime, 1000);
};

getDates();
