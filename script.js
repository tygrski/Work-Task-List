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
   var textInput = document.querySelector(".col-8");
   $(".col-2 saveBtn").click(function() {
   storageInput.addEventListeneer('textarea', data =>{
      console.log(data.target.value)
      textInput.textContent = data.target.value
   })
});
// to retrieve from local storage
localStorage.getItem
// localStorage.getItem(".row", $(".row".valueOf ));


