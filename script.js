// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  const currentHour = new Date().getHours(); //defines current hour
  console.log(currentHour);
  const saveBtnEl = $(".saveBtn")

  saveBtnEl.on("click", function(){ 
    let time = $(this).parent().attr("id")
    let task = $(this).siblings(".description").val()
    localStorage.setItem(time, task); 
  })
});