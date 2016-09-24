/**
 * Created by shuo on 2016/8/16.
 */
var mychart = echarts.init(document.getElementById("main"));
var test;
$.get('data.json',function(data){
    mychart.hideLoading();
    var option = {
        title: {
            text: '体重变化'
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data:['晚上体重','早上体重']
        },
        toolbox: {
            show: true,
            feature: {
                magicType: {type: ['line', 'bar']},
                restore: {},
                saveAsImage: {}
            }
        },
        xAxis:  {
            type: 'category',
            name: '时间',
            boundaryGap: true,
            data: data.date
        },
        yAxis: [{
                type: 'value',
                name: '体重',
                scale: true,
                axisLabel: {
                    formatter: '{value} KG'
                }
            }],
        series: [
            {
                name:'晚上体重',
                type:'line',
                data:data.PW,
                yAxisIndex: 0,
                markPoint: {
                    data: [
                        {type: 'max', name: '最大值'},
                        {type: 'min', name: '最小值'},
                        {type: 'average', name: '平均值'}
                    ]
                },
                markLine: {
                    data: [
                        {type: 'max', name: '最大值'},
                        {type: 'min', name: '最小值'},
                        {type: 'average', name: '平均值'}
                    ]
                }
            },
            {
                name:'早上体重',
                type:'line',
                data:data.AW,
                yAxisIndex: 0,
                markPoint: {
                    data: [
                        {type: 'max', name: '最大值'},
                        {type: 'min', name: '最小值'},
                        {type: 'average', name: '平均值'}
                    ]
                },
                markLine: {
                    data: [
                        {type: 'max', name: '最大值'},
                        {type: 'min', name: '最小值'},
                        {type: 'average', name: '平均值'}
                    ]
                }
            }
        ]
    };
    mychart.setOption(option);
    test=data;
    var ra = test.AW.sort();
    $("#now_a").text(ra[0]*2);
    $("#ra").text(((67.15-ra[0])*2).toFixed(2))
    var rp = test.PW.sort();
    $("#now_p").text(rp[0]*2);
    $("#rp").text(((67.15-rp[0])*2).toFixed(2))
});
