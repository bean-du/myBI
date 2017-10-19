<template>
    <div id="data-tree">
        <!--<button @click="getData" type="success">testGet</button>-->
        <!--<button @click="testPost" type="success">testPost</button>-->
        <!--<el-tree :data="tree" :props="defaultProps" @node-click="handleNodeClick"></el-tree>-->
    </div>
</template>
<script>
import axios from 'axios';
import qs from 'qs';
export default({
    data (){
        return {
            tree : this.$store.state.tableData,
            defaultProps: {
                children: 'children',
                label: 'title'
            }
        }
    },
    methods : {
        handleNodeClick (){

        },
        getJsonLength(json){
            var cc = 0;
            for(var i in json)
            {
                cc++;
            }
            return cc;
        },
        getData (){
            axios.get('http://127.0.0.1:8090/test').then(res => {
                console.log(res);
            })
        },
        testPost(){
            axios.post('http://127.0.0.1:8090/user',qs.stringify({user:'admin',pwd:'123456a'})).then(res => {
                console.log(res);
            })
        }
    }
})
</script>