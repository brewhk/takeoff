(function ( $ ) {
	$.takeoff = function(userOptions) {

		///////////////
		/// OPTIONS ///
		///////////////

		var options = $.extend({}, $.takeoff.defaults, userOptions);

		/////////////////////////
		/// RUNTIME VARIABLES ///
		/////////////////////////

		var bgColorArray = [];
		var ee = new EventEmitter();
		var container = $(".takeoff__backgrounds");
		var sectionCount = $(".takeoff__backgroundBlock").length;
		var textScrolling = true;
		var screenScrolling = true;

		//////////////////////
		/// INITIALIZATION ///
		//////////////////////

		var smartscroll = $.smartscroll({
			mode: "set",
			autoHash: false,
			sectionScroll: true,
		    initialScroll: false,
		    keepHistory: false,
		    sectionWrapperSelector: ".takeoff__backgrounds",
		    sectionSelector: ".takeoff__backgroundBlock",
		    animationSpeed: 700,
		    headerHash: "header",
		    breakpoint: null,
		    innerSectionScroll: false,
		    ie8: false,
		    toptotop: true,
		    eventEmitter: ee
		});

		if(options.changingBackground === true) {

			// Fill the bgColorArray array with values from
			// the data-tf-background-color attribute of each section
			
			$(".takeoff__backgroundBlock").each(function(i, el) {
		    	bgColorArray.push($(el).data("tfBackgroundColor") || "#ffffff");
		    });

			// Sets the background initially
			$('body').css({
		    	'backgroundColor': $(".takeoff__backgroundBlock:first").data("tfBackgroundColor")
		    });
		}

		///////////////////////
		/// EVENT LISTENERS ///
		///////////////////////

		// When `.takeoff__nextSlide` element is clicked
		// scroll down one slide
		
		var handleScrollDown = function () {
			smartscroll.scroll(1);
		};
		
		$(".takeoff__nextSlide").on('click', handleScrollDown);

		// Listen for swipe events
		
		var swipeUpListener = function () {
			smartscroll.scroll(1);
		}
		var swipeDownListener = function () {
			smartscroll.scroll(0);
		}
		ee.addListener('swipeUp', swipeUpListener);
		ee.addListener('swipeDown', swipeDownListener);

		// Change Background, Text and Screen
		
		var changeBgTextAndScreen = function (screenNumber) {
			// Ensure the page is not scrolling at the moment
			if(!textScrolling && !screenScrolling) {
				textScrolling = screenScrolling = true;
				changeBackgroundColor(screenNumber);
				changeText(screenNumber);
				changeScreen(screenNumber);
			}
		}

		// Change background colour

		var changeBackgroundColor = function (slideNumber) {
			if(options.changingBackground === true) {
				// Uses CSS3 Transitions to fade the background colour
				$('body').css({
			    	'backgroundColor': bgColorArray[slideNumber - 1]
			    });
			}
		}

		// Change mobile screen
		
		var changeScreen = function (screenNumber) {
			screenNumber = Math.min(Math.max(screenNumber - 1, 0), $(".takeoff__screens img").length - 1);
			var currentScreen = $(".takeoff__screens img.current").eq(0);
			var nextScreen = $(".takeoff__screens img").eq(screenNumber);
			if (nextScreen.is(currentScreen)) {
				screenScrolling = false;
				return false;
			}
			currentScreen.css('z-index', 5);
			nextScreen.css('z-index', 6);
			nextScreen.animate({
				top: 0
			}, {
				duration: options.slideDuration,
				easing: "swing",
				complete: function () {
					currentScreen.removeClass("current");
					nextScreen.addClass("current");
					currentScreen.removeAttr('style');
					screenScrolling = false;
				}
			});
		}

		var changeText = function (screenNumber) {
			screenNumber = Math.min(Math.max(screenNumber - 1, 0), $(".takeoff__textblock").length - 1);
			var currentText = $(".takeoff__textblock.current").eq(0);
			var nextText = $(".takeoff__textblock").eq(screenNumber);
			if (currentText.is(nextText)) {
				textScrolling = false;
				return false;
			}
			nextText.css('z-index', 5);
			currentText.animate({
				opacity: 0,
				top: "-50px"
			}, {
				duration: 400,
				easing: "swing",
				complete: function () {
					currentText.removeClass("current");
					currentText.removeAttr('style');
				}
			});
			nextText.animate({
				top: 0
			}, {
				duration: options.slideDuration,
				easing: "swing",
				complete: function () {
					nextText.addClass("current");
					textScrolling = false;
				}
			});
		}

	    ee.addListeners('scrollStart', [changeBgTextAndScreen]);

	    // Animate the first screen and text block
	    
	    $(".takeoff__screens img").eq(0).add($(".takeoff__textblock").eq(0)).animate({
			top: 0
		}, {
			duration: 400,
			easing: "swing",
			complete: function () {
				$(".takeoff__screens img").eq(0).add($(".takeoff__textblock").eq(0)).addClass("current");
				textScrolling = screenScrolling = false;
			}
		});

		// Ensure page is scrolled back to top of page on load
		
		$(document).ready(function() {
			$("html,body").animate({scrollTop: 0}, 1000);
		});
		
	    return container;
	}

	$.takeoff.defaults = {
		changingBackground: true,
		slideDuration: 700
	}
 
}( jQuery ));