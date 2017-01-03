$(".btn1").click(function() {
	/* Act on the event */
	$(".third_block").css({
		"backgroundImage": 'url(E:/kostya/img/Layer40.png)',
		"transition":'background-image .5s ease-in-out'
	});
	$(".zakaz").text('Заказать мойку моей крыши');

	
});
$(".btn2").click(function() {
	/* Act on the event */
	$(".third_block").css({
		"backgroundImage": 'url(E:/kostya/img/gal3.png)',
		"transition":'background-image .5s ease-in-out'
	});
	$(".zakaz").text('Заказать покраску моей крыши');
	
});
$(".btn3").click(function() {
	/* Act on the event */
	$(".third_block").css({
		"backgroundImage": 'url(E:/kostya/img/gal1.png)',
		"transition":'background-image .5s ease-in-out'
	});
	$(".zakaz").text('Заказать защиту моей крыши');
});
$(".btn1, .btn2 , .btn3").click(function() {
	/* Act on the event */
	$(".btn1, .btn2 , .btn3").removeClass('active_fon');
	$(this).addClass('active_fon');

});

$(".mynav_select").change(function() {


	if ($(".mynav_select option:selected").val()=="1") {
	$(".third_block").css({
		"backgroundImage": 'url(E:/kostya/img/Layer40.png)',
		"transition":'background-image .5s ease-in-out'
	});
	$(".zakaz").text('Заказать мойку моей крыши');
}
else
	/* Act on the event */
	if ($(".mynav_select option:selected").val()=="2") {
	$(".third_block").css({
		"backgroundImage": 'url(E:/kostya/img/gal3.png)',
		"transition":'background-image .5s ease-in-out'
	});
	$(".zakaz").text('Заказать покраску моей крыши');
}
else
if ($(".mynav_select option:selected").val()=="3") {
	$(".third_block").css({
		"backgroundImage": 'url(E:/kostya/img/gal1.png)',
		"transition":'background-image .5s ease-in-out'
	});
	$(".zakaz").text('Заказать защиту моей крыши');
}

});
$(".select_price").change(function(){

	if($(".select_price select option:selected").val()=="1"){
		$(" .col-sm-3:nth-child(1) .obertka_price").css({
			"display": 'block'
		});
		$(".col-sm-3:nth-child(2) .obertka_price, .col-sm-3:nth-child(3) .obertka_price").css({
			"display": 'none'
		});
	}
	else
		if($(".select_price select option:selected").val()=="2"){
		$(".col-sm-3:nth-child(2) .obertka_price").css({
			"display": 'block'
		});
		$(" .col-sm-3:nth-child(1) .obertka_price, .col-sm-3:nth-child(3) .obertka_price").css({
			"display": 'none'
		});
	}
	else
		if($(".select_price select option:selected").val()=="3"){
		$(".col-sm-3:nth-child(3) .obertka_price").css({
			"display": 'block'
		});
		$(".col-sm-3:nth-child(1) .obertka_price, .col-sm-3:nth-child(2) .obertka_price").css({
			"display": 'none'
		});
	}
});
$(".navbar").on("click","a", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();
        //забираем идентификатор бока с атрибута href
        var id  = $(this).attr('href'),
        //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top-$(".head_main").height();
   //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({scrollTop: top}, 1500);
    });

