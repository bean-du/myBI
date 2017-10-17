<template>
    <div id="chart-type" class="form-horizontal">
        <div class="form-group chart-form">
            <span>图表类型 : </span>
            <ul class="type_list">
                <li><a href="">柱状图</a></li>
                <li><a href="">饼状图</a></li>
                <li><a href="">曲线图</a></li>
                <li><a href="">3D图</a></li>
                <li><a href="">金字塔图</a></li>
            </ul>
        </div>
        <div class="form-group chart-form">
            <span>列维 : </span>
            <input type="text" class="form-control">
        </div>
        <div class="form-group chart-form">
            <span>行维 : </span>
            <input type="text" class="form-control">
        </div>
        <div class="form-group chart-form">
            <span>过滤 : </span>
            <input type="text" class="form-control">
        </div>
    </div>
</template>
<script>
export default({
    data () {
        return {

        }
    },
    methods : {

    }
})
</script>
<style>
    .type_list {
        list-style: none;
    }
    .chart-form > span {
        float: left;
    }
    .type_list > li{
        display:inline;
    }
</style>