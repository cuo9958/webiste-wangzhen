//接口层
var interfaces = {
    //查询待办任务
    searchTodo: function (d, fn) {
        console.log(d);
        var data = [];
        for (var i = 0; i < 20; i++) {
            var temp = {
                id: i + 1,
                code: (Math.random() * 99) >> 0,
                name: "产品名称" + i,
                type: d.type || 0,
                part1: "营业部",
                start: "2017-01-01",
                end: "2017-03-01",
                fan: "大陆",
                part: "首尔",
                time:"2017-03-17"
            };
            data.push(temp);
        }
        fn({data:data,total:5});
    }
}