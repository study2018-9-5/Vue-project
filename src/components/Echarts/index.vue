<template>
  <div class="echarts">
    <div :id="item" :style="{width: '300px', height: '300px'}" v-for="item in arr"></div>
  </div>
</template>

<script>
  export default {
    name: 'Echarts',
    data(){
      return{
        arr:['a','b','c','d']
      }
    },
    mounted(){
      this.drawLine();
    },
    methods:{
      drawLine(){
        // 基于准备好的dom，初始化echarts实例
        this.arr.map(item => {
          let myChart = this.$echarts.init(document.getElementById(item))
          // 绘制图表
          myChart.setOption({
              title: { text: '在Vue中使用echarts' },
              tooltip: {},
              xAxis: {
                  data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
              },
              yAxis: {},
              series: [
                {
                  name: '销量',
                  type: 'line',
                  data: [5, 20, 36, 10, 10, 20]
                },
                {
                  name: '销量',
                  type: 'bar',
                  data: [5, 20, 36, 10, 10, 20]
                }
              ]
          });
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  .echarts{
    display: flex;
  }
</style>