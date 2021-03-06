﻿/// <reference path="system_interface.js" />
var search_data = {
    currPage:1
};
function setData() {
    search_data.currPage = 1;
    search_data.title = $("#search_name").val();
    search_data.des = $("#search_des").val();
    search_data.pageCount = parseInt($("#table_length select").val());
    search();
}

function search(page) {
    if (page) search_data.currPage = page;
    interfaces.searchRole(search_data, function (res) {
        if (res) {
            clearHtml(template("tmp-list", res));
            $("#test").bootstrapPaginator({
                currentPage: search_data.currPage,
                totalPages: res.total,
                onPageChanged: function (a,b, page) {
                    search(page);
                }
            });
        }
    });
}
function clearHtml(html) {
    $("#product_list").removeClass("hide");
    $("#list").html(html);
}

$(function () {
    $("#table_length select").change(function () {
        search_data.pageCount = parseInt($("#table_length select").val());
        search();
    });
    $("#btn_search").click(function () {
        setData();
    });
    $("#product_list .ck_all").change(function () {
        if (this.checked) {
            $("#product_list .ck_item").each(function () { this.checked = true; });
        } else {
            $("#product_list .ck_item").each(function () { this.checked = false; });
        }
    });
    toastr.options = {
        "closeButton": true,
        "debug": false,
        "positionClass": "toast-top-center",
        "onclick": null,
        "showDuration": "1000",
        "hideDuration": "1000",
        "timeOut": "5000",
        "extendedTimeOut": "1000",
        "showEasing": "swing",
        "hideEasing": "linear",
        "showMethod": "fadeIn",
        "hideMethod": "fadeOut"
    }
    $("#btn_edt").click(function () {
        var id = $(".ck_item:checked").eq(0).data("id");
        if (id) {
            window.location.href = "role_detail.html?id=" + id;
        } else {
            toastr.info("请选择一个角色");
        }
    });
    $("#btn_del").click(function () {
        var id = $(".ck_item:checked").eq(0).data("id");
        if (!id) {
            toastr.info("请选择一个角色");
            return;
        } 
        bootbox.confirm("确定要删除吗？", function (result) {
            if (result) {
                interfaces.delRole(id, function () {
                    toastr.success("删除成功");
                    search();
                });
            }
        })
    });
});