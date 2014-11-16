$("li.course-list-item").click(function() {
	$("li.course-list-item").css("background-color", "#34495e");
	$(this).css("background", "transparent");
	$("h4.course-name").click(function() {
	    $("h4.course-name").css("color", "#fff");
	    $(this).css("color", "#1abc9c");
	});
});

$("span.finish-bt").click(function() {
	$(this).remove();
});