// JavaScript Document
var autoselect = setTimeout(function(){
		$(".musicon").addClass("hidden");
		$(".musicoff").removeClass("hidden");
		$("#first").addClass("loaded");
	}, 5200 );

$(function(){
	setTimeout(function(){
		$(".loader").addClass("complete");
		$(".loader-text,.complete-text").toggleClass("hidden");
		$(".complete-underline").toggleClass("complete-animation")
	}, 2000 );
	setTimeout(function(){
		$(".selectmusicoff").addClass("ho-ver");
	}, 5000 );
});

var fadeOut = function(){
	$("#audio").get(0).volume = 0.75;
	setTimeout(function(){$("#audio").get(0).volume = 0.5;},100);
	setTimeout(function(){$("#audio").get(0).volume = 0.25;},200);
	setTimeout(function(){$("#audio").get(0).volume = 0;},300);
	setTimeout(function(){$("#audio").get(0).pause();},400);
}

var fadeIn = function(){
	$("#audio").get(0).volume = 0;
	$('#audio').get(0).play();
	setTimeout(function(){$("#audio").get(0).volume = 0.25;},100);
	setTimeout(function(){$("#audio").get(0).volume = 0.5;},200);
	setTimeout(function(){$("#audio").get(0).volume = 0.75;},300);
	setTimeout(function(){$("#audio").get(0).volume = 1;},400);
}

$(function(){
	$(".selectmusicon").click(function(){
		$(".musicoff").addClass("hidden");
		$(".musicon").removeClass("hidden");
		$("#first").addClass("loaded");
		fadeIn();
		clearTimeout(autoselect);
	});
	$(".selectmusicoff").click(function(){
		$(".musicon").addClass("hidden");
		$(".musicoff").removeClass("hidden");
		$("#first").addClass("loaded");
		clearTimeout(autoselect);
	});
});


$(function(){
	$(".musicon").click(function(){
		$(".musicoff").removeClass("hidden");
		$(".musicon").addClass("hidden");
		fadeOut();
	});
	$(".musicoff").click(function(){
		$(".musicoff").addClass("hidden");
		$(".musicon").removeClass("hidden");
		fadeIn();
	});
});


$(function(){
	$(".spmenu").click(function(){//spmenuがクリックされたら
		$(".menuicon").toggleClass("iconclicked");
		$(".menu-contents").toggleClass("hidden");
	});
	$(".menu-content").click(function(){
		$(".menuicon").removeClass("iconclicked");
		$(".menu-contents").addClass("hidden");
	});
	$(".sphlogo").click(function(){
		$(".menuicon").removeClass("iconclicked");
		$(".menu-contents").addClass("hidden");
	});
});



$(function() {
	$(".icon1").click(function() {
		$(".icon1").addClass("selecting");
		$(".icon2,.icon3,.icon4,.icon5,.icon6").removeClass("selecting");
		
		$(".prof1").removeClass("unshown");
        $(".prof2,.prof3,.prof4,.prof5,.prof6").addClass("unshown");
    });
	
	$(".icon2").click(function() {
		$(".icon2").addClass("selecting");
		$(".icon1,.icon3,.icon4,.icon5,.icon6").removeClass("selecting");
		
		$(".prof2").removeClass("unshown");
        $(".prof1,.prof3,.prof4,.prof5,.prof6").addClass("unshown");
    });
	
	$(".icon3").click(function() {
		$(".icon3").addClass("selecting");
		$(".icon1,.icon2,.icon4,.icon5,.icon6").removeClass("selecting");
		
		$(".prof3").removeClass("unshown");
        $(".prof1,.prof2,.prof4,.prof5,.prof6").addClass("unshown");
    });
	
	$(".icon4").click(function() {
		$(".icon4").addClass("selecting");
		$(".icon1,.icon2,.icon3,.icon5,.icon6").removeClass("selecting");
		
		$(".prof4").removeClass("unshown");
        $(".prof1,.prof2,.prof3,.prof5,.prof6").addClass("unshown");
    });
	
	$(".icon5").click(function() {
		$(".icon5").addClass("selecting");
		$(".icon1,.icon2,.icon3,.icon4,.icon6").removeClass("selecting");
		
		$(".prof5").removeClass("unshown");
        $(".prof1,.prof2,.prof3,.prof4,.prof6").addClass("unshown");
    });
	
	$(".icon6").click(function() {
		$(".icon6").addClass("selecting");
		$(".icon1,.icon2,.icon3,.icon4,.icon5").removeClass("selecting");
		
		$(".prof6").removeClass("unshown");
        $(".prof1,.prof2,.prof3,.prof4,.prof5").addClass("unshown");
    });
});
