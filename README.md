# lingkong wing lite 

## 介绍
灵翼是一个由[灵空团队](https://gitee.com/lingkonggzs)
开发，基于JavaScript的在线内容生成系统

相比较于[lingkong-wing内核](https://gitee.com/lingkonggzs/lingkong-wing-kernel/tree/master)
，它更轻便，生成速度更快，不用繁琐的上传html文件，只需修改json文件即可。

## 亮点
* 更快
* 更强，支持markdown语法
* 代码更加简洁明了
* 无需更改、上传html文件，只需修改json文件
* 更轻 主体+html总共50kb都不到
* 对服务器要求更低，只需静态服务器即可
* 与[lingkong-wing内核](https://gitee.com/lingkonggzs/lingkong-wing-kernel/tree/master)
的config.json文件兼容


## 使用
1. 到本仓库发行版界面下载blog_suc.zip (注：suc即双页面版本。详见demo)
2. 解压
3. 修改json（见下文）
4. 将解压后的文件上传到服务器

或

1.到本仓库发行版界面下载winglite_suc.js
(注：suc即双页面版本。详见demo)

2.在本仓库内挑选主题
（注：如果您下载的是suc版本，则需要到文件夹succinct选择主题）

3.新建一个html文件，像这样：
```html
<html>
<head>
    <title>xxx的博客</title>
    <script src="https://cdn.bootcdn.net/ajax/libs/jquery/3.5.1/jquery.js"></script><!-- jquery 不加会导致生成错误 -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    <!-- bootstrap css 不加会导致生成错误 -->
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
</head>
<body>
<div id="winglite"></div><!-- winglite工作区域，没有这个div是无法工作的 -->
<link href="https://highlightjs.org/static/demo/styles/github.css" rel="stylesheet">
<!-- <code>标签高亮 highlight.js主题 -->
<script src="bootstrap-blue.js"></script><!-- 主题js -->
<script src="winglite_suc.js"></script><!-- 主js -->
<!-- jquery 不加会导致生成错误 -->
<script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
<!-- bootstrap js 不加会导致生成错误 -->
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
</body>
</html>
```
请根据自行情况修改主题js和winglite导入路径

4.在你下载的主题js文件里第一行编辑json存放地址

像这样：
```js
var jsonurl = './config.json';//json解析的url地址，这里填的是当前目录下的config.json文件，即"./config.json"
```

### 修改json
```json
{
  "user": "Zhetengtiao",
  "photo": "https://portrait.gitee.com/uploads/avatars/user/700/2100577_yingbinggan_1584796873.png!avatar30",
  "introduce": "菜鸡",
  "word":{
    "max": "2",
    "1":{
      "id": "1",
      "title": "hello",
      "date": "20201219",
      "from": "../demo/word/1.md"
    },
    "2":{
      "id": "2",
      "title": "why wing lite?",
      "date": "20201219",
      "from": "../demo/word/2.md"
    }
  },
  "right":{
    "name": "跳转链接（友情链接也行）",
    "max": "1",
    "1": {
      "id": "1",
      "name": "非凡小王的真正博客",
      "from": "https://www.ffxw0720.club"
    }
  }
}
```
1. user:用户称呼
2. photo:头像地址（本地与网络上的均可）
3. word-max:最大的文章值
4. word-1\2\3-id:文章id
5. word-1\2\3-title:文章标题
6. word-1\2\3-date:文章发表日期
7. word-1\2\3-from:文章链接
8. right-name:跳转区名字
9. right-max:最大的链接数量
10. right-1\2\3-id:链接id
11. right-1\2\3-id:链接名字
12. right-1\2\3-id:链接跳转地址（本地与网络上的均可）
#### 如何新建文章/友链：
1. 打开config.json
2. 复制"1"的那一大个地方,如：
```json
    "1":{
      "id": "1",
      "title": "hello",
      "date": "20201219",
      "from": "../demo/word/1.md"
    },
```
这一大个
3. 在上一个大括号（右）的的后面加一个英文`,`

4. 把1，改成上一个数字+1，1+1=2，就把1改成2

5. 改标题（title）、发布时间（date）、文章地址（content）

6. 最后拼接起来长这样：
```json
    "1":{
      "id": "1",
      "title": "hello",
      "date": "20201219",
      "from": "../demo/word/1.md"
    },
    "2":{
      "id": "2",
      "title": "why wing lite?",
      "date": "20201219",
      "from": "../demo/word/2.md"
    }
```

## demo
[blog_succinct](https://test.zhetengtiao.club:2233/demo/lingkong-wing-lite/demo/)

[bootstrap-blue](https://zhetengtiao.club)
## 开发者计划
1. Fork 本仓库
2. 新建 Feat_xxx 分支
3. 提交代码
4. 新建 Pull Request