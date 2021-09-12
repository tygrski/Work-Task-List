// display current date
var currentTime = moment().format('MMM Do h:mm A');
$('#currentDay').text(currentTime);

// eval hour and check box is past present or future
$(".row").each(function() {
   var divHour = parseInt($(this).attr("value"));
   
   if(moment().format("H") < divHour) {
      $(this).addClass("past");
      
   } else if(moment().format("H") == divHour){
      $(this).addClass("present");
      
   } else if(moment().format("H") > divHour) { 
      $(this).addClass("future");
   }
  if (localStorage.getItem("toDoInput" + divHour) != null) {
   $("textarea", this).val(localStorage.getItem("toDoInput" + divHour))
};
});

// click button and save to local storage
function saveList() {
   var taskHour = $(this).parent().attr("id")
   var textInput = $(this).siblings("textarea").val()
   localStorage.setItem("toDoInput"+taskHour, textInput)
};

$(".saveBtn").on("click", saveList);

// to retrieve from local storage 
   $("textarea", this).val(localStorage.getItem("toDoInput"));

   



