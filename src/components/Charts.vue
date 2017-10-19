<template>
    <div id="charts">
        <el-button type="default" @click="transformData">切换维度</el-button>
        <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane v-for="(v,i,k) in chartData" :label="v.title.text" :name="k" >
                <div  :id="'container' + i"></div>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>
<script>
    import Charts from 'highcharts';
    export default({
        data () {
            return {
                transform : false,
                activeName : '0',
                chartData : this.$store.getters.getDataFromTableData,
                choice : {},
                choiceTab : 0
            }
        },
        watch : {
            activeName : function (newActiveName) {
                this.choice = this.chartData[newActiveName];
                var chart = new Charts.Chart('container'+newActiveName,this.choice)
            }
        },
        mounted (){
            console.log(this.$store.getters.getChartData);
            var chart = new Charts.Chart('container'+ this.activeName,this.chartData[this.activeName])
        },
        methods : {
            handleClick (tab){
                this.choiceTab = tab.index;
            },
            transformData(){
                this.transform = !this.transform;
                this.chartData = this.transform ? this.$store.getters.getChartData : this.$store.getters.getDataFromTableData;
                this.choice = this.chartData[this.choiceTab];
                var chart = new Charts.Chart('container'+ this.activeName,this.choice)
            }
        }
    })

</script>
<style>
    #container {
        width: 100%;
        height: 100%;
    }
</style>