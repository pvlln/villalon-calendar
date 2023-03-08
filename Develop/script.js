$(function () {
  // Store the main div in variable
  var timeBlock = $('.time-block');
  // Add event listener and create function to save user inputs
  timeBlock.on('click', '.saveBtn', function(event){
    // Target the id to identify the timestamp
    var hourId = $(this).parent('div').attr('id');
    // Take the input by the user
    var userInput = $(this).parent().children().eq(1).val();
    // Check in console
    console.log(hourId, userInput);
    // Store in local storage
    localStorage.setItem(hourId, userInput);
  })
  // Create variable with current dayjs info.
  var now = dayjs();
  // Retrieve hour
  var currentHour = now.hour();
  // Create array of timeslot elements in html
  var timeSlots = $('.time-slots').children();
  // Console check
  console.log(currentHour, timeSlots);
  // Loop that adds classes to the timeslots
  for (let i=0; i < timeSlots.length; i++){
    var timeStamp = $(timeSlots[i]).attr('id');
    var inputField = $(timeStamp).children('textarea');
    var hourNo = timeStamp.split('-');
    var hourInt = parseInt(hourNo[1]);
    if (hourInt < currentHour){
      $(timeSlots[i]).addClass('past');
    } else if (hourInt == currentHour){
      $(timeSlots[i]).addClass('present');
    } else {
      $(timeSlots[i]).addClass('future');
    }
    // forEach loop that iterates through all items in local storage
    Object.keys(localStorage).forEach(function(key){
      // Considitional that checks if key matches a timestamp
      if (key == timeStamp){
        var item = localStorage.getItem(key);
        // Print value in timestamp
        $(timeSlots[i]).children('textarea').text(item);
        console.log(item);
      }
      else {
        console.log("No match", key);
      }
    });
  }
  // Add current date at the top of the page.
  var formattedDay = now.format('[Today is] MMM D, YYYY');
  $('#currentDay').text(formattedDay);
});
