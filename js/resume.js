$('document').ready(function() {
	$('.img-responsive').css("opacity", ".3");
	$('div.col-md-3').mouseenter(function() {
		$(this).css({
			"background-color": "#F3F3F3",
			"font-size": "1.16em",
			"font-weight": "bold"
		});
		$(this).find('.img-responsive').animate({
			opacity: 1
		}); //end animate
	}); //end mouseenter
	$('div.col-md-3').mouseleave(function() {
		$(this).css({
			"background-color": "#FFFFFF",
			"font-size": "1em",
			"font-weight": "normal"
		});
		$(this).find('.img-responsive').animate({
			opacity: 0.3
		}); //end animate
	}); //end mouseenter

	$("#workExperience #webBtn").click(function() {
		$(".work-entry").slideUp();
		$("#workExperience :nth-child(5)").slideDown();
		$("#workExperience :nth-child(10)").slideDown();
	});
	$("#workExperience #teacherBtn").click(function() {
		$(".work-entry").slideDown();
		$("#workExperience :nth-child(5)").slideUp();
		$("#workExperience :nth-child(10)").slideUp();
	});
	$("#workExperience #allWorkBtn").click(function() {
		$(".work-entry").slideDown();
	});
});