<template>
    <div class="proHeader display-table" style="height: 90px;background: #4b535e;">
        <span>
            <div class="">
                <img src="../assets/images/public/logo.png" class="pull-left"
                     style="margin-top: 25px;"/>
                <div class="pull-left" style=" margin-top: 40px; margin-left: 5px;">
                    <span style="font-size: 18px;">管理平台</span>
                </div>
                <div class="header-menu pull-left">
                    <el-menu theme="dark" :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
                        <el-menu-item index="1" @click="toEvidence">出证管理</el-menu-item>
                        <el-menu-item index="2">Paas管理</el-menu-item>
                    </el-menu>
                </div>
                <div class="pull-right" style="margin-top: 20px;margin-right: 50px;">
                    <div class="display-inline" style="border-right: 1px solid;margin-right: 8px;padding-right: 8px">
                        <p>{{admin.name}}</p>
                        <p>{{admin.role}}</p>
                    </div>
                    <div class="display-inline">
                        退出登录
                    </div>
                </div>
            </div>
        </span>
    </div>
</template>
<script>
    export default {
        name: 'ProHeader',
        components: {},
        data: function () {
            return {
                activeIndex:'2'
            };
        },
        created: function () {
        }
        ,
        mounted: function () {
        }
        ,
        computed: {
            admin: function () {
                return {
                    name: "admin",
                    role: "超级管理员"
                }
            }
        }
        ,
        methods: {
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            },
            toEvidence(){
                window.location.href = "../static/home.html";
            }
        }
        ,
    }
</script>
<style>
    body {
        margin: 0;
    }

    .proHeader {
        color: #ffffff;
        padding: 0px 20px;
        min-width: 1780px;
    }

    .display-table {
        display: table;
        height: 100%;
        width: 100%;
    }

    .display-table > span {
        display: table-cell;
        vertical-align: middle;
    }

    .display-inline {
        display: inline-block;
        vertical-align: middle;
    }
    .proHeader .el-menu--dark {
        background-color: #4b535e;
        height: 90px;
    }
    .proHeader .el-menu--dark .el-menu-item{
        width: 120px;
        height: 100%;
        text-align: center;
        font-size: 16px;
        line-height: 133px;
        background: url(../assets/images/public/topmenu-ico.png) no-repeat -56px 15px;
    }
    .proHeader .el-menu-item:first-child {
        margin-left: 53px;
    }
    .proHeader .el-menu--horizontal.el-menu--dark .el-submenu .el-menu-item.is-active, .proHeader .el-menu-item.is-active {
        background: #636f7d url(../assets/images/public/topmenu-ico.png) no-repeat -56px 15px;
        border-bottom: 4px solid #f7a119;
        color: #fff;
    }
    .proHeader .el-menu .el-menu-item:hover{
        background: #636f7d url(../assets/images/public/topmenu-ico.png) no-repeat -56px 15px;
        border-bottom: 4px solid #f7a119;
        color: #fff;
    }
</style>
