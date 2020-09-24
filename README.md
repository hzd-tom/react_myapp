### React 移动端项目步骤

##### 1.create-react-app(react脚手架)创建项目

````
create-react-app ygshop
````

##### 2.在码云上创建一个远程仓库

![image-20200924194834722](C:%5CUsers%5C86135%5CAppData%5CRoaming%5CTypora%5Ctypora-user-images%5Cimage-20200924194834722.png)

 ![image-20200924195309375](C:%5CUsers%5C86135%5CAppData%5CRoaming%5CTypora%5Ctypora-user-images%5Cimage-20200924195309375.png)

##### 3.开始移动端配置（px→rem）

1. 暴露webpack配置，即 react-scripts 包

```bash
npm run eject
```

⚠️ 在运行该命令的时候，要先将已经修改的文件提交到本地仓库中，否则会报错！

2. 安装项目项目需要的包 `lib-flexible` 、 `postcss-px2rem` 和 `postcss-loader`：

```bash
npm install postcss-px2rem lib-flexible --save
npm install postcss-loader --dev
```

3. 在项目的 public/index.html 入口文件添加 

```html
<meta name="viewport" content="width=device-width,inital-scale=1.0,
    maximum-scale=1.0,minimum-scale=1.0,user-scalable=no">
```

4. 然后在项目入口文件 index.js 中引入 `lib-flexible`

```js
import "lib-flexible" ;
```

5. 接着，在项目config目录下的 webpack.config.js 中引入 `postcss-px2rem`

```bash
const px2rem = require("postcss-px2rem");
```

![image-20200627220634758](58.React%20%E7%A7%BB%E5%8A%A8%E7%AB%AF%E9%A1%B9%E7%9B%AE%E6%AD%A5%E9%AA%A4.assets/image-20200627220634758.png)

- 在 webpack.config.js 的 `postcss-loader` loader里面添加 ：

```js
{
        loader: require.resolve("postcss-loader"),
        options: {
          /* 省略代码... */
          plugins: () => [
            require( postcss-flexbugs-fixes ),
            require( postcss-preset-env )({
              autoprefixer: {
                flexbox:  no-2009 ,
              },
              stage: 3,
            }),
            px2rem({remUnit: 37.5}), // 添加的内容
            /* 省略代码... */
          ],
          sourceMap: isEnvProduction && shouldUseSourceMap,
        },
      },
```



重新启动项目，发现里面的px单位都变成了rem

注意：使用 px2rem-loader 后再使用px上有些不同：
    直接写 px ，编译后会直接转化成rem —— 除开下面两种情况，其他长度用这个
    在 px 后面添加 /*no*/ ，不会转化 px，会原样输出。 —— 一般border需用这个
    在 px 后面添加 /*px*/ ，会根据 dpr 的不同，生成三套代码。—— 一般字体需用这个,默认是@2x图 style

```css
.App {
  .header {
    border: 10px solid #ddd; /*no*/
    color:#f00;
    font-size: 100px; /*px*/  
  }
}
```

##### 4.[引入移动端UI库 ant-design-mobile（按需加载）](https://mobile.ant.design/index-cn)

   1.安装antd-mobile 

```bash
$ npm install antd-mobile --save
```

2. 安装babel-plugin-import实现按需加载组件代码和样式

```bash
yarn add babel-plugin-import
```

3.在package.json文件中找到babel添加配置如下

```json
  "plugins": [
      [
        "import",
        {
          "libraryName": "antd-mobile",
          "style": "css"
        }
      ]
    ]
```

![image-20200925003246634](58.React%20%E7%A7%BB%E5%8A%A8%E7%AB%AF%E9%A1%B9%E7%9B%AE%E6%AD%A5%E9%AA%A4.assets/image-20200925003246634.png)
