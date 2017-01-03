$(".carousel img, .shadow ").css({
	"height": $(window).height(),
	"width": $(window).width()
});
$(".second_block ,.head_main").css({
	"width": $(window).width()
});

$(".main_screen").css({
	"height": $(window).height(),
	"width": "auto"
});
$(window).resize(function(){
	$(".carousel img, .shadow").css({
		"height": $(window).height(),
		"width": $(window).width()
	});
	$(".main_screen").css({
		"height": $(window).height(),
		"width": $(window).width()
	});
	$(".second_block, .head_main").css({
	"width": $(window).width()
});
	$(".shadow2").css({
	"width": $(".obertka_fifth_block").width(),
	"height": $(".obertka_fifth_block").height()
});
	$(".shadow3").css({
	"width": $(".obertka_seventh_block").width(),
	"height": $(".obertka_seventh_block").height()
});
	$(".shadow4").css({
	"width": $(".obertka_ninth_block").width(),
	"height": $(".obertka_ninth_block").height()
});
	if($(window).width()>767){
		$(".obertka_price").css({
			"display": 'block'
		});
	}
});

$(".shadow2").css({
	"width": $(".obertka_fifth_block").width(),
	"height": $(".obertka_fifth_block").height()
});
$(".shadow3").css({
	"width": $(".obertka_seventh_block").width(),
	"height": $(".obertka_seventh_block").height()
});
$(".shadow4").css({
	"width": $(".obertka_ninth_block").width(),
	"height": $(".obertka_ninth_block").height()
});
