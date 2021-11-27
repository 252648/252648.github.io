//******현재시간*****/
const CLOCK = document.querySelector(".clock");
const Year = document.querySelector(".year");
const TODAY = document.querySelector(".today");
const TODAYNUM = document.querySelector(".todayNum");
const DDAY = document.querySelector(".dday");
const MONTH = document.querySelector(".month");

function LastDay() {
  ///현재날짜///
  const today = new Date();

  let hours = String(today.getHours()).padStart(2, "0"); // 시
  let minutes = String(today.getMinutes()).padStart(2, "0"); // 분
  let seconds = String(today.getSeconds()).padStart(2, "0"); // 초
  CLOCK.innerText = `${hours}:${minutes}:${seconds}`;

  let year = today.getFullYear(); // 년도
  let monthList = new Array(
    "December",
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November"
  );
  let month = today.getMonth() + 1; // 월
  let monthLabel = monthList[month];
  let date = today.getDate(); // 날짜
  let week = new Array("Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat");
  let day = today.getDay(); // 요일
  let todayLabel = week[day];

  Year.innerText = `${year}`;
  TODAY.innerText = `${todayLabel}`;
  TODAYNUM.innerText = `(${date})`;
  MONTH.innerText = `${monthLabel}`;
  ////마지막 날짜///
  const lastday = new Date(`${today.getFullYear()}-12-31`);
  let gap = lastday.getTime() - today.getTime();
  let result = Math.ceil(gap / (1000 * 60 * 60 * 24));

  DDAY.innerText = `${result}일 남았습니다.`;
  //마지막날짜-현재날짜///
  //   const dDay = lastday - today;
  //   var _second = 1000;
  //   var _minute = _second * 60;
  //   var _Hours = _minute * 60;
  //   var _day = _Hours * 24;

  //   const day = String(parseInt(Math.floor(dDay / _day))).padStart(2, "0");

  //   clockTitle.innerText = `${day}d ${Hours}h ${minutes}m ${seconds}s`;
}

LastDay();

setInterval(LastDay, 1000);
