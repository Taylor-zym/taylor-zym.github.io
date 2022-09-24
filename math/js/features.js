// jQueryJoel.com homepage featured slider
// Author: Joel Grannas - Last updated 2/29/2012

var portLength = portfolioJSON.length;
var active = 0;
var imageWidth;
var imageHeight;
var smallImageWidth = 0;
var screenWidth = $(window).width();

$(window).resize(function(){
	//CHECKS FOR SMALLER SIZING, IF SO RESET LEFT POSITIONING
	var currentLargeWidth = $("#frame-center-inner .sliders img:first").width();
	var currentLargeHeight = $("#frame-center-inner .sliders img:first").height();
	var currentSmallWidth = $(".frame-center-outer.left img:first").width();
	screenWidth = $(window).width();
	//RESET LEFT POS
	if(imageWidth != currentLargeWidth){
		var resetLeft = ((active + 2) * -1) * currentLargeWidth;
		$("#frame-center-inner .sliders").css("left", resetLeft);
		var smallWidth = $(".frame-smaller-inner .sliders img:first").width();
		var resetLeft2 = ((active + 1) * -1) * smallWidth;
		$(".frame-smaller-outer.left .sliders").css("left", resetLeft2);
		var resetLeft3 = ((active + 3) * -1) * smallWidth;
		$(".frame-smaller-outer.right .sliders").css("left", resetLeft3);
		imageWidth = currentLargeWidth;
		imageHeight = currentLargeHeight;
		smallImageWidth = currentSmallWidth;
	}
	if(screenWidth < 1025) {
		noHover();	
	} else {
		hoverSlides();	
	}
	//STOP ANIMATE
	//stopFeatures();
});
$(document).ready(function(){
	//SETS VARIABLE FOR IMAGE SIZE
	$("#frame-center-inner .slider img:first").load(function(){
		imageWidth = $(this).width();
		imageHeight = $(this).height();
		//SETS HOVER BASED ON SCREENWIDTH
		if(screenWidth < 1025) {
			noHover();	
		} else {
			hoverSlides();	
		}
		//RUNS ROTATE
		//playFeatures();
	});
	$(".frame-smaller-outer .sliders img:first").load(function(){
		smallImageWidth = $(this).width();
	});
	$(".nav-arrow.next").click(function(){
		active++;
		if(active == portfolioJSON.length){
			active = 0;	
		}
		glowColor(portfolioJSON[active][2]);
		$(".sliders").each(function(){
			var mySize = $("img:first", this).width();
			var moveCalc = "-=" + mySize;
			var maxVal = (($("img",this).length-1) * mySize * -1);
			$(this).animate({
				"left" : moveCalc
			}, 500, function(){
				var myCurrentLeft = $(this).position().left;
				if(myCurrentLeft == maxVal){
					var myLeft = myCurrentLeft + (portLength*mySize) + "px";
					$(this).css("left", myLeft);	
				}
			});
		});
	});
	$(".nav-arrow.back").click(function(){
		active--;
		if(active < 0){
			active = portfolioJSON.length - 1;	
		}
		glowColor(portfolioJSON[active][2]);
		$(".sliders").each(function(){
			var mySize = $("img:first", this).width();
			var moveCalc = "+=" + mySize;
			$(this).animate({
				"left" : moveCalc
			}, 500, function(){
				if($(this).position().left == 0) {
					var myLeft = (portLength * -1 * mySize) + "px";
					$(this).css("left", myLeft); 	
				}
			});
		});
	});
});

function hoverSlides(){
	$("#frame-center-inner a").each(function(){
		$(this).bind("mouseenter", function(){
			imageHeight = $("img:first", this).height();
			var topVal = imageHeight * .08;
			var hVal = imageHeight - (topVal * 2);
			$(".image-holder",this).stop().animate({
				"top" : topVal,
				"height" : hVal
			},300);
		});
		$(this).bind("mouseleave", function(){
			$(".image-holder",this).stop().animate({
				"top" : 0,
				"height" : imageHeight
			},300, function(){
				$(this).removeAttr("style");	
			});
		});
	});
	$("#features-container").hover(function(){
		stopFeatures();
		clearTimeout(hoverTimer);
	}, function(){
		hoverTimer = setTimeout(function(){
			playFeatures();
		}, 3000);
	});
	
}

function noHover(){
	$("#frame-center-inner .sliders a").unbind("mouseenter").unbind("mouseleave");
	$("#frame-center-inner .sliders .image-holder").removeClass("large");
}

function glowColor(nextColor){
	$("#glow-container").css("background-color", nextColor);
	$("#glow-color-active").fadeOut(500, function(){
		$(this).css("background-color", nextColor).show();
	});
}

function stopFeatures() {
    clearInterval(featuresTimer);
}

function playFeatures() {
    featuresTimer = setInterval(function () {
        $(".nav-arrow.next").click();
    }, 4000)
}// JavaScript Document