$(document).ready(function(){
    i = 0;
    $(".bianji button").click(function() {
        ClickBianji();
        $(this).css("background-color", "#00bb99")
    });
    $(".jubao button").click(function() {
        Clickjubao();
        $(this).css("background-color", "#00bb99")
    });
    $(".lishibanben button").click(function() {
        Clicklishibanben();
        $(this).css("background-color", "#00bb99")

    });
    $(".fui-heart").click(function(){
        i = i + 1;
        if(i%2 == 1)
            $(this).css("color","#dc143c");
        else
            $(this).css("color","#00bb99");
        $(".fui-heart").children(".like-num").text(function(){
     
            if(i%2 == 1){
                m = $(".fui-heart").children(".like-num").text();
                return parseInt(m)+1;
            }
            else{
                m =      $(".fui-heart").children(".like-num").text();
                return parseInt(m)-1;
            }
        });

        var like_number = parseInt($(".like-num").text());
        $.ajax({
            type: "POST",
            url: "",
            data: {like_number : like_number};
            dataType: "json",
            success: function(data) {

            }
        });
    });
});


/**
 * 点击编辑按钮
 */
function ClickBianji() {
    $.ajax({
        type: "GET",
        url: "test.json",
        data: {username: $(".username").val()},
        dataType: "json",
        success: function(status) {
            if (status == 1) {

            }
            if (status == 0) {
                alert("你需要登录才能进行这个操作！");
            }
        }
    });
}

/**
 * 点击编辑按钮
 */
function Clickjubao() {
    $.ajax({
        type: "GET",
        url: "test.json",
        data: {username: $(".username").val()},
        dataType: "json",
        success: function(status) {
            if (status == 1) {

            }
            if (status == 0) {
                alert("你需要登录才能进行这个操作！");
            }
        }
    });
}

/**
 * 点击编辑按钮
 */
function Clicklishibanben() {
    $.ajax({
        type: "GET",
        url: "test.json",
        data: {username: $(".username").val()},
        dataType: "json",
        success: function(status) {
            if (status == 1) {
                htmlobj = $.ajax({url:"test.json", async:"false"});
                $(".t1").html(htmlobj.responseText);
            }
            if (status == 0) {
                alert("你需要登录才能进行这个操作！");
            }
        }
    });
}