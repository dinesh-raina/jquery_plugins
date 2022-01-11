$(document).ready(function(){
  $(function() {
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

  $('#imyTimePicker').pickatime({
    twelvehour: true,
    min: "8:20am",
    max: "5:15pm"
  });


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
              response(data);
          }
       })
    }
  });
});
