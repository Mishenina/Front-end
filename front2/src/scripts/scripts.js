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
            nunjucks.render('./partials/article.html', data, function(err, res) {
                $('.js-articles').append(res);
            });
        }
    });
    $(".js-burger").click(function() {
        $(".js-sidebar").slideToggle(300);
    });

    /*  $('#about').on('submit', function(e) {
    	e.preventDefault()
    	debugger
      });
    */

    $(function() {
        $(".datepicker").datepicker();
    });

    $(".js-inputmask[name=date]").inputmask("");
    $(".js-inputmask[name=phone]").inputmask("+9(999)999-99-99");
    // $(".js-inputmask-email").inputmask("");


    $(".js-inputmask[name=firstname]").onblur = function() {
        if (this.value == "") {
            error.innerHTML = 'Enter name';
        } else {
            error.innerHTML = "";
        }
    };

});
