/**
 * Created by shuo on 2016/8/16.
 */
var fs = require('fs');
// 使用异步回调的方式 因为是异步的，所以对于数据读取完后的操作我们需要使用回调的方式进行处理
// 这点对于习惯事件操作的前端开发应该是习以为常的 。
fs.readFile('data.json',function(err, data){
    if(err){ }else{
        console.log(data.length);
    }
});