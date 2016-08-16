/**
 * Created by shuo on 2016/8/16.
 */
var mychart = echarts.init(document.getElementById("main"));
var test;
$.get('data.json',function(data){
    mychart.hideLoading();
    test=data;
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
                dataZoom: {
                    yAxisIndex: 'none'
                },
                magicType: {type: ['line', 'bar']},
                restore: {},
                saveAsImage: {}
            }
        },
        xAxis:  {
            type: 'category',
            boundaryGap: true,
            data: data.date
        },
        yAxis: {
            type: 'value',
            scale: true,
            axisLabel: {
                formatter: '{value} KG'
            }
        },
        series: [
            {
                name:'晚上体重',
                type:'line',
                data:data.PW,
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
});
