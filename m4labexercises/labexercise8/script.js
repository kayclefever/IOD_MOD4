function displayResult(message) {
  const outputDiv = document.getElementById("output");
  const paragraph = document.createElement("p");
  paragraph.textContent = message;
  outputDiv.appendChild(paragraph);
}

const birthDate = moment("1999-04-24");
const currentDate = moment();
const daysDifference = currentDate.diff(birthDate, "days");
displayResult(
  `Number of days between my birthday and today: ${daysDifference}`
);

const years = currentDate.diff(birthDate, "years");
birthDate.add(years, "years");
const months = currentDate.diff(birthDate, "months");
birthDate.add(months, "months");
const days = currentDate.diff(birthDate, "days");
displayResult(
  `Time between my birthday and today: ${years} years, ${months}, months ${days} days`
);

const date1 = moment("1995-12-28");
const date2 = moment("2008-08-04");
const closestDate =
  Math.abs(date1.diff(currentDate)) < Math.abs(date2.diff(currentDate))
    ? date1
    : date2;
displayResult(`Date closest to today: ${closestDate.format("YYYY-MM-DD")}`);

if (date1.isBefore(date2)) {
  displayResult(`The first date is before the second date.`);
} else if (date1.isAfter(date2)) {
  displayResult(`The first date is after the second date.`);
} else {
  displayResult(`The two dates are the same`);
}

const londonTime = moment.tz(`Europe/London`);
displayResult(`Current time in London: ${londonTime.format("HH:mm:ss")}`);
