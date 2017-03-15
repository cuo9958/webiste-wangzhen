/// <reference path="system_interface.js" />
/// <reference path="../../global/plugins/utils.js" />

var role1 = [], role2 = [];

function getRole(obj, list) {
    if (!obj) return;
    var temp = [];
    for (var i = 0; i < obj.length; i++) {
        var item = obj[i];
        var isParent = false;
        for (var j = 0; j < list.length; j++) {
            if (item.id == list[j]) isParent = true;
        }
        if (isParent) {
            temp.push(item);
        } else {
            var search = getRole(item.children, list);
            if (search && search.length > 0) {
                temp.push({
                    id: item.id,
                    text: item.text,
                    children: search
                });
            }
        }
    }
    return temp;
}

function setRole() { }
function bindRole(role,nodes) {
    for (var i = 0; i < role.length; i++) {
        var item = role[i];
        var isAt=false;
        for (var j = 0; j < nodes.length; j++) {
            var tt = nodes[j];
            if (tt.id == item.id) {
                setRole();
            } else {

            }
        }
    }

    console.log(role2);
}

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
        interfaces.getRole(params.id, function (res) {
            if (res) {
                $("#search_name").val(res.title);
                $("#search_des").val(res.title);
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