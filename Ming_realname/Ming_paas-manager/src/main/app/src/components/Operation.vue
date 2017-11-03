<template>
    <div clas="wrap">
        <ProHeader/>
        <div class="container-box">
            <div class="col-xs-2 left" style=" width: 230px; height:100%" >
                <el-menu mode="vertical" v-bind:default-active="active" class="el-menu-vertical-demo"
                            v-bind:router=true>
                    <el-menu-item-group title="运维查询">
                        <el-menu-item index="/realname">实名认证服务</el-menu-item>
                         <el-menu-item index="/fruits">水果大爆炸</el-menu-item>
                    </el-menu-item-group>
                </el-menu>
            </div>

            <div class="manage-main" style="">
                <router-view></router-view>
            </div>

        </div>
    </div>
</template>

<script>
// 模板中elmen个各层次标签的属性功能介绍：http://element-cn.eleme.io/#/zh-CN/component/menu
//<style scoped>参考文章: http://www.cnblogs.com/Rexxar/p/5555525.html


// <template>
        //template里是模板代码，这里一般是一个闭合的html标签，比如一个div。
//     <div clas="wrap">
//         <div class="col-xs-2 left" style=" width: 230px; height:100%"></div>
//     </div>
// </template>
    
    // 加载模块
    import ProHeader from './ProHeader.vue'

    // ES6语法：为模块指定默认输出
    export default {
        data: ()=>({
            user: null,
            active:"/realname"
        }),
        created: function(){

        },
        methods:{},
        components:{
            // 组件名称
            ProHeader
        }
    }
</script>
<style>
    .left .el-menu {
        background: #ffffff;
    }

    .left .el-menu-item-group__title {
        color: #5c656f;
        font-size: 16px;
        text-align: center;
        padding: 0;
        height: 47px;
        line-height: 47px;
    }

    .manage-main {
        min-width: 1500px;
        width: auto;
        margin: 0 60px 0 280px;
        padding: 30px 0;
        position: relative;
    }

    .left .el-menu-item {
        font-size: 16px;
        padding: 0;
        text-align: center;
        height: 37px;
        line-height: 37px;
        border-left: 5px solid #fff;
        border-bottom: 1px solid #cfcfcf;
        border-top: 1px solid #cfcfcf;
    }

    .left .el-menu .is-active, .left .el-menu .el-menu-item:hover {
        background: #f9f9f9;
        border-left: 5px solid #f7a119;
        color: #f7a119;
    }

    html, body {
        background: #f1f1f1 url(../assets/images/public/bg-sidebar.png) repeat-y left!important;
        min-width: 1360px;
        min-height: 100%;
    }

    .left {
        padding: 0!important;
    }

    dl, ul, ol, li {
        list-style-type: none;
    }

    .tab-content {
        background: #FFFFFF;
        color: #48576a;
        padding: 30px 70px;
        border: 1px solid #cfcfcf;
    }

    .main-content .el-menu--horizontal.el-menu--dark .el-submenu .el-menu-item.is-active, .main-content .el-menu-item.is-active {
        color: #FFFFFF;
        background: #f7a119;
        border: 1px solid #d58512;

    }

    .main-content .el-menu--horizontal.el-menu--dark .el-submenu .el-menu-item:hover, .main-content .el-menu-item:hover {
        color: #FFFFFF;
        background: #f7a119;
        border: 1px solid #d58512;
    }

    .tab-content .el-input--small .el-input__inner {
        height: 34px;
    }

    .el-button--warning:focus, .el-button--warning {
        background: #f7a119;
        border-color: #d58512;
        color: #fff;
    }

    .el-button--warning:hover {
        background: #f7ba2a;
        border-color: #f9c855;
        color: #fff;
    }

    .el-button {
        height: 32px;
        line-height: 1px;
    }

    .el-button.el-button--info {
        background: #475669;
        color: #fff;
        border: 1px solid #324057;
    }

    .el-button.el-button--info:hover, .el-button.el-button--info:focus {
        background: #324057;
        color: #fff;
    }

    .el-select-dropdown__item.selected, .el-select-dropdown__item.selected.hover {
        border-color: #e09620;
        background: #f7a119;
    }

    .el-pager li:hover {
        color: #f7a119;
    }

    .el-pager li.active, .el-pager li.active:hover {
        border-color: #e09620;
        background: #f7a119;
        color: #fff;
        cursor: default;
    }
</style>
