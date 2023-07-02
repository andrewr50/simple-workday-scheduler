$(document).ready(function () {
// save button listener
  $('.saveBtn').on('click', function() {
    var time = $(this).parent().attr('id');
    var value = $(this).siblings('.description').val();

    console.log(value)

    localStorage.setItem(time, value);
  });

  // sets class by time to display 
  function updateTime() {
    var time = dayjs().hour();

    $('.time-block').each(function () {
      var hour = parseInt($(this).attr('id').split('-')[1])

      if (hour < time) {
        $(this).removeClass('past');
        $(this).addClass('past');
      } else if (hour == time) {
        $(this).removeClass('past');
        $(this).addClass('present');

      } else {
        $(this).removeClass('past');
        $(this).removeClass('present');
        $(this).addClass('future');
      }
    })
  }

  updateTime();

  setInterval(updateTime, 15000);
// updates current day
  $('#currentDay').text(dayjs().format('dddd, MMMM D, YYYY'));
// saves to local storage
  for (i = 9; i <= 17; i++) {
    $(`#hour-${i} .description`).val(localStorage.getItem(`hour-${i}`));
  };

});

