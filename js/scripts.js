$(document).ready(function() {
  $('.clickable').click(function() {
    $('#walrus-showing').fadeToggle();
    $('#walrus-hidden').fadeToggle();
    $('#penguin-up').slideToggle();
    $('#penguin-down').slideToggle();
  });
});