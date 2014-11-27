$(document).ready(function() {
	$("li.course-list-item").click(function() {
		$("li.course-list-item").css("background-color", "#34495e");
		$(this).css("background", "transparent");
		$("h4.course-name").css("color", "#fff");
		$(this).find("h4").css("color", "#19B68A");
		$("div.homework").find("ul.homework-list").css("display", "none");
		$("div.course-page").css("display", "inherit");
	});

	$("span.finish-bt").click(function() {
		$(this).parent().parent().remove();
	});

	$("#good-img").click(function() {
		var a = $("#good").text();
		var sum = 0;
		var j = 1;
		for ( var i = a.length - 1; i >= 0; i--) {
			sum += a[i] * j;
			j *= 10;
		}
		sum += 1;
		$("#good").text(sum);
		$("#good-img").css("color", "#2c3e50");
	});

});