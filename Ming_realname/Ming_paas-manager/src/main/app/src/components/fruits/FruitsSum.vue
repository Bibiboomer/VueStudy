<template>
    <div class="warp main-content">
        <el-menu mode="vertical" v-bind:default-active="FruitsActive" class="el-menu-vertical-demo"
                 v-bind:router=true>
            <el-menu-item-group>
                <el-menu-item index="/fruits/AppleNo1">Apple</el-menu-item>
                <el-menu-item index="/fruits/BannerNo2">Banner</el-menu-item>
                <el-menu-item index="/fruits/OrangeNo3">Orange</el-menu-item>
            </el-menu-item-group>
        </el-menu>
        <router-view></router-view>
    </div>
</template>
<script>
    export default{
        data: ()=>({
            user: null,
            FruitsActive: ""
        }),
        created: function () {

        },
        mounted(){
            //tab页定位

        },
        methods: {
            positions(){
                let hash = window.location.hash;
                this.realnameActive = hash.substr(1, hash.length - 1);
            }
        }
    }
</script>
<style>
    .main-content .el-menu-item, .el-submenu__title {
        float: left;
        width: 120px;
        height: 38px;
        line-height: 38px;
        margin-left: 30px;
        margin-bottom: 40px;
        text-align: center;
        background: #FFFFFF;
        border-radius: 4px;
        border: 1px solid #bfcbd9;
    }

    .main-content .el-menu {
        background: #f1f1f1;
    }

    .content-table {
        padding-top: 20px;
    }

    .el-col {
        border-radius: 4px;
    }

    .bg-purple-dark {
        background: #99a9bf;
    }

    .bg-purple {
        background: #d3dce6;
    }

    .bg-purple-light {
        background: #f9f9f9;
    }

    .grid-content {
        min-height: 42px;
        line-height: 42px;
        padding-left: 20px;
    }

    .el-dialog__body .el-table {
        margin-top: 10px;
    }

    .row-bg {
        padding: 10px 0;
        background-color: #f9fafc;
    }

    .dialog-modal {
        min-width: 960px;
        min-height: 550px;
    }

    .query-input {
        text-align: center;
    }

    .query-input .el-input {
        width: 185px;
        margin: 0 15px 0 5px;
    }

    .query-input .el-select-dropdown__item.selected {
        background: #f7a119;
    }

</style>
