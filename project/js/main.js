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


    /**
     * validate contact us form
     */
    function validateContactForm(el , message , name ,all){
        var messages = [
            'First Name Is Required',
            'Last Name Is Required',
            'Email Is Required',
            'Message Is Required',
        ];
        if(all){
            var firstName = $("#contactForm #firstName").val();
            var lastName = $("#contactForm #lastName").val();
            var email = $("#contactForm #email").val();
            var message = $("#contactForm #message").val();

            var x = 0;

            if(firstName.length < 1){
                $("#contactForm #firstName").addClass("is-invalid");
                $("#contactForm .firstName").html(messages[0]);
                x++;
            }

            if(lastName.length < 1){
                $("#contactForm #lastName").addClass("is-invalid");
                $("#contactForm .lastName").html(messages[1]);
                x++;
            }

            if(email.length < 1){
                $("#contactForm #email").addClass("is-invalid");
                $("#contactForm .email").html(messages[2]);
                x++;
            }

            if(message.length < 1){
                $("#contactForm #message").addClass("is-invalid");
                $("#contactForm .message").html(messages[3]);
                x++;
            }

            return x;
        }else{
            var val = $(el).val();
            if(val.length < 1){
                $("#contactForm #"+name).addClass("is-invalid");
                $("#contactForm ."+name).html(messages[message]);
                return false;
            }else{
                $("#contactForm #"+name).removeClass("is-invalid");
                $("#contactForm ."+name).html('');
                return true;
            }
        }
    }

    $("#contactForm").submit(function(){
        var result = validateContactForm(null , null , null , true);
        if(result > 0){
            return false;
        }

        var messageValue = $("#message").val();
        var firstName = $("#firstName").val();
        var lastName = $("#lastName").val();
        var phoneNumber = $("#phoneNumber").val();

        // add the new textarea values 
        $("#message").val(messageValue + " \n " + "First Name : " + firstName + " \n " + "Last Name : " + lastName + " \n " + " Phone Number : " + phoneNumber);
        return true;
    });

    $("#contactForm #firstName").keyup(function(){
        var val = $(this).val();
        validateContactForm(this , 0 , 'firstName' , false);
    });

    $("#contactForm #lastName").keyup(function(){
        var val = $(this).val();
        validateContactForm(this , 0 , 'lastName' , false);
    });
    $("#contactForm #email").keyup(function(){
        var val = $(this).val();
        validateContactForm(this , 0 , 'email' , false);
    });
    $("#contactForm #message").keyup(function(){
        var val = $(this).val();
        validateContactForm(this , 0 , 'message' , false);
    });
});
