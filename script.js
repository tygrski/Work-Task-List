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
});

// click button and save to local storage
function saveList() {
   // console.log(this)
   var textInput = $(this).siblings("textarea").val()
   var taskHour = $(this).parent().attr("id")
   // console.log("enter-SaveList:", textInput, taskHour)
   localStorage.setItem("toDoInput"+taskHour, textInput)
};
$(".saveBtn").on("click", saveList);
   
localStorage.getItem("toDoInput"+taskHour, textInput);
   
   // to retrieve from local storage
// localStorage.getItem
// localStorage.getItem(".row", $(".row".valueOf ));


