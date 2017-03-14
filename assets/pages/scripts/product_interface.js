//接口层
var interfaces = {
    //查询产品
    querylist: function (data, fn) {
        var res = {
            data: [],
            total: 5
        }
        console.log(data);
        for (var i = 0; i < 20; i++) {
            var temp = {
                id: i + 1,
                code: "CM" + Math.round(Math.random() * 9999),
                title: "测试名称" + (Math.random() * 99 >> 0),
                type: data.type || "公布",
                start: "2017-01-12",
                end: "2017-10-30",
                range: "全球GDS",
                state: data.state || "未提交",
                createDate: "2017-01-01"
            }
            res.data.push(temp);
        }
        fn(res);
    },
    //产品提交审核
    examine: function (data, fn) {
        console.log(data);
        fn();
    },
    //保存产品信息
    saveProduct: function (data, fn) {
        console.log(data);
        fn({ code: 1,id:1 });
    },
    //获取产品的详情
    getProduct: function (id, fn) {
        var data = {
            title:"测试标题",
            code: "code123",
            end: "2017-3-30",
            except: [
                {
                    date_end: "2017-3-23",
                    date_start: "2017-3-23"
                },
                {
                    date_end: "2017-3-23",
                    date_start: "2017-3-23"
                }
            ],
            fenxi: "<p>测试</p>",
            isCheck: true,
            jingzheng: '<p><span style="color: rgb(51, 51, 51); font-family: &#39;Open Sans&#39;, sans-serif; font-size: 14px; line-height: 20px; text-align: right;  background-color: rgb(255, 255, 255);">竞争</span></p>',
            od: [
                {
                    country1: "1",
                    country2: "0",
                    loc1: "aa",
                    loc2: "bbb"
                },
                {
                    country1: "0",
                    country2: "1",
                    loc1: "ss",
                    loc2: "dd"
                }
            ],
            range: "2",
            start: "2017-3-8",
            tiaozheng: '<p><span style="color: rgb(51, 51, 51); font-family: &#39;Open Sans&#39;, sans-serif; font-size: 14px; line-height: 20px; text-align: right;  background-color: rgb(255, 255, 255);">计划</span></p>',
            travel: [
                {
                    date_end:"2017-3-25",
                    date_start:"2017-3-17"
                },
                {
                    date_end: "2017-3-25",
                    date_start: "2017-3-17"
                }
            ],
            type: "1",
            xiaoshou: "",
            yuqi:""
        }
        setTimeout(function () {
            fn(data);
        }, 1000);
    },
    //获取运价
    getPrice: function (id, fn) {
        var result = [];
        for (var i = 0; i < 5; i++) {
            var temp = {
                id: i + 1,

            }
            result.push(temp);
        }
        fn(result);
    },
    //添加运价
    addPrice: function (d, fn) {
        d.id = (Math.random() * 999) >> 0;
        fn(d);
    },
}