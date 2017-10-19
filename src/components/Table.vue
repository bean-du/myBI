<template>
    <div id="table">
        <div id="divContainer" class="divContainer"></div>
    </div>
</template>
<script>
import data from '../data.js';
export default({
    data () {
        return {
            tableData : this.$store.getters.getTableData,
        }
    },
    mounted (){
        this.createTable($('#divContainer'),this.tableData)
    },
    methods : {
        createTable (div,data){
            div.html('');
            let divObj = div;
            let table = $('<table class="el-table"></table>');
            table.appendTo(divObj);
            let thead = $('<thead></thead>');
            thead.appendTo(table);
            let tr1 = $('<tr></tr>');
            let tr2 = $('<tr></tr>');
            let tr;
            tr1.appendTo(thead);
            tr2.appendTo(thead);
            let th;
            let td;
            // 渲染表头，只支持两级表头
            for (let i=0; i < data.header.length; i ++){
                th = $('<th colspan="'+data.header[i].categories.length+'">'+ data.header[i].title +'</th>');
                th.appendTo(tr1);
                for (let j =0; j < data.header[i].categories.length; j++){
                    th = $('<th> ' + data.header[i].categories[j] + ' </th>');
                    th.appendTo(tr2);
                }
            }

            // 填充数据
            for (let i = 0; i < data.body.length; i++){
                tr = $('<tr></tr>');
                tr.appendTo(table);
                data.body[i].tableData.splice(0, 0, data.body[i].name);
                data.body[i].tableData.splice(0, 0, data.body[i].area);
                for (let j =0 ; j < data.body[i].tableData.length; j++){
                    td = $('<td>'+ data.body[i].tableData[j] +'</td>');
                    td.appendTo(tr)
                }
                for (let j =0 ; j < data.amount.body[i].data.length; j++){
                    td = $('<td>'+ data.amount.body[i].data[j] +'</td>');
                    td.appendTo(tr);
                }
            }
            // 是否有汇总数据
            if (data.amount){
                table.appendTo(divObj);
                thead.appendTo(table);
                tr.appendTo(thead);
                for (let i=0; i < data.amount.header.categories.length; i ++){
                    th = $('<th rowspan="2">'+ data.amount.header.categories[i] +'</th>');
                    th.appendTo(tr1);
                }
            }
        }
    }
})
</script>
<style>
</style>