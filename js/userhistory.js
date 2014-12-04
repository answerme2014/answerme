$("li.time-list-item").click(function() {
	$("li.course-list-item").css("background-color", "#34495e");
	$(this).css("background", "transparent");
	$("td.record-course-name").click(function() {
	    $("td.record-course-name").css("color", "#fff");
	    $(this).css("color", "#1abc9c");
	});
});

