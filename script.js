// display current date
var currentTime = moment().format('MMM Do h:mm A');
$('#currentDay').text(currentTime);

// eval hour and check box is past present or future
var past
var current 
var future
var taskHour
console.log(moment().format(''))
console.log($(".hour col-lg-2 col-sm-12"))
$(".row").each(function() {
   var divHour = parseInt($(this).attr("value"))
   // console.log(divHour)
   
   if(moment().format("H") < divHour) {
      $(this).addClass("past");
      
   }else if (moment().format("H") == divHour){
      $(this).addClass("present");
      
   } else if (moment().format("H") > divHour) { 
      $(this).addClass("future");
   }
   console.log(moment().format("H"))
});


// // click save button and save to local storage
// $( "col-2 saveBtn." ).click(function() {
//   localStorage.setItem(".row", $(".row".valueOf )
// )}

// to retrieve from local storage
// localStorage.getItem(".row", $(".row".valueOf ));


