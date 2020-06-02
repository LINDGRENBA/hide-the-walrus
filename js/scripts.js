$(document).ready(function() {
  $('.walrus-clickable').click(function() {
    $('#walrus-showing').fadeToggle();
    $('#walrus-hidden').fadeToggle();

  });

  $(".clickable").click(function() {
    $('#penguin-up').slideToggle();
    $('#penguin-down').slideToggle();
  });

  $('.fact-clickable').click(function() {
    $('#fact-down').slideDown();
  });
});