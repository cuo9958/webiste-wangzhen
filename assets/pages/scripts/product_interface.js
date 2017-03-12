//接口层
var interfaces = {
    //查询产品
    querylist: function (data, fn) {
        var res = {
            data: [],
            total:5
        }
        console.log(data);
        for (var i = 0; i < 20; i++) {
            var temp = {
                id: i,
                code: "CM" + Math.round(Math.random() * 9999),
                title: "测试名称" + i,
                type: data.type || "公布",
                start: "2017-01-12",
                end: "2017-10-30",
                range: "全球GDS",
                state:data.state||"未提交",
                createDate:"2017-01-01"
            }
            res.data.push(temp);
        }
        fn(res);
    },
    //产品提交审核
    examine: function (data,fn) {
        console.log(data);
        fn();
    }
}