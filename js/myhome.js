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