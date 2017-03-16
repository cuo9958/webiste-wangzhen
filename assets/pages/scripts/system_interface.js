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
                    { id: 1, name: "运价管理" },
                    { id: 2, name: "运价管理", pId: 1 }, { id: 3, name: "运价管理", pId: 1 },
                    { id: 4, name: "产品管理" },
                    { id: 5, name: "产品新建", pId: 4 }, { id: 6, name: "产品查询", pId: 4 },
        ];
        fn(data);
    },
    //获取已分配权限
    getRoleJurisdiction: function (d, fn) {
        var data = [
                    {
                        "name": "审批管理", id: 7
                    },
                    {
                        "name": "发布管理", id: 8
                    },
                    {
                        "name": "数据导出", id: 9
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
    //获取未分配权限
    getDataJurisdictionAll: function (d, fn) {
        var data = [
            { id: 1, name: "济南营业厅", open: true, icon: "fa fa-search" },
			{ id: 2, name: "厦门营业厅", open: true },
            { id: 3, name: "南京营业厅", open: true },
            { id: 4, name: "上海营业厅", open: true },
            { id: 5, name: "深圳营业厅", open: true }
        ];
        fn(data);
    },
    //获取已分配权限
    getDataJurisdiction: function (d, fn) {
        var data = [
                   { id: 7, name: "广州营业厅", open: true }
        ]
        fn(data);
    },
    //搜索用户
    searchUser: function (data, fn) {
        console.log(data);
        var data = [];
        for (var i = 0; i < 10; i++) {
            var temp = {
                id: i + 1,
                user: data.user || "登录名" + i,
                name: data.des || "名字" + Math.random() * 100,
                role: "角色",
                data: "数据角色",
                rtx: "aaa",
                tell: "010-12345657",
                phone: "15600255684",
                state: data.state || 0
            }
            data.push(temp);
        }
        fn({ data: data, total: 20 });
    },
    //设置状态
    setUserState: function (d, fn) {
        fn({code:1});
    },
    //删除用户
    delUser: function (d, fn) {
        fn({ code: 1 });
    },
    //获取用户信息
    getUser: function (d, fn) {
        var data = {
            id: d,
            name: "姓名",
            role: "1",
            data: "数据角色",
            email: "sss@ss.com",
            tell: "010-1234567",
            phone: "15600266487",
            user: "admin",
            rtx:"默认"
        }
        fn(data);
    },
}