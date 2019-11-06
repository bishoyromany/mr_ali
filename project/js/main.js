$(document).ready(function(){
    /**
     * run wow library
     */
    new WOW().init();


    /**
     * show video
     */
    $("#callTheVideo").click(function(e){
        e.preventDefault();
        $("#theVideo").fadeIn();
        $("#theVideo").addClass('activated');
    });

    /**
     * hide video
     */
    $("#theVideo").click(function(){
        $(this).fadeOut();
        var that = this;
        setTimeout(function(){
            $(that).removeClass("activated");
        }, 300);
        $('iframe').attr('src', $('iframe').attr('src'));
    });
});
