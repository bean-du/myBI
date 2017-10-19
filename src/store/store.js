import Vue from 'vue';
import vuex from 'vuex';

Vue.use(vuex);

const Store = new vuex.Store({
    state : {
        choiceTab : {},
        choiceChartsTab : '',
        apiUrl : '',
        tableData : {
            header : [
                {
                    title : '大区',
                    name : 'area',
                    categories : ['大区','总监'],
                    type : 'columnTitle'
                },
                {
                    title : '月度任务',
                    name: 'monthPlan',
                    categories: ['野马T70', '野马T80', '野马T90','汇总'],
                    type : 'row'
                },
                {
                    title : '今日实绩',
                    name : 'today',
                    categories :['野马T70', '野马T80','野马T90','汇总'],
                    type : 'row'

                },
                {
                    title : '月度实绩',
                    name : 'month',
                    categories :['野马T70', '野马T80','野马T90','汇总'],
                    type : 'row'
                },
                {
                    title : '年度实绩',
                    name : 'year',
                    categories :['野马T70', '野马T80','野马T90','汇总'],
                    type : 'row'
                }
            ],
            body: [
                {
                    area : '华中大区',
                    name : '李美玲',
                    tableData: [1,2,3,6,0,1,0,1,0,1,1,1,2,3,6,9],
                    monthPlan : [1,2,3,6],
                    month :  [1,1,1,3],
                    today:   [2,1,2,5],
                    year:   [3,5,8,16]
                },
                {
                    area : '华南大区',
                    name : '陈建国',
                    tableData: [1,2,3,6,0,1,0,1,0,1,1,1,2,3,6,9],
                    monthPlan : [6,2,3,6],
                    month :  [0,1,0,1],
                    today:   [1,1,2,4],
                    year:   [1,5,1,6]
                },
                {
                    area : '华北大区',
                    name : '王大路',
                    tableData: [1,2,3,6,0,1,0,1,0,1,1,1,2,3,6,9],
                    monthPlan : [1,1,4,6],
                    month :  [3,1,0,4],
                    today:   [0,1,2,3],
                    year:   [10,5,8,23]
                }
            ],
            amount : {
                header :
                {
                    name: '汇总统计',
                    categories: ['完成率', '排名', '备注']
                },
                body : [
                    {
                        area : '华中大区',
                        name : '李美玲',
                        data: ['40%',1,'-'],
                        chartData : ['30%',1,'-'],
                    },
                    {
                        area : '华南大区',
                        name : '陈建国',
                        data: ['30%',2,'-'],
                        chartData : ['30%',2,'-'],
                    },
                    {
                        area : '华北大区',
                        name : '王大路',
                        data: ['20%',3,'-'],
                        chartData : ['30%',3,'-'],
                    }
                ]
            }
        },
    },
    getters : {
        isLogin : state => {
            return true;
        },
        chartData : state => {
            return state.chartData;
        },
        getTableData : state => {
            return state.tableData;
        },
        getDimension : state => {

        },
        getChartData : state => {
            let data = state.tableData;
            let list = [];
            let categories = [];
            data.body.forEach(function (val, key) {
               categories.push(val.area + '['+ val.name +']')
            });
            data.header.forEach((item,index)=>{
                if(index > 0){
                    let cache = item;
                    let chartsData = {
                        chart:{type:'bar'},
                        xAxis:{categories:[]},
                        title:{text:''},
                        yAxis: {title: {text: '台'}},
                        series : [],
                    };
                    chartsData.xAxis.categories = categories;
                    chartsData.title.text = item.title;
                    chartsData.title.name = item.name;

                    item.categories.forEach((v,k)=>{
                        let series = [];
                        series = {
                            name : v,
                            data : []
                        };
                        data.body.forEach((val,key)=>{
                            series.data.push(val[cache['name']][k]);
                        });
                        chartsData.series.push(series);
                    });
                    list.push(chartsData);
                }
            });
            return list;
        },
        getDataFromTableData : state => {
            let  datas = [];
            for (let i = 0; i < state.tableData.header.length; i++){
                let chartsData = {
                    chart:{type:''},
                    xAxis:{categories:[]},
                    title:{text:''},
                    yAxis: {title: {text: '台'}},
                };
                if(state.tableData.header[i].type == "row"){
                    chartsData.chart.type = "bar";
                    chartsData.title.text = state.tableData.header[i].title;
                    chartsData.xAxis.categories = state.tableData.header[i].categories;
                    chartsData.series = [];
                    for (let j = 0; j < state.tableData.body.length; j++){
                        let data = {
                            name : state.tableData.body[j].area + state.tableData.body[j].name,
                            data : state.tableData.body[j][state.tableData.header[i].name]
                        };
                        chartsData.series.push(data)
                    }
                    datas.push(chartsData)
                }
            }
            if (state.tableData.amount){
                let chartsData = {
                    chart:{type:''},
                    xAxis:{categories:[]},
                    title:{text:''},
                    yAxis: {title: {text: 'something'}},
                };
            }
            return datas;
        },
    },
    mutations : {
        putChartData : (state, payload) => {
            state.chartData = payload;
        },
        putChoiceApi : (state , payload) => {
            state.apiUrl = payload;
        },
        putChoiceTab : (state ,payload) =>{
            state.choiceTab = payload;
        },
        putChoiceChartsTab : (state , payload) => {
            state.choiceChartsTab = payload;
        }
    }
});

export default Store;

function getJsonLength(json){
    var cc = 0;
    for(var i in json)
    {
        cc++;
    }
    return cc;
}