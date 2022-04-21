"use strict";


$(function () {
	$(document).scroll(function () {
	  var $nav = $("#toggle_menu_wrapper");
	  $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());

	  var $agent = $(".headerAgentInfo");
	  $agent.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
	});
  });

  //Masonry Gallery
  $(window).load(function() {

	$("section img").click(function() {
	  $(".lightbox").fadeIn(300);
	  $(".lightbox").append("<img src='" + $(this).attr("src") + "' alt='" + $(this).attr("alt") + "' />");
	  $(".filter").css("background-image", "url(" + $(this).attr("src") + ")");
	  /*$(".title").append("<h1>" + $(this).attr("alt") + "</h1>");*/
	  $("html").css("overflow", "hidden");
	  if ($(this).is(":last-child")) {
		$(".arrowr").css("display", "none");
		$(".arrowl").css("display", "block");
	  } else if ($(this).is(":first-child")) {
		$(".arrowr").css("display", "block");
		$(".arrowl").css("display", "none");
	  } else {
		$(".arrowr").css("display", "block");
		$(".arrowl").css("display", "block");
	  }
	});
  
	$(".close").click(function() {
	  $(".lightbox").fadeOut(300);
	  $("h1").remove();
	  $(".lightbox img").remove();
	  $("html").css("overflow", "auto");
	});
  
	$(document).keyup(function(e) {
	  if (e.keyCode == 27) {
		$(".lightbox").fadeOut(300);
		$(".lightbox img").remove();
		$("html").css("overflow", "auto");
	  }
	});
  
	$(".arrowr").click(function() {
	  var imgSrc = $(".lightbox img").attr("src");
	  var search = $("section").find("img[src$='" + imgSrc + "']");
	  var newImage = search.next().attr("src");
	  /*$(".lightbox img").attr("src", search.next());*/
	  $(".lightbox img").attr("src", newImage);
	  $(".filter").css("background-image", "url(" + newImage + ")");
  
	  if (!search.next().is(":last-child")) {
		$(".arrowl").css("display", "block");
	  } else {
		$(".arrowr").css("display", "none");
	  }
	});
  
	$(".arrowl").click(function() {
	  var imgSrc = $(".lightbox img").attr("src");
	  var search = $("section").find("img[src$='" + imgSrc + "']");
	  var newImage = search.prev().attr("src");
	  /*$(".lightbox img").attr("src", search.next());*/
	  $(".lightbox img").attr("src", newImage);
	  $(".filter").css("background-image", "url(" + newImage + ")");
  
	  if (!search.prev().is(":first-child")) {
		$(".arrowr").css("display", "block");
	  } else {
		$(".arrowl").css("display", "none");
	  }
	});
  
  });


// Preloader
 function preloadFunction () {
   if ($('#loader').length) {
     $('#loader').fadeOut(); // will first fade out the loading animation
     $('#loader-wrapper').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
     $('body').delay(350).css({'overflow':'visible'});
  };
 }




// Language switcher --leave this or else it breaks the slider.... IDK
function languageSwitcher () {
	if ($("#polyglot-language-options").length) {
			$('#polyglotLanguageSwitcher').polyglotLanguageSwitcher({
				effect: 'fade',
                testMode: true,
                onChange: function(evt){
                    alert("The selected language is: "+evt.selectedItem);
                }
//                ,afterLoad: function(evt){
//                    alert("The selected language has been loaded");
//                },
//                beforeOpen: function(evt){
//                    alert("before open");
//                },
//                afterOpen: function(evt){
//                    alert("after open");
//                },
//                beforeClose: function(evt){
//                    alert("before close");
//                },
//                afterClose: function(evt){
//                    alert("after close");
//                }
			});
	};
}



// Home Page One Banner
function mainBanner () {
	if($("#main_slider").length) {
		$("#main_slider").vegas({
		    slides: [
		        { src: "images/home/slide-1.jpg" },
		        { src: "images/home/slide-2.jpg" },
		        { src: "images/home/slide-3.jpg" },
				{ src: "images/home/slide-4.jpg" },
				{ src: "images/home/slide-5.jpg" },
		    ],

		    transition: [ 'fade', 'zoomOut', 'swirlLeft' ]
		});

		$('button#previous').on('click', function () {
			    $("#main_slider").vegas('options', 'transition', 'zoomOut').vegas('previous');
			});

			$('button#next').on('click', function () {
			    $("#main_slider").vegas('options', 'transition', 'slideLeft2').vegas('next');
			});

	}
}




// Main-banner slider 
function mainRevBanner () {
		  if ($("#banner_rev_slider").length) {
		    $("#banner_rev_slider").revolution({
				sliderType:"standard",
				sliderLayout:"auto",
				onHoverStop: 'off',
				loops:true,
				delay:9000,
				navigation: {
					arrows: {
					  style: "hades",
					  enable: true,
					  hide_onmobile: false,
					  hide_onleave: false,
					  tmp: '<div class="tp-arr-allwrapper"> <div class="tp-arr-imgholder"></div></div>',
					  left: {
						  h_align: "left",
						  v_align: "center",
						  h_offset: 10,
						  v_offset: 0
					  },
					  right: {
						  h_align: "right",
						  v_align: "center",
						  h_offset: 10,
						  v_offset: 0
					  }
				  },
				   bullets: {
							enable: false,
							hide_onmobile: false,
							style: "uranus",
							hide_onleave: false,
							direction: "horizontal",
							h_align: "center",
							v_align: "bottom",
							h_offset: 0,
							v_offset: 70,
							space: 10,
							tmp: '<span class="tp-bullet-inner"></span>'
						}
  
				},
				responsiveLevels:[2220,1183,975,751],
						  gridwidth:[1170,970,770,580],
						  gridheight:[900,900,900,900],
						  shadow:0,
						  spinner:"off",
						  autoHeight:"off",
						  disableProgressBar:"on",
						  hideThumbsOnMobile:"off",
						  hideSliderAtLimit:0,
						  hideCaptionAtLimit:0,
						  hideAllCaptionAtLilmit:0,
						  debugMode:false,
						  fallbacks: {
							simplifyAll:"off",
							disableFocusListener:false,
						  }
		  }); 
	  };
}



// Toggle Menu for index 5
function toggleMenuDesktop () {
	if($("#toggle_menu_wrapper").length) {
		$(".toggle_button").on('click', function() {
			$('.toggle_dropdown').addClass("open_toggle");
			$('.toggle_dropdown .main_menu').fadeIn(1300);
		});
		$(".toggle_button.dismiss").on('click', function() {
			$('.toggle_dropdown').removeClass("open_toggle");
			$('.toggle_dropdown .main_menu').fadeOut(100);
		});
	} 
}




// Select menu 
function selectDropdown () {
	if($(".selectmenu").length) {
		$( ".selectmenu" ).selectmenu();
	};
}





// Fancybox Video
function FancypopUpVideo () {
	if ($(".fancy_video").length) {
			$(".fancy_video").fancybox({
			maxWidth	: 1080,
			maxHeight	: 720,
			fitToView	: false,
			width		: '70%',
			height		: '70%',
			autoSize	: false,
			closeClick	: false,
			openEffect	: 'none',
			closeEffect	: 'none'
		});
	};
}



//Contact Form Validation
function contactFormValidation () {
  if($('.form-validation').length){
    $('.form-validation').validate({ // initialize the plugin
      rules: {
        name: {
          required: true
        },
        email: {
          required: true,
          email: true
        },
        message: {
          required: true
        },
        web: {
          required: true
        }
      },
      submitHandler: function(form) {
                $(form).ajaxSubmit({
                    success: function() {
                        $('.form-validation :input').attr('disabled', 'disabled');
                        $('.form-validation').fadeTo( "slow", 1, function() {
                            $(this).find(':input').attr('disabled', 'disabled');
                            $(this).find('label').css('cursor','default');
                            $('#alert_success').fadeIn();
                        });
                    },
                    error: function() {
                        $('.form-validation').fadeTo( "slow", 1, function() {
                            $('#alert_error').fadeIn();
                        });
                    }
                });
            }
        });
  }
}



// Scroll to top
function scrollToTop () {
  if ($('.scroll-top').length) {

    //Check to see if the window is top if not then display button
    $(window).scroll(function(){
      if ($(this).scrollTop() > 400) {
        $('.scroll-top').fadeIn();
      } else {
        $('.scroll-top').fadeOut();
      }
    });
    
    //Click event to scroll to top
    $('.scroll-top').on('click', function(){
      $('html, body').animate({scrollTop : 0},1500);
      return false;
    });
  }
}


// DOM ready function
jQuery(document).on('ready', function() {
	languageSwitcher ();
	mainBanner ();
	mainRevBanner();
	toggleMenuDesktop ();
	selectDropdown();
	FancypopUpVideo ();
	contactFormValidation ();
	scrollToTop ();
});



// Window load function
jQuery(window).on('load', function () {
   (function ($) {
    preloadFunction();
  })(jQuery);
 });