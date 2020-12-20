# lingkong wing lite 

## 介绍
灵翼是一个由[灵空团队](https://gitee.com/lingkonggzs) zhetengtiao
开发，基于JavaScript的在线内容生成系统

相比较于[lingkong-wing内核](https://gitee.com/lingkonggzs/lingkong-wing-kernel/tree/master)
，它更快，生成速度更快，不用繁琐的上传html文件，只需修改json文件即可。

## 亮点
* 更快
* 更强，支持markdown语法
* 代码更加简洁明了
* 无需更改、上传html文件，只需修改json文件
* 更轻 主体+html总共50kb都不到
* 对服务器要求更低，只需静态服务器即可

## 使用
1.到本仓库发行版界面下载winglite.js
(注：exh版本为单页面版本，suc即双页面版本。详见demo)

2.在本仓库内挑选主题
（注：如果您下载的是exh版本，则需要到文件夹blog_exhibition选择主题。suc一样）

3.新建一个html文件，内容像这样：
```html
<html>
<head>
    <title>xxx的博客</title>
    <script src="https://cdn.bootcdn.net/ajax/libs/jquery/3.5.1/jquery.js"></script>
    <script src="blog_exhibition.js"></script><!-- 主题js -->
    <script src="winglite_exh.js"></script>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous"><meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"><meta http-equiv="Content-Type" content="text/html; charset=utf-8" /></head>
</head>
<body>
<div id="winglite"></div>
<script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script><script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script><script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
</body>
</html>
```
这里举例的是exh版本，html目录下需要放置刚刚下载的winglite_exh.js和下载的主题js文件
body中间插入一个div，div id需要设置为winglite
（注：先导入主题再导入winglite）

4.在你下载的主题js文件里第一行编辑json存放地址
（注：默认json文件在当前目录下）

像这样：
```js
var jsonurl = './config.json';//json解析的url地址
```
修改jsonurl变量赋值的内容即可

## demo
[blog_exhibition](http://test.zhetengtiao.club:2233/demo/lingkong-wing-lite/blog_exhibition/)

[blog_succinct](http://test.zhetengtiao.club:2233/demo/lingkong-wing-lite/blog_succinct/)

## 开发者计划
1. Fork 本仓库
2. 新建 Feat_xxx 分支
3. 提交代码
4. 新建 Pull Request