$(function () {
  //get the current hour and logs it to local storage to make sure it is working correctly
  var currentHour = new Date().getHours();
  console.log(currentHour);

  //gets the save buttton class and makes it a variable
  var saveBtnEl = $(".saveBtn");

  //adds event listener to the save button to save the data to local storage
  saveBtnEl.on("click", function () {
    var time = $(this).parent().attr("id");
    var task = $(this).siblings(".description").val();
    localStorage.setItem(time, task);
  });

  //uses dayjs to display the current data and time on the top of the page and updates it every minute
  function updateCurrentTime() {
    var currentTime = dayjs();
    var formattedTime = currentTime.format("h:mm A");
    var formattedDate = currentTime.format("dddd, MMMM D, YYYY");
    document.getElementById("currentTime").textContent =
      "Current Time: " + formattedTime;
    document.getElementById("currentDay").textContent =
      "Date: " + formattedDate;
  }
  updateCurrentTime();
  setInterval(updateCurrentTime, 60000);

  //changes the time block colors based on past, present or future
  $(".time-block").each(function () {
    var blockHour = parseInt($(this).attr("id").split("-")[1]);
    if (blockHour < currentHour) {
      $(this).addClass("past");
    } else if (blockHour === currentHour) {
      $(this).removeClass("past");
      $(this).addClass("present");
    } else {
      $(this).removeClass("past");
      $(this).removeClass("present");
      $(this).addClass("future");
    }
  });

  //retrieves saved local storage data and keeps it on the page
  for (let i = 9; i < 17; i++) {
    $("#hour-" + i + " .description").val(localStorage.getItem("hour-" + i));
  }
});
