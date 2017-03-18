//接口层
var products = [
    { id: 1, code: "SC17S08", title: "山航全国经济南/青岛中转至新德里运价（散客）", type: "中转", start: "2017/2/1", end: "2017/12/31", range: "中国大陆", state: "已发布", createDate: "2017/1/17" },
    { id: 2, code: "SC17S09", title: "山航全国经济南/青岛中转至新德里运价（散客）", type: "中转", start: "2017/2/2", end: "2017/12/31", range: "中国大陆", state: "已发布", createDate: "2017/1/17" },
    { id: 3, code: "SC17S10", title: "山航全国经济南中转至东京运价（散客）", type: "中转", start: "2017/2/3", end: "2017/12/31", range: "中国大陆", state: "已发布", createDate: "2017/1/17" },
    { id: 4, code: "TAO1728", title: "山航青岛-大阪、东京代码共享航班销售价格", type: "销售", start: "2017/2/1", end: "2017/12/31", range: "中国大陆", state: "已发布", createDate: "2017/1/17" },
    { id: 5, code: "ICN1706", title: "首尔至山东销售运价20170326-20171231", type: "销售", start: "2017/3/26", end: "2017/10/28", range: "全球GDS", state: "已发布", createDate: "2017/1/17" },
    { id: 6, code: "ICN1703", title: "首尔-济南VU舱促销运价20170326-20171028", type: "促销", start: "2017/3/26", end: "2017/10/28", range: "全球GDS", state: "已发布", createDate: "2017/1/17" },
    { id: 7, code: "ICN1704", title: "首尔-青岛VU舱促销运价20170326-20171028", type: "促销", start: "2017/3/26", end: "2017/10/28", range: "全球GDS", state: "已发布", createDate: "2017/1/17" },
    { id: 8, code: "ICN1705", title: "首尔-烟台VU舱促销运价20170326-20171028", type: "促销", start: "2017/3/26", end: "2017/10/28", range: "全球GDS", state: "已发布", createDate: "2017/1/17" },
    { id: 9, code: "SC17S12", title: "山航全国经山东中转至首尔运价20170326-20171028", type: "中转", start: "2017/3/26", end: "2017/10/28", range: "中国大陆", state: "已发布", createDate: "2017/1/17" },
    { id: 10, code: "SC17S11", title: "山航全国经济南、重庆中转至暹粒、金边、清迈20170326-20171028", type: "中转", start: "2017/3/26", end: "2017/10/28", range: "中国大陆", state: "已发布", createDate: "2017/1/17" },
    { id: 11, code: "SC17S13", title: "山航全国经山东中转至曼谷运价20170326-20171028(除外0711-0826,1001-1007)", type: "中转", start: "2017/3/26", end: "2017/10/28", range: "中国大陆", state: "已发布", createDate: "2017/1/17" },
    { id: 12, code: "SC17S16", title: "山航全国经山东中转至大阪运价2017.03.26-2017.10.28", type: "中转", start: "2017/3/26", end: "2017/10/28", range: "中国大陆", state: "已发布", createDate: "2017/1/17" },
    { id: 13, code: "SC17S14", title: "山航全国经烟台中转至台北运价20170326-20171028（除外0711-0826）", type: "中转", start: "2017/3/26", end: "2017/10/28", range: "中国大陆", state: "已发布", createDate: "2017/1/17" },
    { id: 14, code: "SC17S15", title: "山航全国经济南、青岛中转至台北运价20170326-20171028（除外0711-0826）", type: "中转", start: "2017/3/26", end: "2017/10/28", range: "中国大陆", state: "已发布", createDate: "2017/1/17" },
    { id: 15, code: "BKK1720", title: "曼谷-山东航线销售价格2017.03.01-2017.12.31", type: "销售", start: "2017/3/1", end: "2017/10/28", range: "全球GDS", state: "已发布", createDate: "2017/1/17" },
    { id: 16, code: "SC17S26", title: "暑运山航全国经济南、重庆中转至暹粒、金边、清迈2017.0711-2017.0826、1001-1007", type: "中转", start: "2017/7/11", end: "2017/10/28", range: "全球GDS", state: "已发布", createDate: "2017/1/17" },
    { id: 17, code: "SC17S27", title: "暑运山航全国经山东中转至曼谷运价2017.0711-2017.0826、1001-1007", type: "中转", start: "2017/7/11", end: "2017/10/28", range: "全球GDS", state: "已发布", createDate: "2017/1/17" },
    { id: 18, code: "TAO1737", title: "青岛-大阪预售D 舱20170227-20171231", type: "促销", start: "2017/2/7", end: "2017/12/31", range: "全球GDS", state: "已发布", createDate: "2017/1/17" },
    { id: 19, code: "TEL17121", title: "青岛-大阪预售D 舱20170227-20171231", type: "促销", start: "2017/2/7", end: "2017/12/31", range: "直销", state: "已发布", createDate: "2017/1/17" },
    { id: 20, code: "SC17S25", title: "山航全国经山东中转至首尔运价07月11日-08月26日,10月01日-10月07日", type: "中转", start: "2017/7/11", end: "2017/10/7", range: "中国大陆", state: "已发布", createDate: "2017/1/17" },
];
var interfaces = {
    //查询产品
    querylist: function (data, fn) {
        var res = {
            data: [],
            total: 1
        }
        console.log(data);
        for (var i = 0; i < products.length; i++) {
            var tt = products[i];
            if (data.title) {
                if (tt.title.indexOf(data.title) < 0) continue;
            }
            if (data.type) {
                if (data.type != tt.type) continue;
            }
            if (data.code) {
                if (tt.code.indexOf(data.code) < 0) continue;
            }
            if (data.start) {
                if (data.start != tt.start) continue;
            }
            if (data.end) {
                if (data.end != tt.end) continue;
            }
            if (data.state) {
                if (data.state != tt.state) continue;
            }
            if (tt) res.data.push(tt);
        }
        console.log(res);
        if (data.pageCount != -1 && res.data.length > data.pageCount) {
            res.total = res.data.length / data.pageCount;
            if (res.total % data.pageCount > 0) {
                res.total++;
            }
            for (var i = 0; i < data.pageCount; i++) {
                res.data[i] = res.data[(data.currPage - 1) * data.pageCount + i];
            }
            res.data.length = data.pageCount;
            for (var i = res.data.length; i > 0; i--) {
                if (!res.data[i]) {
                    res.data.length = i;
                }
            }
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
        fn({ code: 1, id: 1 });
    },
    //获取产品的详情
    getProduct: function (id, fn) {
        var data = {
            title: "测试标题",
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
                    date_end: "2017-3-25",
                    date_start: "2017-3-17"
                },
                {
                    date_end: "2017-3-25",
                    date_start: "2017-3-17"
                }
            ],
            type: "1",
            xiaoshou: "",
            yuqi: ""
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