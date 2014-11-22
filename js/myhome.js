$("li.course-list-item").click(function() {
	$("li.course-list-item").css("background-color", "#34495e");
	$(this).css("background", "transparent");
	$("h4.course-name").css("color", "#fff");
	$("course-list-item option:selected").each(function() {
		$(this > "h4.course-name").css("color", "#34495e");
	});
});

$("span.finish-bt").click(function() {
	$(this).remove();
});