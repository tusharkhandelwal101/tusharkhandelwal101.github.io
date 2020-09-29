$(document).ready(function() {
    
    
    /* For the sticky navigation */
    $('.js--section-features').waypoint(function(direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
      offset: '60px'
    });
    
    
    /* Scroll to button */
    $('.js--scroll-to-plans').click(function () {
        $('html, body').animate({scrollTop: $('.js--section-plans').offset().top}, 1000);
    });
    
    $('.js--scroll-to-start').click(function () {
        $('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 1000);
    });
    

    /* Navigation Scroll */
    $(function() {
      $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top
            }, 1000);
            return false;
          }
        }
      });
    });
    
    /* Animation on scroll */
    
    /*--When you reach waypoint 1--*/
    $('.js--wp-1').waypoint(
        (direction) => {
          $('.js--wp-1').addClass('animate__animated animate__fadeIn');
        },
        {
          offset: '50%',
        }
      );
    /*--When you reach waypoint 2--*/
    $('.js--wp-2').waypoint(
        (direction) => {
          $('.js--wp-2').addClass('animate__animated animate__fadeInLeft');
        },
        {
          offset: '50%',
        }
      );
    /*--When you reach waypoint 3--*/
    $('.js--wp-3').waypoint(
        (direction) => {
          $('.js--wp-3').addClass('animate__animated animate__fadeIn');
        },
        {
          offset: '50%',
        }
      );
    /*--When you reach waypoint 4--*/
    $('.js--wp-4').waypoint(
        (direction) => {
          $('.js--wp-4').addClass('animate__animated animate__bounceIn');
        },
        {
          offset: '70%',
        }
      );
    /*--When you reach HEADER--*/
    $('.js--header').waypoint(
        (direction) => {
            if (direction === 'up') {
                $('.js--wp-1').removeClass('.animate__animated animate__fadeIn');
                $('.js--wp-2').removeClass('.animate__animated animate__fadeInLeft');
                $('.js--wp-3').removeClass('.animate__animated animate__fadeIn');
                $('.js--wp-4').removeClass('.animate__animated animate__bounceIn');
            }
        },
        {
            offset: '-25%' ,
        }
    )
    
    /* Mobile Navigation */
    $('.js--nav-icon').click(function() {
        var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon i');
        
        nav.slideToggle(200);
        if (icon.hasClass('fas fa-bars')) {
            icon.addClass('fas fa-times');
            icon.removeClass('fas fa-bars');
        } else {
            icon.addClass('fas fa-bars');
            icon.removeClass('fas fa-times');
        }
    });
});    
