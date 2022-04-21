/*!
* Start Bootstrap - Bare v5.0.4 (https://startbootstrap.com/template/bare)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-bare/blob/master/LICENSE)
*/
$(document).on('ready', function () {
    // Slick Slider
    $(".mySlick").slick({
        autoplay: true,
        autoplaySpeed: 10000,
        arrows: false,
        lazyLoad: 'progressive',
        dots: false,
        speed: 2000,
        fade: true,
        cssEase: 'linear',
        focusOnSelect: false,
        pauseOnHover: false,
        continuous: 0,
        timeout: 3000,
    });
});

// Featured section
(function () {
    document.querySelector("#one").addEventListener("change", function () {
        document.querySelector(".one").style.display = "flex";
        document.querySelector(".two").style.display = "none";
        document.querySelector(".three").style.display = "none";
    });

    document.querySelector("#two").addEventListener("change", function () {
        document.querySelector(".one").style.display = "none";
        document.querySelector(".two").style.display = "flex";
        document.querySelector(".three").style.display = "none";

        document.querySelector("#three").addEventListener("change", function () {
            document.querySelector(".one").style.display = "none";
            document.querySelector(".two").style.display = "none";
            document.querySelector(".three").style.display = "flex";
        });
    });


})();

// Show more text
function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "Read less";
        moreText.style.display = "inline";
    }
}

//Gallery
$(window).load(function () {

    $(".gallery div img").click(function () {
        $(".lightbox").fadeIn(300);
        $(".lightbox").append("<img src='" + $(this).attr("src") + "' alt='" + $(this).attr("alt") + "' />");
        $(".filter").css("background-image", "url(" + $(this).attr("src") + ")");
        /*$(".title").append("<h1>" + $(this).attr("alt") + "</h1>");*/
        $("html").css("overflow", "hidden");
        if ($(this).parent("div").is(":last-child")) {
            $(".arrowr").css("display", "none");
            $(".arrowl").css("display", "block");
        } else if ($(this).parent("div").is(":first-child")) {
            $(".arrowr").css("display", "block");
            $(".arrowl").css("display", "none");
        } else {
            $(".arrowr").css("display", "block");
            $(".arrowl").css("display", "block");
        }
    });

    $(".close").click(function () {
        $(".lightbox").fadeOut(300);
        $("h1").remove();
        $(".lightbox img").remove();
        $("html").css("overflow", "auto");
    });

    $(document).keyup(function (e) {
        if (e.keyCode == 27) {
            $(".lightbox").fadeOut(300);
            $(".lightbox img").remove();
            $("html").css("overflow", "auto");
        }
    });

    $(".arrowr").click(function () {
        var imgSrc = $(".lightbox img").attr("src");
        var search = $("section").find("img[src$='" + imgSrc + "']");
        var newImage = search.next().attr("src");
        /*$(".lightbox img").attr("src", search.next());*/
        $(".lightbox img").attr("src", newImage);
        $(".filter").css("background-image", "url(" + newImage + ")");

        if (!search.next().parent("div").is(":last-child")) {
            $(".arrowl").css("display", "block");
        } else {
            $(".arrowr").css("display", "none");
        }
    });

    $(".arrowl").click(function () {
        var imgSrc = $(".lightbox img").attr("src");
        var search = $("section").find("img[src$='" + imgSrc + "']");
        var newImage = search.prev().attr("src");
        /*$(".lightbox img").attr("src", search.next());*/
        $(".lightbox img").attr("src", newImage);
        $(".filter").css("background-image", "url(" + newImage + ")");

        if (!search.prev().parents("div").is(":first-child")) {
            $(".arrowr").css("display", "block");
        } else {
            $(".arrowl").css("display", "none");
        }
    });

});

