// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  const currentHour = new Date().getHours();
  console.log(currentHour);

  const saveBtnEl = $(".saveBtn");

  saveBtnEl.on("click", function () {
    let time = $(this).parent().attr("id");
    let task = $(this).siblings(".description").val();
    localStorage.setItem(time, task);
  });
});

function updatedCurrentTime() {
  let currentTime = dayjs();
  let formattedTime = currentTime.format("h:mm A");
  let formattedDate = currentTime.format("dddd, MMMM D, YYYY");
  document.getElementById('currentTime').textContent = "Current Time: " + formattedTime;
  document.getElementById('currentDay').textContent = "Date: " + formattedDate;
}

updatedCurrentTime();

setInterval(updatedCurrentTime, 60000);
