/// <reference path="system_interface.js" />
/// <reference path="../../global/plugins/utils.js" />

var role1 = [], role2 = [];

function initTree1() {
    $("#tree1").jstree({
        'plugins': ["wholerow", "checkbox", "types"],
        "types": {
            "default": {
                "icon": "fa fa-bookmark icon-state-warning icon-lg"
            },
        },
        'core': {
            "themes": {
                "responsive": false
            },
            data: role1
        }
    });
}

function initTree2() {
    $("#tree2").jstree({
        'plugins': ["wholerow", "checkbox", "types"],
        "types": {
            "default": {
                "icon": "fa fa-bookmark icon-state-warning icon-lg"
            },
        },
        'core': {
            "themes": {
                "responsive": false
            },
            data: role2
        }
    });
}
$(function () {
    var params = utils.getRequest();
    if (params.id) {
        interfaces.getJurisdiction(params.id, function (res) {
            if (res) {
                role1 = res;
                initTree1();
            }
        });
        interfaces.getRoleJurisdiction(params.id, function (res) {
            if (res) {
                role2 = res;
                initTree2();
            }
        });
        interfaces.getData(params.id, function (res) {
            if (res) {
                $("#search_name").val(res.title);
                $("#search_des").val(res.des);
            }
        });
    }
    $("#sel_all").click(function () {
        var fl = this.checked;
        if (fl) {
            $("#tree1").jstree("select_all");
        } else {
            $("#tree1").jstree("deselect_all");
        }
    });
    $("#can_all").click(function () {
        var fl = this.checked;
        if (fl) {
            $("#tree2").jstree("select_all");
        } else {
            $("#tree2").jstree("deselect_all");
        }
    });
    $("#btn_add").click(function () {
        var list = $("#tree1").jstree("get_selected");
        if (list.length == 0) {
            toastr.info("请选择一个权限");
        } else {
            var nodes = getRole(role1, list);
            bindRole(role2, nodes);
            //initTree2();
        }
    });
    $("#btn_cancel").click(function () {
        var list = $("#tree2").jstree("get_selected");
        if (list.length == 0) {
            toastr.info("请选择一个权限");
        } else {
            var nodes = getRole(role2, list);
            console.log(list)
        }
    });
});