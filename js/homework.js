$(document).ready(function(){
    $.ajax({
        type: "GET",
        url: "",
        dataType: "json",
        success: function(data) {
            $("div.zuoyecishu").children("h3").text(data.title);
            var hid = "hid";
            hid += data.hid;
            $("div.middle").attr("id", hid);
            $("a.like-num").text(data.like_number);
            var vi = 1;
            for (vi = 1; vi < data.version.length + 1; vi++) {
                var txt = "#v";
                txt += vi;
                $(txt).children(".date")=data.update_time[vi-1];
            }
            $("div.t1").html(data.content);
        }
    });

    var i = 0;
    //var username = $.cookie("username");
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
            data: {like_number : like_number},
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
    if (username) {
        $.ajax({
            type: "GET",
            url: "test.json",
            data: {},
            dataType: "json",
            success: function() {
            }
        });
    }
    if (!username) {
        alert("你需要登录才能进行这个操作！");
    }
}

/**
 * 点击编辑按钮
 */
function Clickjubao() {
    if (username) {
        $.ajax({
            type: "GET",
            url: "test.json",
            data: {},
            dataType: "json",
            success: function() {
            }
        });
    }
    if (!username) {
        alert("你需要登录才能进行这个操作！");
    }
}

/**
 * 点击编辑按钮
 */
function Clicklishibanben() {
    if (username) {
        $.ajax({
            type: "GET",
            url: "test.json",
            data: {},
            dataType: "json",
            success: function(status) {
                htmlobj = $.ajax({url:"test.json", async:"false"});
                $(".t1").html(htmlobj.responseText);
            }
        });
    }
    if (!username) {
        alert("你需要登录才能进行这个操作！");
    }                
}