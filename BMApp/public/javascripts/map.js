$(window).load(function(){
	$('.loading').slideUp();
});


var scaleIt = function(percentage) {

	var percentage = percentage;
	var decimal = percentage / 100;
	var newAttr = "scale(" + decimal + ")";
	var newWidth = (decimal * 1128);
	var newHeight = (decimal * 896);

	$(".buildingMapGraphic").fadeOut(function(){
	$(".buildingMapGraphic").attr({transform: newAttr});
	$(".buildingMap").animate({"height": newHeight});
	$(".buildingMap").animate({"width": newWidth}, function(){
		$(".buildingMapGraphic").fadeIn();
	});
	});
}

$('.scalerButton').click(function(){
	var scaleVal = parseInt($('.scaler').val());
	scaleIt(scaleVal);
});