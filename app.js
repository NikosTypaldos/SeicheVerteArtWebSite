$(function () {
    $(document).scroll(function() {
        var $nav = $(".navbar");
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
});

$(document).ready(function() {
    $('#submitBtn').click(function(event) {  
        alert("You will now be redirected to the mailing service");
        window.location = "mailto:nmtypaldos@yahoo.com";
    });
});


