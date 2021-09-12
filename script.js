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
   var textInput = $(".col-8").value;
   var saveList = () => {
      console.log("enter-SaveList")
     localStorage.setItem("toDoInput", textInput.textContent)}
   $(":button").click(saveList);
     
   
   // to retrieve from local storage
// localStorage.getItem
// localStorage.getItem(".row", $(".row".valueOf ));


