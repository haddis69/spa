$(function(){
        var myChart = echarts.init(document.getElementById('main'));
        var xData = [],  
          yData = [];
        for(var m=0;m<=1;m+=0.01){
         xData.push(m);
          
         if(m === 0 || m===1){
             yData.push(0);
          }else{
             yData.push(-1*m*Math.log2(m)-(1-m)*Math.log2(1-m));
          }
      }
       // 指定图表的配置项以及数据
      var option = {
         title: {
            text: '二进熵函数'
         },
         tooltip: {},
            legend: {
            data:['信息量']
          },
          xAxis: {
              data:xData
          },
          yAxis: {},
          series: [{
              name: '信息量',
              type: 'line',
              smooth: 'true',
              data: yData
          }]
      };
      myChart.setOption(option);
  });