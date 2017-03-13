/// <reference path="../../global/plugins/utils.js" />
/// <reference path="../../global/plugins/template.js" />
/// <reference path="../../global/plugins/jquery.min.js" />

$(function () {
    var param = utils.getRequest();
    if (!param.id) return;
    interfaces.getProduct(param.id, function (res) {
        console.log(res);
        $("#title").val(res.title);
        $("#start").val(res.start);
        $("#end").val(res.end);
        $("#code").val(res.code);
        $("#type").val(res.type);
    });
    //修改产品信息
    $("#btn_edit").click(function () {
        window.location.href = "product_detail.html?id="+param.id;
    });
    $("#btn_add").click(function () {

    });
});