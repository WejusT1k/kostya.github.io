$(".lang2").addClass("active");
$(".lang1 ").click(function(){
	$(".lang2").removeClass("active");
	$(".lang1").addClass("active");
});
$(".lang2 ").click(function(){
	$(".lang1").removeClass("active");
	$(".lang2").addClass("active");
});
