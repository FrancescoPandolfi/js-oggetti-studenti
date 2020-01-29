$(document).ready(function () {

var mexSent;
$(document).on("click", '.invia', function () {

  mexSent = $('.mex').val();


  var source = $("#entry-template").html();
  var template = Handlebars.compile(source);

  var context = {
    messaggio : mexSent
  };
  var html = template(context);

  $(".mex-container").append(html);

  });

});
