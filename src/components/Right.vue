<template>
    <div id="right">
        <el-row>
            <el-col :span="6"><div class="grid-content bg-purple body-left">
                <api-config></api-config>
                <data-tree></data-tree>
            </div></el-col>
            <el-col :span="18"><div class="grid-content bg-purple-light">
                <charts-type></charts-type>
                <div class="right-two">
                    <el-tabs v-model="activeName" @tab-click="handleClick" type="border-card">
                        <el-tab-pane label="图表展示" name="first">
                            <charts></charts>
                        </el-tab-pane>
                        <el-tab-pane label="表格展示" name="second">
                            <table-show></table-show>
                        </el-tab-pane>
                    </el-tabs>
                </div>

            </div></el-col>
        </el-row>
    </div>
</template>
<script>
import Charts from './Charts.vue'
import ChartsType from './ChartsType.vue'
import ApiConfig from './ApiConfig.vue'
import DataConfig from './DataConfig.vue'
import DataTree from './DataTree.vue'
import TableShow from './Table.vue'
export default({
    components : {
        Charts,ChartsType,ApiConfig,DataConfig,TableShow,DataTree
    },
    data (){
        return {
            activeName : 'first',
        }
    },
    methods : {
        handleClick(tab, event) {
            this.$store.commit('putChoiceTab',tab);
        }
    }
})
</script>
<style>
    .body-left {
        width: 40%;
    }
    .right-two{
        margin-top: 20px;
    }
</style>