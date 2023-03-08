$(function () {
  var timeBlock = $('.time-block');
  timeBlock.on('click', '.saveBtn', function(event){
    var hourId = $(this).parent('div').attr('id');
    var userInput = $(this).parent().children().eq(1).val();
    console.log(hourId, userInput);
    localStorage.setItem(hourId, userInput);
  })

  var now = dayjs();
  var currentHour = now.hour();
  var timeSlots = $('.time-slots').children();
  console.log(currentHour, timeSlots);
  for (let i=0; i < timeSlots.length; i++){
    var timeStamp = $(timeSlots[i]).attr('id');
    var inputField = $(timeStamp).children('textarea');
    var hourNo = timeStamp.split('-');
    var hourInt = parseInt(hourNo[1]);
    if (hourInt < currentHour){
      $(timeSlots[i]).addClass('past');
    } else if (hourInt[1] == currentHour){
      $(timeSlots[i]).addClass('present');
    } else {
      $(timeSlots[i]).addClass('future');
    }

    // NOT WORKING- REVISE
    Object.keys(localStorage).forEach(function(key){
      if (key == timeStamp){
        var item = localStorage.getItem(key);
        $(inputField).text(item);
      }
    });
  }
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  var formattedDay = now.format('[Today is] MMM D, YYYY');
  $('#currentDay').text(formattedDay);
});
