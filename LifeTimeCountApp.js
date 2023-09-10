let isDOBopen = false;
let DateofBirth;

const settingcog = document.getElementById("gearicon");
const settingcontentEl = document.getElementById("settingContent");
const initialTextEl = document.getElementById("initialText");
const afterDOBbtnTextEl = document.getElementById("afterDOBbtnText");
const dobButtonEl = document.getElementById("dobButton");
const dobInputEl = document.getElementById("dobInput");

const yearEl = document.getElementById("year");
const monthEl = document.getElementById("month");
const dayEl = document.getElementById("day");
const hourEl = document.getElementById("hour");
const minuteEl = document.getElementById("minute");
const secondsEl = document.getElementById("seconds");

const makeTwoDigitNumber = (number) => {
  return number > 9 ? number : `0${number}`;
};

//function to open setting button
const toggleDOB = () => {
  if (isDOBopen) {
    settingcontentEl.classList.add("hide");
  } else {
    settingcontentEl.classList.remove("hide");
  }
  isDOBopen = !isDOBopen;

  console.log("Toggle", isDOBopen);
};

// function to
const updateAge = () => {
  const currentDate = new Date();
  const dateDiff = currentDate - DateofBirth;
  const year = Math.floor(dateDiff / (1000 * 60 * 60 * 24 * 365));
  const month = Math.floor((dateDiff / (1000 * 60 * 60 * 24 * 365)) % 12);
  const day = Math.floor(dateDiff / (1000 * 60 * 60 * 24)) % 30;
  const hour = Math.floor(dateDiff / (1000 * 60 * 60)) % 24;
  const minute = Math.floor(dateDiff / (1000 * 60)) % 60;
  const second = Math.floor(dateDiff / 1000) % 60;

  // console.log(
  //     year, month, day, hour, minute, second, currentDate
  // )

  yearEl.innerHTML = makeTwoDigitNumber(year);
  monthEl.innerHTML = makeTwoDigitNumber(month);
  dayEl.innerHTML = makeTwoDigitNumber(day);
  hourEl.innerHTML = makeTwoDigitNumber(hour);
  minuteEl.innerHTML = makeTwoDigitNumber(minute);
  secondsEl.innerHTML = makeTwoDigitNumber(second);
};

// function to go next page and hold date of birth
const setDOB = () => {
  const dateString = dobInputEl.value;

  DateofBirth = dateString ? new Date(dateString) : null;

  // const year = localStorage.getItem('year');
  // const month = localStorage.getItem('month');
  // const date = localStorage.getItem('date');
  // if (year && month && date) {
  //     DateofBirth = new Date(year, month, date);
  // }

  if (DateofBirth) {
    // localStorage.setItem("year", DateofBirth.getFullYear());
    // localStorage.setItem("month", DateofBirth.getMonth());
    // localStorage.setItem("date", DateofBirth.getDate());

    initialTextEl.classList.add("hide");
    afterDOBbtnTextEl.classList.remove("hide");

    setInterval(() => updateAge(), 1000);
  } else {
    afterDOBbtnTextEl.classList.add("hide");
    initialTextEl.classList.remove("hide");
  }
};

setDOB();

settingcog.addEventListener("click", toggleDOB);
dobButtonEl.addEventListener("click", setDOB);
