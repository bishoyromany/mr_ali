$(document).ready(function(){

    (function () {
        var options = {
            whatsapp: "+1 (800) 123-4567", // WhatsApp number
            call_to_action: "Message us", // Call to action
            position: "right", // Position may be 'right' or 'left'
        };
        var proto = document.location.protocol, host = "getbutton.io", url = proto + "//static." + host;
        var s = document.createElement('script'); s.type = 'text/javascript'; s.async = true; s.src = url + '/widget-send-button/js/init.js';
        s.onload = function () { WhWidgetSendButton.init(host, proto, options); };
        var x = document.getElementsByTagName('script')[0]; x.parentNode.insertBefore(s, x);
    })();

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


    /**custom
     * select box for contact us
     */
    $("#countrySelector").click(function(){
        $(this).next('ul').slideToggle();
        $(this).toggleClass("it_down_now");
    });
    $(".countryData").click(function(){
        var value = $(this).attr('value');
        var dialing = $(this).data('dialing');
        var allHTML = $(this).html();
        $("#countrySelector").attr('value' , value);
        $("#countrySelector").attr('data-dialing' , dialing);
        $("#countrySelector").html(allHTML);
        $(this).parent().slideToggle();
        $("#countrySelector").toggleClass("it_down_now");
    });

    /**
     * @param {target element} el 
     */
    function searchCountryRates(el){
        var val = $(el).val().toLowerCase();
        var targets = $(el).parent().nextAll('li');
        if(val.length > 0){
            for(var x = 0 ; x < targets.length ; x++){
                var country = $(targets[x]).attr('value').toLowerCase();
                var code = $(targets[x]).data('code').toLowerCase();
                var dialing = $(targets[x]).data('dialing');

                if(val.search(country) > -1 || val == code || parseInt(val) == parseInt(dialing)){
                    $(targets[x]).show();
                    console.log("show it");
                }else{
                    $(targets[x]).hide();
                    console.log("hide it");
                }
            }
        }else{
            $(el).parent().nextAll('li').show();
        } 
    }


    $("#searchCountryInput").keyup(function(){
        searchCountryRates(this);
    });


    /**
     * validate contact us form
     */

    function validateEmail(email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    function validateContactForm(el , message , name ,all){
        var messages = [
            'Name Is Required',
            'Valid Email Is Required',
            'Message Is Required',
            'Please Choose A Country',
            'Please Choose A Valid Department',
        ];
        if(all){
            var userName = $("#contactForm #userName").val();
            var department = $("#contactForm #SupportSectionSelector").val();
            var email = $("#contactForm #email").val();
            var message = $("#contactForm #message").val();
            var country = $("#contactForm #countrySelector").attr("value");

            var x = 0;

            if(userName.length < 1){
                $("#contactForm #userName").addClass("is-invalid");
                $("#contactForm .userName").html(messages[0]);
                x++;
            }

            if(department.length < 1){
                $("#contactForm #SupportSectionSelector").addClass("is-invalid");
                $("#contactForm .selectPart").html(messages[4]);
                x++;
            }

            if(email.length < 1 || !validateEmail(email)){
                $("#contactForm #email").addClass("is-invalid");
                $("#contactForm .email").html(messages[1]);
                x++;
            }

            if(message.length < 1){
                $("#contactForm #message").addClass("is-invalid");
                $("#contactForm .message").html(messages[2]);
                x++;
            }

            if(country.length < 1){
                $("#contactForm #countrySelector").addClass("is-invalid");
                $("#contactForm .countrySelector").html(messages[3]);
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
                if(name=="email"){
                    if(!validateEmail(val)){
                        $("#contactForm #"+name).addClass("is-invalid");
                        $("#contactForm ."+name).html(messages[message]);
                        return false;
                    }
                }
                $("#contactForm #"+name).removeClass("is-invalid");
                $("#contactForm ."+name).html('');
                return true;
            }
        }
    }

    $("#contactForm").submit(function(e){
        // e.preventDefault();
        var result = validateContactForm(null , null , null , true);
        if(result > 0){
            return false;
        }

        var messageValue = $("#message").val();
        var department = $("#SupportSectionSelector").val();
        var userName = $("#userName").val();
        var phoneNumber = $("#phoneNumber").val();
        var country = $("#countrySelector").attr('value');
        var dialing = $("#countrySelector").attr('data-dialing');
        var allNums = phoneNumber.split('');
        if(allNums[0] == 0){
            allNums[0] = dialing;
            phoneNumber = allNums.join('');
        }else{
            phoneNumber = dialing+phoneNumber;
        }
        // add the new textarea values 
        $("#message").val(messageValue + " \n " + "Name : " + userName + " \n " + "Department : " + department + " \n " + " Phone Number : " + phoneNumber + " \n " + " Country : " + country);
        
        return true;
    });

    $("#contactForm #userName").keyup(function(){
        var val = $(this).val();
        validateContactForm(this , 0 , 'userName' , false);
    });

    $("#contactForm #lastName").keyup(function(){
        var val = $(this).val();
        validateContactForm(this , 0 , 'lastName' , false);
    });


    $("#contactForm #email").keyup(function(){
        var val = $(this).val();
        validateContactForm(this , 1 , 'email' , false);
    });
    $("#contactForm #message").keyup(function(){
        var val = $(this).val();
        validateContactForm(this , 1 , 'message' , false);
    });
});
