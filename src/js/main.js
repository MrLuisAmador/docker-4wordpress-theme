// Load in your theme's Sass:
import '../css/main.scss';

// Load in your theme's images:
import '../img/mugshot.png';

// Load in your theme's JS libraries:
import Typed from 'typed.js';


jQuery(function($) {
// Make Row Equal Height


  //  Add background to skills boxes

  $('.skills-inner-wrap').on('mouseenter', function(){
    $(this).find('.skills-title').addClass('skills-hover-title');
    $(this).find('.skills-content').addClass('skills-hover-content');
  });

  $('.skills-inner-wrap').on('mouseleave', function(){
    $(this).find('.skills-title').removeClass('skills-hover-title');
    $(this).find('.skills-content').removeClass('skills-hover-content');
  });

  // Main Menu Scroll Effect -- I don't think I need both this code and the stickyNavbar library but oh well
  $('a[href*="#"]:not([href="#"])').click(function() {
     if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
       var target = $(this.hash);
       target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
       if (target.length) {
         $('html,body').animate({
           scrollTop: target.offset().top
         }, 800);
         return false;
       }
     }
   });

  // Hidden Nav
  $('.hidden-nav-wrapper').stickyNavbar({
    activeClass: 'active',          // Class to be added to highlight nav elements
    sectionSelector: 'scrollto',    // Class of the section that is interconnected with nav links
    animDuration: 250,              // Duration of jQuery animation
    startAt: 100,                     // Stick the menu at XXXpx from the top of the this() (nav container)
    easing: 'linear',               // Easing type if jqueryEffects = true, use jQuery Easing plugin to extend easing types - gsgd.co.uk/sandbox/jquery/easing
    animateCSS: true,               // AnimateCSS effect on/off
    animateCSSRepeat: false,        // Repeat animation everytime user scrolls
    cssAnimation: 'fadeInDown',     // AnimateCSS class that will be added to selector
    jqueryEffects: false,           // jQuery animation on/off
    jqueryAnim: 'slideDown',        // jQuery animation type: fadeIn, show or slideDown
    selector: 'a',                  // Selector to which activeClass will be added, either "a" or "li"
    mobile: false,                  // If false nav will not stick under 480px width of window
    mobileWidth: 200,               // The viewport width (without scrollbar) under which stickyNavbar will not be applied (due usability on mobile devices)
    zindex: 9999,                   // The zindex value to apply to the element: default 9999, other option is "auto"
    stickyModeClass: 'sticky',      // Class that will be applied to 'this' in sticky mode
    unstickyModeClass: 'unsticky'   // Class that will be applied to 'this' in non-sticky mode
  });

  $('.menu-toggle').on('click', function (){
    $('#menu-hidden-nav').toggle();

  });

  var typed = new Typed('.typejs', {
    strings: ["making the web great again."],
    typeSpeed: 60
  });

  var $grid = $('.grid').isotope({
    // options
    itemSelector: '.grid-item',
    layoutMode: 'fitRows'
  });

  $grid.isotope({ filter: '*' });

  $('.filter-btn').on( 'click', 'button', function() {
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({ filter: filterValue });
  });

});