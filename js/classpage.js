$(document).ready(function() {
	/* Load classpage */
	$.ajax({
		type: "GET",
		url: "test.json",
		dataType: "json",
		success: function(data) {
			var txt = "cid";
			txt += data.cid;
			$("div.right-content").attr("id", txt);
			$("span.class-name").text(data.course_name);
			$("#course-teacher").text(data.teacher);
			$("#course-place").text(data.course_place);
			$("#course-time").text(data.course_time);
			$("img.photo").attr("src", data.picture);
			$("#care").text(data.taken_number);
			$("#good").text(data.like_number);

		}
	});

	$("#good-img").click(function() {
		if (good_item == 0) {
			var a = $("#good").text();
			var sum = 0;
			var j = 1;
			for ( var i = a.length - 1; i >= 0; i--) {
				sum += a[i] * j;
				j *= 10;
			}
			sum += 1;
			$("#good").text(sum);
			$("#good-img").css("color", "#dc143c");	
			good_item = 1;
		} else if (good_item == 1) {
			var a = $("#good").text();
			var sum = 0;
			var j = 1;
			for ( var i = a.length - 1; i >= 0; i--) {
				sum += a[i] * j;
				j *= 10;
			}
			sum -= 1;
			$("#good").text(sum);
			$("#good-img").css("color", "#16a085");
			good_item = 0;		
		}

		$.ajax({
			type: "POST",
			url: "",
			data: {like_number: sum},
			dataType: "json",
			success: function(data) {
				
			}
		});
	});

	$("#good-img").mouseover(function() {
		$("#good-img").css("color", "#dc143c");	
	});

	$("#good-img").mouseout(function() {
		if (good_item == 0) {
			$("#good-img").css("color", "#16a085");	
		} else if (good_item == 1) {
			$("#good-img").css("color", "#dc143c");	
		}
	});

	$("#care-img").click(function() {
		if (care_item == 0) {
			var a = $("#care").text();
			var sum = 0;
			var j = 1;
			for ( var i = a.length - 1; i >= 0; i--) {
				sum += a[i] * j;
				j *= 10;
			}
			sum += 1;
			$("#care").text(sum);
			$("#care-img").css("color", "#dc143c");	
			care_item = 1;
		} else if (care_item == 1) {
			var a = $("#care").text();
			var sum = 0;
			var j = 1;
			for ( var i = a.length - 1; i >= 0; i--) {
				sum += a[i] * j;
				j *= 10;
			}
			sum -= 1;
			$("#care").text(sum);
			$("#care-img").css("color", "#16a085");
			care_item = 0;		
		}

		$.ajax({
			type: "POST",
			url: "",
			data: {take_number: sum},
			dataType: "json",
			success: function(data) {
				
			}
		});
	});

	$("#care-img").mouseover(function() {
		$("#care-img").css("color", "#dc143c");	
	});

	$("#care-img").mouseout(function() {
		if (care_item == 0) {
			$("#care-img").css("color", "#16a085");	
		} else if (care_item == 1) {
			$("#care-img").css("color", "#dc143c");	
		}
	});

	$("a.edit").click(function() {
		var course_teacher = $("#course-teacher").text();
		var course_time = $("#course-time").text();
		var course_place = $("#course-place").text();
		var txt1 = "<input id=teacher1>";
		var txt2 = "<input id=place1>";
		var txt3 = "<input id=time1> <button class=btn btn-default id=finish-edit>完成</button>";
		$("#course-teacher").text("");
		$("#course-teacher").append(txt1);
		$("#teacher1").attr("value", course_teacher);
		$("#course-place").text("");
		$("#course-place").append(txt2);
		$("#place1").attr("value", course_place);
		$("#course-time").text("");
		$("#course-time").append(txt3);
		$("#time1").attr("value", course_time);	
		$("#finish-edit").css("color", "white");	
	});

	$("#finish-edit").click(function() {
		var course_teacher = $("#teacher1").text();
		var course_place = $("#place1").text();
		var course_time = $("#time1").text();

		$.ajax({
			type: "POST",
			url: "",
			data: {teacher:course_teacher, course_place:course_place, course_time:course_time},
			dataType: "json",
			success: function(data) {
				$("#time1").remove();
				$("#place1").remove();
				$("#teacher1").remove();
				$("#finish-edit").remove();
				$("#course-teacher").text(course_teacher);
				$("#course-place").text(course_place);
				$("#course-time").text(course_time);
			}
		});
	});
});