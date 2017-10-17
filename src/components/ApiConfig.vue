<template>
    <div id="api-config">
        <el-collapse v-model="activeName" @change="handleChange">
            <el-collapse-item title="test">
                <el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick" ></el-tree>
            </el-collapse-item>
        </el-collapse>
    </div>
</template>
<script>
export default({
    data(){
        return {
            activeName : [1],
                data: [
                    {
                        label: '一级 1',
                        children: [{
                            label: '二级 1-1',
                            children: [{
                                label: '三级 1-1-1',
                                apiUrl : 'http://test.dev/api-1',
                            }],
                        }]
                    },
                    {
                        label: '一级 2',
                        children: [{
                            label: '二级 2-1',
                            apiUrl : 'http://test.dev/api-2',
                        }]
                    },

                ],
                defaultProps: {
                    children: 'children',
                    label: 'label'
                }
            }
    },
    methods : {
        handleChange (){

        },
        handleNodeClick(data){
            if(data.apiUrl){
                this.$store.commit('putChoiceApi',data.apiUrl)
            }
        }
    }
})
</script>
<style>

</style>