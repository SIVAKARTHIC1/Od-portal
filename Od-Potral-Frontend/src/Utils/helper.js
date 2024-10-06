function formatDate(dateString) {
  const date = new Date(dateString);

  const year = date.getFullYear();
  const month = date.getMonth() + 1; 
  const day = date.getDate();

  return `${day.toString().padStart(2, "0")}-${month
      .toString()
      .padStart(2, "0")}-${year}`
}

function formateTime(time) {
  const [hour, minute] = time.split(":");
  const hours = parseInt(hour, 10);
  const ampm = hours >= 12 ? "PM" : "AM";
  const twelveHourFormat = hours % 12 || 12;
  const formattedTime = `${twelveHourFormat}:${minute} ${ampm}`;

  return formattedTime;
}

export { formatDate, formateTime };
