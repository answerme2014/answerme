var ue = UE.getEditor('editor',{
    toolbars: [
            ['source', '|', 'undo', 'redo', '|',
            'bold', 'italic', 'underline',  'removeformat',  'pasteplain', '|',
            'forecolor', 'backcolor', 'insertorderedlist', 'insertunorderedlist', '|',
            'customstyle', 'paragraph', 'fontfamily', 'fontsize', '|',
            'justifyleft', 'justifycenter', 'justifyright', 'justifyjustify'
            ],
            ['link', 'unlink', 'anchor','|','imagenone', 'imageleft', 'imageright', 'imagecenter', '|',
            'simpleupload', 'insertimage', 'scrawl',  'insertcode','template', '|',
            'inserttable', 'deletetable', 'insertparagraphbeforetable', 'insertrow', 'deleterow', 'insertcol', 'deletecol',
            'mergecells', 'mergeright', 'mergedown', 'splittocells', 'splittorows', 'splittocols', '|',
            'preview', 'searchreplace','spechars', 'kityformula']
    ]});

var form = document.getElementById('form');

var kfSubmit = function(){
    ue.getKfContent(function(content){
        form.submit();
    })
}
//当窗向下滚动时没，目录保持在最顶部
var ie6 = /msie 6/i.test(navigator.userAgent);
var tableDv = $('.catalog');
var st;
//存储原来的距离顶部的距离
tableDv.attr('otop', tableDv.offset().top); 
$(window).scroll(function () {
    st = Math.max(document.body.scrollTop || document.documentElement.scrollTop);
    if (st>= parseInt(tableDv.attr('otop'))) {
        if (ie6) {//IE6不支持fixed属性，所以只能靠设置position为absolute和top实现此效果
            tableDv.css({ position: 'absolute', top: st });
        }
        else if (tableDv.css('position') != 'fixed')
            tableDv.css({ 'position': 'fixed', top: 0 });
    }
    else if (tableDv.css('position') != 'static')
        tableDv.css({ 'position': 'static' });
});

