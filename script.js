// �������±���ͳһ
var tableHd = $("#header_table");
var tableTop = tableHd.offset().top;
$(window).scroll(function(){
    var _t = $(window).scrollTop();

    if(_t-tableTop>=0){
        //table-header �Ѿ������ڶ�����
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
$(window).resize(function () {//���������С�仯ʱ
    autoWidth();
});
