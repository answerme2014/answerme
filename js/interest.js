$(document).ready(function(){
	$("#btnComplete button").click(function (){
		complete();
	});


});

function complete() {
	int[] arr;

	username;

	$.ajax(function() {
		type: "POST",
		url: "",
		data: {username: username},
		dataType: "json",
		success: function(data) {

		},
		error: function(data) {

		}
	});
}