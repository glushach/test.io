
$(document).ready(function(){
  $('#phone').focus(function() {
    $('#hint').hide();
  });

  $('input[name=phone]').mask("+7 (999) 999-99-99"); 
  
  $('#phone').blur(function() {
    if ($(this).val().trim() === '') {
        $('#hint').show();
    }
  });
});