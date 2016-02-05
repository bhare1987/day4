$( document ).ready(function() {
    $('.carousel-buttons i').on("click", function(){
      var img,
          curImg,
          carousel,
          carouselButtons;

          img = $('div.carousel').children("div");
          curImg = $(this).attr("data-img");
          carousel = $("div.carousel");
          carouselButtons = $(".carousel-buttons").children();

          if (!img.hasClass(curImg)) {
            img.removeClass();
            img.addClass(curImg);
            if (carouselButtons.hasClass("fa-dot-circle-o")){
              carouselButtons.removeClass("fa-dot-circle-o");
              carouselButtons.addClass("fa-circle");
            }
            $(this).addClass("fa-dot-circle-o");
          }

    });
});
