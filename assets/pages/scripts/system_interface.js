//接口层
var interfaces = {
    //搜索角色
    searchRole: function (data, fn) {
        console.log(data);
        var data = [];
        for (var i = 0; i < 10; i++) {
            var temp = {
                id: i + 1,
                title: data.title || "角色名称" + i,
                des: data.des || "角色描述" + Math.random() * 100
            }
            data.push(temp);
        }
        fn({ data: data, total: 20 });
    },
    //删除角色
    delRole: function (id, fn) {
        fn({ code: 1 });
    },
    //获取角色
    getRole: function (id, fn) {
        var data = {
            id: id,
            title: "我是角色",
            des: "角色的备注"
        }
        fn(data);
    },
    //获取未分配权限
    getJurisdiction: function (d, fn) {
        var data = [
                    {
                        id: 1,
                        "text": "运价管理",
                        "children": [
                            { "text": "运价管理", id: 2 }, { "text": "运价管理", id: 3 }
                        ]
                    },
                    {
                        id: 4,
                        "text": "产品管理",
                        "children": [
                            { "text": "产品新建", id: 5 }, { "text": "产品查询", id: 6 }
                        ]
                    }
        ];
        fn(data);
    },
    //获取已分配权限
    getRoleJurisdiction: function (d, fn) {
        var data = [
                    {
                        "text": "审批管理", id: 7
                    },
                    {
                        "text": "发布管理", id: 8
                    },
                    {
                        "text": "数据导出", id: 9
                    }
        ]
        fn(data);
    },
    //获取数据角色
    getData: function (id, fn) {
        var data = {
            id: id,
            title: "我是角色",
            des: "角色的备注"
        }
        fn(data);
    },
}