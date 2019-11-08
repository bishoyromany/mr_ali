$(document).ready(function(){
    /**
     * run wow library
     */
    new WOW().init();

    /**
     * scroll to top
     */
    $("a[href='#top']").click(function() {
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });


    /**
     * add fixed top to navbar when banner is scrolled
     */
    $(document).on('scroll', function() {
        if($(document).scrollTop() >= $('#BannerMain').innerHeight()) {
            $("#navbar").addClass("fixed-top");
        }else{
            $("#navbar").removeClass("fixed-top");
        }
    })


    /**
     * show subnavbar for mobile
     */
    $("#showSubNavbar").click(function(){
        $(".linksOfNavbar").addClass('showNavBarMobile');
        $(".overlyNavbar").addClass("show");
    });
    /**
     * close navbar
     */
    $(".closeNavBar").click(function(){
        $(".linksOfNavbar").removeClass('showNavBarMobile');
        $(".overlyNavbar").removeClass("show");
    });
    $(".toggleSubNavLinks").click(function(){
        if(!$(this).hasClass('clicked_it')){
            $(".clicked_it").next('ul').slideUp();
            $(".clicked_it").removeClass('clicked_it');
        }
        $(this).toggleClass("clicked_it");
        $(this).next('ul').slideToggle();
    });

    // $(".navSubContainer").hover(function(){
    //     $(this).css('overflow' , '');
    // });
    // $(".navSubContainer").mouseleave(function(){
    //     $(this).css('overflow' , 'hidden');
    // });
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

    // animated scrolling to id
    function scrollToId(id , delay){
        $("html, body").animate({ scrollTop: $('#'+id).offset().top }, delay);
    }

    $('.hasSub ul li a').click(function(){
        console.log("clicked");
        var ids = $(this).attr('href').split('#');
        if(ids.length > 0){
            scrollToId(ids[1] , 1000); 
            window.location.href = $(this).attr('href');
            return false;
        }

    });

    var scrollIds = window.location.href.split('#');
    if(scrollIds.length > 0){
        setTimeout(function(){
            scrollToId(scrollIds[1] , 500);
        } , 1000);
    }



    /**
     * faqs 
     */
    $(".showNextFaqNow").click(function(){
        $(this).toggleClass("opened");
        $(this).next().slideToggle();
    });

    /**
     * rates country search
     */
    function searchCountryRates(el){
        var val = $(el).val().toLowerCase();
        var targets = $(el).next('table').children('tbody').children('tr');
        if(val.length > 0){
            for(var x = 0 ; x < targets.length ; x++){
                var country = $(targets[x]).children('.country').text().toLowerCase();
                var code = $(targets[x]).children('.code').text();
                var rate = $(targets[x]).children('.rate').text();
                if(val.search(country) > -1 || val.search(code) > -1 || val.search(rate) > -1){
                    $(targets[x]).show();
                }else{
                    $(targets[x]).hide();
                }
            }
        }else{
            $(el).next('table').children('tbody').children('tr').show();
        } 
    }
    $("#searchCountryRates").keyup(function(){
        searchCountryRates(this);
    });

});
