// 调整上下表宽度统一
var tableHd = $("#header_table");
var tableTop = tableHd.offset().top;
$(window).scroll(function(){
    var _t = $(window).scrollTop();

    if(_t-tableTop>=0){
        //table-header 已经到窗口顶部了
        tableHd.css({
            "position":"fixed"
        })
    }else{
        tableHd.css({
            "position":"static"
        })
    }
});
autoWidth();
function autoWidth(){
    var body_first_tr = $('#body_table').width();
    $('#header_table').width(body_first_tr);

    for(var i=0;i<5;i++){
        var header_id = '#body_table tbody tr:eq(0) td:eq('+i+')';
        var body_id = '#header_table thead tr:eq(0) th:eq('+i+')';
        var body_first_tr = $(header_id).width();
        $(body_id).width(body_first_tr);
    }
    //console.log(body_first_tr);
}
$(window).resize(function () {//当浏览器大小变化时
    autoWidth();
});
