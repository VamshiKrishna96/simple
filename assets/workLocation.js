$("#header").load("header.html");
$("#footer").load("footer.html");

function toggler(divId) {
  $("#" + divId).toggle();
}

$(document).ready(function(){
  $('.js-edit, .js-save').on('click', function(){
    var $form = $(this).closest('form');
    $form.toggleClass('is-readonly is-editing');
    var isReadonly  = $form.hasClass('is-readonly');
    $form.find('input,textarea').prop('disabled', isReadonly);
  });
});
