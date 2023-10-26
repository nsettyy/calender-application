$(function () {
  const currentHour = new Date().getHours(); 
  console.log(currentHour);
  
  const saveBtnEl = $(".saveBtn")

  saveBtnEl.on("click", function(){ 
    let time = $(this).parent().attr("id")
    let task = $(this).siblings(".description").val()
    localStorage.setItem(time, task); 
  })
 

function updateCurrentTime() { 
  let currentTime = dayjs();
  let formattedTime = currentTime.format("h:mm A");
  let formattedDate = currentTime.format("dddd, MMMM D, YYYY");
  document.getElementById('currentTime').textContent = "Current Time: " + formattedTime;
  document.getElementById('currentDay').textContent = "Date: " + formattedDate;
}

updateCurrentTime();

setInterval(updateCurrentTime, 60000); 
  

$(".time-block").each(function () { 
  const blockHour = parseInt($(this).attr("id").split("-")[1]); 
  if (blockHour < currentHour) {
    $(this).addClass('past');
   } else if (blockHour === currentHour) {
    $(this).removeClass('past');
    $(this).addClass('present');
   } else {
    $(this).removeClass('past');
    $(this).removeClass('present');
    $(this).addClass('future');
   }
  });


  for (let i = 9; i < 17; i++){ 
  $("#hour-" + i + " .description").val(localStorage.getItem("hour-" + i))}
  
});