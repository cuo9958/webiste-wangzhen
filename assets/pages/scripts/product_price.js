﻿/// <reference path="../../global/plugins/utils.js" />
/// <reference path="../../global/plugins/template.js" />
/// <reference path="../../global/plugins/jquery.min.js" />

$(function () {
    var param = utils.getRequest();
    var priceList = [];
    var modifyList = [];
    if (!param.id) return;
    interfaces.getProduct(param.id, function (res) {
        console.log(res);
        $("#title").val(res.title);
        $("#start").val(res.start);
        $("#end").val(res.end);
        $("#code").val(res.code);
        $("#type").val(res.type);
    });
    interfaces.getPrice(param.id, function (res) {
        if (res) {
            priceList = res;
            $("#tables").html(template("tmp-list", { data: res }));
        }
    });
    //修改产品信息
    $("#btn_edit").click(function () {
        window.location.href = "product_detail.html?id="+param.id;
    });
    //提交审批
    $("#btn_sp").click(function () {
        toastr.info("提交成功");
    });
    function save() {
        var data = {
            id: $("#table_template .pid").val(),
            from: $("#table_template .from").val(),
            to: $("#table_template .to").val(),
        }
        console.log(data);
        modifyList.push(data);
        priceList.push(data);
        $("#tables").html(template("tmp-list", { data: priceList }));
           
    }
    //保存
    $("#btn_save").click(function () {
        interfaces.addPrice(modifyList, function (res) {
            toastr.info("保存成功");
        });
    });
    //复制
    $("#btn_copy").click(function () {
        var item = $("#tables .ck_item:checked").eq(0);
        if (!item||item.length==0) return;
        var id = item.data("id");
        if (!id) return;
        id = parseInt(id);
        var data={};
        for (var i = 0; i < priceList.length; i++) {
            var temp = priceList[i];
            if (temp.id = id) data = temp;
        }
        console.log(temp);
        bootbox.dialog({
            message: template("tmp-add", {}),
            title: "编辑",
            callback:save,
            buttons: {
                success: {
                    label: "编辑",
                    className: "green",
                },
                cancel: {
                    label: "取消",
                    className: "base",
                }
            }
        });
    });
    //增加
    $("#btn_add").click(function () {
        bootbox.dialog({
            message: template("tmp-add", {}),
            title: "编辑",
            callback: save,
            buttons: {
                success: {
                    label: "添加",
                    className: "green",
                    
                },
                cancel: {
                    label: "取消",
                    className: "base",
                }
            }
        });
    });
    //取消
    $("#btn_cancel").click(function () {

    });
});