<template>
    <div id="charts">
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
                activeName : '0',
                chartData : this.$store.getters.getDataFromTableData,
                choice : {},
            }
        },
        watch : {
            activeName : function (newActiveName) {
                console.log(newActiveName)
                this.choice = this.chartData[newActiveName];
                var chart = new Charts.Chart('container'+newActiveName,this.choice)
            }
        },
        mounted (){
            var chart = new Charts.Chart('container'+ this.activeName,this.chartData[this.activeName])
        },
        methods : {
            handleClick (tab){

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