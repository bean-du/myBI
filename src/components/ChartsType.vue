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
            <span>要展示的图表 : </span>
            <el-select v-model="value" placeholder="请选择">
                <el-option
                        v-for="item in header"
                        v-if="item.type == 'row'"
                        :key="item.title"
                        :label="item.title"
                        :value="item.name">
                </el-option>
            </el-select>
        </div>
        <div class="form-group chart-form">
            <span>行 维 : </span>
            <el-select v-model="value1" placeholder="请选择">
                <el-option
                        v-for="item in header"
                        :key="item.title"
                        :label="item.title"
                        :value="item.name">
                </el-option>
            </el-select>
        </div>
        <div class="form-group chart-form">
            <span>过 滤 : </span>
            <el-select v-model="value2" placeholder="请选择">
                <el-option
                        v-for="item in header"
                        :key="item.title"
                        :label="item.title"
                        :value="item.categories">
                </el-option>
            </el-select>
        </div>
    </div>
</template>
<script>
export default({
    data () {
        return {
            value : '',
            value1 : '',
            value2 : '',
            header : this.$store.state.tableData.header
        }
    },
    watch :{
        value : (newValue) => {
            console.log(newValue);
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