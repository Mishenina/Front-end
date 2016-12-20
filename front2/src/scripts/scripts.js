$(document).ready(function() {
    nunjucks.configure({
        autoescape: true,
        web: {
            async: true
        }
    });
    $.ajax({
    url: "./mockapi/getAllArticles.json",
    success: function(data, status) {
        nunjucks.render('./partials/article.html', data, function (err, res) {
            $('.js-articles').append(res);      
        });        
    }
  });
    $(".js-burger").click(function() {
        $(".js-sidebar").slideToggle(300);
    });

 $( function() {
        $(".datepicker").datepicker();
    });

  //$(".test").inputmask("99-9999999");  //static mask
});

