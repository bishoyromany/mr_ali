$(document).ready(function(){function e(t,e){$("html, body").animate({scrollTop:$("#"+t).offset().top},e)}!function(){var t={facebook:"1629986620602076",whatsapp:"+1 (800) 123-4567",call_to_action:"Message us",button_color:"#129BF4",position:"right",order:"whatsapp,facebook"},e=document.location.protocol,a="getbutton.io",o=e+"//static."+a,n=document.createElement("script");n.type="text/javascript",n.async=!0,n.src=o+"/widget-send-button/js/init.js",n.onload=function(){WhWidgetSendButton.init(a,e,t)};var i=document.getElementsByTagName("script")[0];i.parentNode.insertBefore(n,i)}(),(new WOW).init(),$("a[href='#top']").click(function(){return $("html, body").animate({scrollTop:0},"slow"),!1}),$(document).on("scroll",function(){$(document).scrollTop()>=$("#BannerMain").innerHeight()?$("#navbar").addClass("fixed-top"):$("#navbar").removeClass("fixed-top")}),$("#showSubNavbar").click(function(){$(".linksOfNavbar").addClass("showNavBarMobile"),$(".overlyNavbar").addClass("show")}),$(".closeNavBar").click(function(){$(".linksOfNavbar").removeClass("showNavBarMobile"),$(".overlyNavbar").removeClass("show")}),$(".toggleSubNavLinks").click(function(){$(this).hasClass("clicked_it")||($(".clicked_it").next("ul").slideUp(),$(".clicked_it").removeClass("clicked_it")),$(this).toggleClass("clicked_it"),$(this).next("ul").slideToggle()}),$("#callTheVideo").click(function(t){t.preventDefault(),$("#theVideo").fadeIn(),$("#theVideo").addClass("activated")}),$("#theVideo").click(function(){$(this).fadeOut();var t=this;setTimeout(function(){$(t).removeClass("activated")},300),$("iframe").attr("src",$("iframe").attr("src"))}),$(".hasSub ul li a").click(function(){console.log("clicked");var t=$(this).attr("href").split("#");if(0<t.length)return e(t[1],1e3),window.location.href=$(this).attr("href"),!1});var t=window.location.href.split("#");function a(t){var e=$(t).val().toLowerCase(),a=$(t).next("table").children("tbody").children("tr");if(0<e.length)for(var o=0;o<a.length;o++){var n=$(a[o]).children(".country").text().toLowerCase(),i=$(a[o]).children(".code").text(),l=$(a[o]).children(".rate").text();-1<e.search(n)||-1<e.search(i)||-1<e.search(l)?$(a[o]).show():$(a[o]).hide()}else $(t).next("table").children("tbody").children("tr").show()}function a(t){var e=$(t).val().toLowerCase(),a=$(t).parent().nextAll("li");if(0<e.length)for(var o=0;o<a.length;o++){var n=$(a[o]).attr("value").toLowerCase(),i=$(a[o]).data("code").toLowerCase(),l=$(a[o]).data("dialing");-1<e.search(n)||e==i||parseInt(e)==parseInt(l)?($(a[o]).show(),console.log("show it")):($(a[o]).hide(),console.log("hide it"))}else $(t).parent().nextAll("li").show()}function c(t,e,a,o){var n=["First Name Is Required","Last Name Is Required","Email Is Required","Message Is Required","Please Choose A Country"];if(o){var i=$("#contactForm #firstName").val(),l=$("#contactForm #lastName").val(),s=$("#contactForm #email").val(),c=(e=$("#contactForm #message").val(),$("#contactForm #countrySelector").attr("value")),r=0;return i.length<1&&($("#contactForm #firstName").addClass("is-invalid"),$("#contactForm .firstName").html(n[0]),r++),l.length<1&&($("#contactForm #lastName").addClass("is-invalid"),$("#contactForm .lastName").html(n[1]),r++),s.length<1&&($("#contactForm #email").addClass("is-invalid"),$("#contactForm .email").html(n[2]),r++),e.length<1&&($("#contactForm #message").addClass("is-invalid"),$("#contactForm .message").html(n[3]),r++),c.length<1&&($("#contactForm #countrySelector").addClass("is-invalid"),$("#contactForm .countrySelector").html(n[4]),r++),r}return $(t).val().length<1?($("#contactForm #"+a).addClass("is-invalid"),$("#contactForm ."+a).html(n[e]),!1):($("#contactForm #"+a).removeClass("is-invalid"),$("#contactForm ."+a).html(""),!0)}0<t.length&&setTimeout(function(){e(t[1],500)},1e3),$(".showNextFaqNow").click(function(){$(this).toggleClass("opened"),$(this).next().slideToggle()}),$("#searchCountryRates").keyup(function(){a(this)}),$("#countrySelector").click(function(){$(this).next("ul").slideToggle(),$(this).toggleClass("it_down_now")}),$(".countryData").click(function(){var t=$(this).attr("value"),e=$(this).data("dialing"),a=$(this).html();$("#countrySelector").attr("value",t),$("#countrySelector").attr("data-dialing",e),$("#countrySelector").html(a),$(this).parent().slideToggle(),$("#countrySelector").toggleClass("it_down_now")}),$("#searchCountryInput").keyup(function(){a(this)}),$("#contactForm").submit(function(t){if(0<c(null,null,null,!0))return!1;var e=$("#message").val(),a=$("#firstName").val(),o=$("#lastName").val(),n=$("#phoneNumber").val(),i=$("#countrySelector").attr("value"),l=$("#countrySelector").attr("data-dialing"),s=n.split("");return n=0==s[0]?(s[0]=l,s.join("")):l+n,$("#message").val(e+" \n First Name : "+a+" \n Last Name : "+o+" \n  Phone Number : "+n+" \n  Country : "+i),!0}),$("#contactForm #firstName").keyup(function(){$(this).val();c(this,0,"firstName",!1)}),$("#contactForm #lastName").keyup(function(){$(this).val();c(this,0,"lastName",!1)}),$("#contactForm #email").keyup(function(){$(this).val();c(this,0,"email",!1)}),$("#contactForm #message").keyup(function(){$(this).val();c(this,0,"message",!1)})});