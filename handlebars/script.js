$(document).ready(function () {


$(document).on("click", '.invia', function () {
  var mexSent = $('.mex').val();
});


  var source = $("#entry-template").html();
  var template = Handlebars.compile(source);

  var context = {
    messaggio : mexSent
  };
  var html = template(context);

  $(".mex-container").append(html);

});
