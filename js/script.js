$(document).ready(function(){
  $(function() {
 //Datepicker
  $('#startingDate').datepicker({
  format: "dd-mm-yy",
  startDate: '-1y -1m',
  endDate: '+2m +10d'
  });
      $('#endingDate').datepicker({
       format: "dd-mm-yy",
       startDate: '-1m',
       endDate: '+10d'
      });

        });


//timepicker
$('#timepicker').timepicker({
    timeFormat: 'h:mm p',
    interval: 60,
    minTime: '10',
    maxTime: '10:00pm',
    defaultTime: '11',
    startTime: '10:00',
    dynamic: false,
    dropdown: true,
    scrollbar: true
});


//$(function(){
//$("#wizard").steps({
//headerTag: "h4",
//bodyTag: "section",
//transitionEffect: "fade",
//enableAllSteps: true,
//transitionEffectSpeed: 500,
//onStepChanging: function (event, currentIndex, newIndex) {
//if ( newIndex === 1 ) {
//$('.steps ul').addClass('step-2');
//} else {
//$('.steps ul').removeClass('step-2');
//}
//if ( newIndex === 2 ) {
//$('.steps ul').addClass('step-3');
//} else {
//$('.steps ul').removeClass('step-3');
//}
//
//if ( newIndex === 3 ) {
//$('.steps ul').addClass('step-4');
//$('.actions ul').addClass('step-last');
//} else {
//$('.steps ul').removeClass('step-4');
//$('.actions ul').removeClass('step-last');
//}
//return true;
//},
//labels: {
//finish: "Order again",
//next: "Next",
//previous: "Previous"
//}
//});
//// Custom Steps Jquery Steps
//$('.wizard > .steps li a').click(function(){
//$(this).parent().addClass('checked');
//$(this).parent().prevAll().addClass('checked');
//$(this).parent().nextAll().removeClass('checked');
//});
//// Custom Button Jquery Steps
//$('.forward').click(function(){
//$("#wizard").steps('next');
//})
//$('.backward').click(function(){
//$("#wizard").steps('previous');
//})
//// Checkbox
//$('.checkbox-circle label').click(function(){
//$('.checkbox-circle label').removeClass('active');
//$(this).addClass('active');
//})
//})

  $("#city").autocomplete({
    source: function(request, response){
       $.ajax({
          url: 'country.json',
          type: 'GET',
          dataType: 'json',

          data: {
               term: request.term
          },
          success: function(data){
              console.log(data);
          }
       })
    }
  });
});
