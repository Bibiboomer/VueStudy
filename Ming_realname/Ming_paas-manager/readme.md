## pass-manager 模板参照
    
### 目录分析
```
    - pom.xml

    -.springBeans

    - src文件夹
            -mian
                - java
                - resources
                - webapp
                - app [ 项目文件：进行初始化等一系列操作]                 
```

#### app 项目文件夹部分文件分析
-参开链接：https://segmentfault.com/a/1190000007880723
    - bulid ：文件夹中大部分是webpack的文件，配置参数基本无改动
              **该文件大部分情况下无需改动**

    - config ：文件夹中为vue项目的基本配置文件,
            - [index.js ：项目一些配置变量 [12]
                - proxyTabl：参数解决前后端连调时有跨域问题
                ```
                    proxyTable[30]: {
                        参考链接：http://www.jianshu.com/p/95b2caf7e0da
                                '/paas-manager/v1': {
                                    target: 'http://127.0.0.1:8780',
                                    changeOrigin: true,
                                    pathRewrite: {
                                    '^/paas-manager/v1': '/paas-manager/v1'
                                    }
                                }
                                },
                ```]
            - dev.env.js ： 开发环境变量   
            - prod.env.js ： 生产环境变量     
  
   
    - src  ：源码文件夹,基本线上文件夹都放在这里，就是一些开发的文件




    - .babelrc ： ES6语法编译配置          
        ```
            学习参考链接：https://segmentfault.com/q/1010000008849468?_ea=1756975
            ["es2015", { "modules": false }]
        ```
        ```
            学习参考链接：http://www.cnblogs.com/Leo_wl/p/6900113.htm
            ["component", [
                {
                    "libraryName": "element-ui",
                    "styleLibraryName": "theme-default"
                }
            ]]
        ```

    - .editorconfig ： 定义代码格式

    - .gitignore : git上传时需要忽略的代码文件格式

    - .postcssrc.js ：自动加上css前缀

    - index.html ： 入口页面

    - package.json : 项目基本信息


    


## 问题
-  dist文件件没有产生

  // http://cnodejs.org/topic/56460e0d89b4b49902e7fbd3
    "babel-preset-es2015": "^6.24.1",



## src文件具体操作
    - mian.js 文件引入需要的模块和组件，挂载实例



## vue 学习资源
腾讯云：https://zhuanlan.zhihu.com/p/26183652
