!(function($) {
	"use strict";

  // Loader
  $(function() {
    $(".loader").fadeOut(2000, function() {
      $("body").fadeIn(1000);        
    });
  });

  // Nav Menu
  $(document).on('click', '.nav-menu li a', function(e) {
  	if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
  		var hash = this.hash;
  		var target = $(hash);
  		e.preventDefault();
  	}
  	return false;
  });

  $(document).ready(function(){
  	$('.nav-menu li a').click(function(){
  		$('.nav-menu li a').removeClass("active");
  		$(this).addClass("active");
  	});
  });

  $(document).ready(function(){
  	$("a").on('click', function(e) {
  		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
  			var hash = this.hash;
  			var target = $(hash);
  			e.preventDefault();
  			$('html, body').animate({
  				scrollTop: $(hash).offset().top - 80
  			}, 800, function(){
  				
  			});
  		}
  	});

  	return false;
  });

  $(document).scroll(function () {
  	var y = $(this).scrollTop();
  	if (y > 500) {
  		$('#header').fadeIn();
  	} else {
  		$('#header').fadeOut();
  	}
  });

  var addClassOnScroll = function () {
  	var windowTop = $(window).scrollTop();
  	$('section[id]').each(function (index, elem) {
  		var offsetTop = $(elem).offset().top;
  		var outerHeight = $(this).outerHeight(true);

  		if( windowTop > (offsetTop - 100) && windowTop < ( offsetTop + outerHeight)) {
  			var elemId = $(elem).attr('id');
  			$(".nav-menu li a.active").removeClass('active');
  			$(".nav-menu li a[href='#" + elemId + "']").addClass('active');
  		}
  	});
  };

  $(function () {
  	$(window).on('scroll', function () {
  		addClassOnScroll();
  	});
  });

  // Counter
  document.addEventListener("DOMContentLoaded", () => {
  	function counter(id, start, end, duration) {
  		let obj = document.getElementById(id),
  		current = start,
  		range = end - start,
  		increment = end > start ? 1 : -1,
  		step = Math.abs(Math.floor(duration / range)),
  		timer = setInterval(() => {
  			current += increment;
  			obj.textContent = current;
  			if (current == end) {
  				clearInterval(timer);
  			}
  		}, step);
  	}
  	counter("count1", 0, 300, 2000);
  	counter("count2", 0, 500, 2000);
  	counter("count3", 0, 450, 2000);
  	counter("count4", 0, 600, 2000);
  });

  // Skills Progress Bar
  $('.skills > div').each(function(){
    var width=$(this).data('width');
    $(this).animate({ width: width }, 2500);
    $(this).after( '<span class="perc">' + width + '</span>');
    $('.perc').delay(3000).fadeIn(1000);
  });

  // Testimonials
  $('.slider').each(function() {
    var $this = $(this);
    var $group = $this.find('.slide-group');
    var $slides = $this.find('.slide');
    var buttonArray = [];
    var currentIndex = 0;
    var timeout;

    function move(newIndex) {
      var animateLeft, slideLeft;

      advance();

      if ($group.is(':animated') || currentIndex === newIndex) {
        return;
      }

      buttonArray[currentIndex].removeClass('active');
      buttonArray[newIndex].addClass('active');

      if (newIndex > currentIndex) {
        slideLeft = '100%';
        animateLeft = '-100%';
      } else {
        slideLeft = '-100%';
        animateLeft = '100%';
      }

      $slides.eq(newIndex).css({left: slideLeft, display: 'block'});
      $group.animate({left: animateLeft} , function() {
        $slides.eq(currentIndex).css({display: 'none'});
        $slides.eq(newIndex).css({left:0});
        $group.css({left: 0});
        currentIndex = newIndex;
      })
    }

    function advance() {
      clearTimeout(timeout);
      timeout = setTimeout(function() {
        if (currentIndex < ($slides.length - 1)) {
          move(currentIndex + 1);
        } else {
          move(0);
        }
      }, 10000);
    }

    $.each($slides, function(index) {
      var $button = $('<button type="button" class="slide-btn"></button>');
      if (index === currentIndex) {
        $button.addClass('active');
      }
      $button.on('click', function() {
        move(index);
      }).appendTo('.slide-buttons');
      buttonArray.push($button);
    });
    advance();
  });

  // Portfolio Lightbox
  var $overlay  = $('<div id="lightboxOverlay"></div>');
  var $image    = $('<img>');
  var $caption  = $('<h3></h3>');
  var $close    = $('<i class="fa fa-times"></i>, <div id="lightboxOverlay"></div>');

  var imageUrl;
  var imageAlt;

  $('body').append($overlay);  
  $overlay.hide();        

  $('#portfolio-lightbox img').click(function(){
    imageUrl = $(this).attr('src');   
    imageAlt = $(this).attr('alt');   

    $overlay.append($image);     
    $overlay.append($caption);   
    $overlay.append($close);     
    $image.attr('src', imageUrl);
    $caption.text(imageAlt);     
    $overlay.fadeIn('1000');     
    $image.fadeIn('1000');
  });

  $close.click( function() {
    $overlay.fadeOut('1000');
  } );

  // Scroll Top
  $(document).scroll(function() {
    var y = $(this).scrollTop();
    if (y > 400) {
      $('.scroll-top').animate({'bottom':'10'},0);
    } else {
      $('.scroll-top').animate({'bottom':'-60'},0);
    }
  });

})(jQuery);