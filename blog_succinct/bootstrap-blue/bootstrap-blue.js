/**
 * bootstrap-blue 
 * lingkong-wing-lite博客主题
 * Powered by Zhetengtiao
 */
var jsonurl = './config/config.json';//json解析的url地址

function make_body_begin(author,headURL,introduce)
{
    //方法说明：make_body_begin方法，制作html的body开始语句
    //参数说明：author作者，headURL头像地址，introduce个人介绍（全部必填）
    //返回值说明：返回生成好的body开始语句
    return '<nav class="navbar navbar-inverse" role="navigation"><div class="container-fluid"><div class="navbar-header"><a class="navbar-brand" href="#">'+author+'的博客</a></div><div class="container"><ul class="nav"><li class="nav-item"><a class="nav-link" href="index.html?str=index">主页</a></li><li class="nav-item"><a class="nav-link" href="index.html?str=blogindex">博客</a></li></ul></div></nav><hr><div class="jumbotron"><h1>你好~我是'+author+'</h1><p>'+ introduce +'</p></div>';
}

function make_blogbody_begin(author,headURL,introduce)
{
    //方法说明：make_blogbody_begin方法，制作html的body开始语句
    //参数说明：author作者，headURL头像地址，introduce个人介绍（全部必填）
    //返回值说明：返回生成好的body开始语句
    return '<nav class="navbar navbar-inverse" role="navigation"><div class="container-fluid"><div class="navbar-header"><a class="navbar-brand" href="#">'+author+'的博客</a></div><div class="container"><ul class="nav"><li class="nav-item"><a class="nav-link" href="index.html?str=index">主页</a></li><li class="nav-item"><a class="nav-link" href="index.html?str=blogindex">博客</a></li></ul></div></nav>'+'<div style="background-color: rgb(17, 31, 228); "><hr><div class="container"><div class="row"><div class="col-md-8"><h1 style="color:rgb(255,255,255); ">Blogs</h1><br></div></div></div></div><br>';
}

function create_article(title,content,time,id)
{
    //方法说明：create_article方法，顾名思义创建一个文章显示区域
    //参数说明：title标题，content内容，label标签，time时间，id文章唯一标识符（数字，字符串均可，保证唯一性）
    //提示：title，contect，time，id参数必填，label选填（不填了话默认是“所有”标签）
    //返回值说明：返回html语句，表示生成后的文章区域html
    //提示：这个东西是循环使用的，即“有多少文章这个就调用多少次”
    return '<div class="container"><div class="row"><div class="col-md-8"><h2 id="'+id+'"><a href="?blogid='+id+'" style="text-decoration: none;color:#000;">'+title+' </a><small>'+time+'</small></h2><br>'+content+'</div></div></div><hr>';
}

function make_links_begin(title)
{
    //方法说明：make_links_begin方法，制作友情链接开始语句
    //参数说明：title标题（全部必填）
    //返回值说明：返回html语句
    return '<br><br><hr><nav class="d-none d-md-block bg-light"><ul class="container-fluid p-3 p-md-5"><p class="lead">'+ title +'</p>';
}

function make_links_end(URL,name)
{
    //方法说明：make_links_end方法，制作友情链接结束语句
    //参数说明：URL链接，name显示标题（全部必填）
    //返回值说明：返回生成好的友情链接结束语句
    //提示：这个东西是循环使用的，即“有多少链接这个就调用多少次”
    return '<li class="nav-item"><a class="nav-link" href="'+ URL +'"><span data-feather="home"></span>'+ name +'</a></li>';
}

function make_body_end(author)
{
    //方法说明：make_body_end方法，制作html的body结束语句
    //参数说明：author作者（全部必填）
    //返回值说明：返回生成好的body结束语句
    return '</div></div></nav></div><footer class="bd-footer text-muted"><div class="container-fluid p-3 p-md-5"><p>© 2020 '+ author +' | Make by wing lite<div class="d-flex align-items-center"><a href="#top" target="_self">返回顶部</a></div></p></footer><!--head、small--></div></div></div><!--head、small--></body></html>'
}
