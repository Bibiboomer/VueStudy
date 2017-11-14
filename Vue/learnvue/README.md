# learnvue

> learn vue

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


##build文件说明
>packjson.json脚本中"dev":"node build/dev-server.js"是入口

build.js
在dev-server.js引入check-version.js文件夹中，检查版本 
require('./check-versions')()//因为check-version.js在require可以省略.js
const config = require('../config')//直接写文件夹默认把index省略，其实是引入config下面的index.js文件

vue的项目不单单是webpack给你启动的server，他是一个express的环境
vue webpack cli 开发


##.vue文件
> 组件文件
```
    <template>
        <div>// 必须有一个根标签，成对包含
            这里复制写DOM
        </div>// 必须有一个根标签，成对包含
    </template>

    <script>
        这里复制写js脚本逻辑

       export default{
           data(){
               //必须用return返会
               name："Vue",
               user:{}, // {}约束类型为对象
               list:[], // []约束类型为数组
               str:''   //如果不约束，没有默认值，至少写一个''

           }
       } 
    </script>

    <style>
        这里负责写样式
    </style>
```

#导出去之后怎么使用；
>在路由里面
```

```

##统一更改激活样式

##统一更改由路由编译后的标签名字，默认是a标签

## 路由嵌套：
## 笔记
> 如果想让组件下面的子组件也显示，需要在模板中加入router-view



工作之前的安排
#Vuex项目的完成
#之前的js原生部分的复习
#把老师

#


<template>
    <div>

    </div>
</template>

<script>
    export dafault{
        data(){
            returm
        }
    }
</script>

## git 创

