 function SubmitFunction()
    {
         var inputs = document.getElementById("search").value;// 提交输入框
        if (inputs == "")
　　{
　　　　　document.getElementById("search").value="输入不能为空!";

　　}
    }
$(document).ready(function(){
        $(".like").click(function(){
  $(this).text(function(){
    i = i+1;
    if(i%2 == 1){
      m = $(this).text();
    return parseInt(m)+1+"赞";
  }
  else{
    m = $(this).text();
    return parseInt(m)-1+"赞";
  }
  });
});
  window.onload = function() {
  i=0
};
});

  $(".follow").click(function(){
  $(this).text(function(){
    i = i+1;
    if(i%2 == 1){
      m = $(this).text();
    return parseInt(m)+1+"关注";
  }
  else{
    m = $(this).text();
    return parseInt(m)-1+"关注";
  }
  });
});
  window.onload = function() {
  i=0
};