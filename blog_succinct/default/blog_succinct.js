var jsonurl = './config.json';//json解析的url地址

function make_body_begin(author,headURL,introduce)
{
    //方法说明：make_body_begin方法，制作html的body开始语句
    //参数说明：author作者，headURL头像地址，introduce个人介绍（全部必填）
    //返回值说明：返回生成好的body开始语句
    return '<div class=\"container-fluid\"><nav class="navbar navbar-expand-lg navbar-light bg-light"><a class="navbar-brand" href="#">'+author+'的博客</a><button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button><div class="collapse navbar-collapse" id="navbarSupportedContent"><ul class="navbar-nav mr-auto"><li class="nav-item"><a class="nav-link" href="index.html?str=index">首页</a></li><li class="nav-item"><a class="nav-link" href="index.html?str=blogindex">文章</a></li><li class="nav-item active"></span></li></ul></div></nav><div class=\"row\"><nav class=\"col-md-2 d-none d-md-block bg-light sidebar\"><div class=\"sidebar-sticky\"></div></nav></div><div class=\"container-fluid\"><div class=\"row\"><nav class=\"col-md-2 d-none d-md-block bg-light sidebar\"><div class=\"sidebar-sticky\"></div></nav></div><div class=\"container-fluid\"><div class=\"row\"><nav class=\"col-md-2 d-none d-md-block bg-light sidebar\"><div class=\"sidebar-sticky\"></div></nav></div><!--head、small--><br><div class=\"alert alert-primary\" role=\"alert\"><h4 class=\"alert-heading\">'+ author +'的博客</h4><hr><p>欢迎来到'+ author +'的博客</p><p>这里就是博客的首页了</p></div><br><div class="alert alert-info" role="alert"><h4 class="alert-heading"><img src="'+ headURL +'" alt="" width="70px" class="rounded-circle">'+ author +'</h4><hr><p>'+ introduce +'</p></div><div class="container-fluid"><div class="row"><main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-4">';
}

function make_blogbody_begin(author,headURL,introduce)
{
    //方法说明：make_blogbody_begin方法，制作html的body开始语句
    //参数说明：author作者，headURL头像地址，introduce个人介绍（全部必填）
    //返回值说明：返回生成好的body开始语句
    return '<div class=\"container-fluid\"><nav class="navbar navbar-expand-lg navbar-light bg-light"><a class="navbar-brand" href="#">'+author+'的博客</a><button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button><div class="collapse navbar-collapse" id="navbarSupportedContent"><ul class="navbar-nav mr-auto"><li class="nav-item"><a class="nav-link" href="index.html?str=index">首页</a></li><li class="nav-item"><a class="nav-link" href="index.html?str=blogindex">文章</a></li><li class="nav-item active"></span></li></ul></div></nav><div class=\"row\"><nav class=\"col-md-2 d-none d-md-block bg-light sidebar\"><div class=\"sidebar-sticky\"></div></nav></div><div class=\"container-fluid\"><div class=\"row\"><nav class=\"col-md-2 d-none d-md-block bg-light sidebar\"><div class=\"sidebar-sticky\"></div></nav></div><div class=\"container-fluid\"><div class=\"row\"><nav class=\"col-md-2 d-none d-md-block bg-light sidebar\"><div class=\"sidebar-sticky\"></div></nav></div><!--head、small--><br><div class=\"alert alert-primary\" role=\"alert\"><h4 class=\"alert-heading\">'+ author +'的博客</h4><hr><p>欢迎来到'+ author +'的博客</p><p>这里就是博客的首页了</p></div><br><div class="container-fluid"><div class="row"><main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-4">';
}

function create_article(title,content,time,id)
{
    //方法说明：create_article方法，顾名思义创建一个文章显示区域
    //参数说明：title标题，content内容，label标签，time时间，id文章唯一标识符（数字，字符串均可，保证唯一性）
    //提示：title，contect，time，id参数必填，label选填（不填了话默认是“所有”标签）
    //返回值说明：返回html语句，表示生成后的文章区域html
    //提示：这个东西是循环使用的，即“有多少文章这个就调用多少次”
    return '<div data-spy="scroll" data-target="#navbar-example3" data-offset="0"><h1 id="'+ id +'">'+ title +'</h1><h6 class="card-subtitle mb-2 text-muted">'+ time +'</h6><p>'+ content +'</p></div><br><br>';
}

function make_links_begin(title)
{
    //方法说明：make_links_begin方法，制作友情链接开始语句
    //参数说明：title标题（全部必填）
    //返回值说明：返回html语句
    return '</main><nav class="col-md-2 d-none d-md-block bg-light sidebar"><div class="sidebar-sticky"><hr><br><ul class="nav flex-column"><p class="lead">'+ title +'</p>';
}

function make_links_end(URL,name)
{
    //方法说明：make_links_end方法，制作友情链接结束语句
    //参数说明：URL链接，name显示标题（全部必填）
    //返回值说明：返回生成好的友情链接结束语句
    //提示：这个东西是循环使用的，即“有多少链接这个就调用多少次”
    return '<li class="nav-item"><a class="nav-link" href="'+ URL +'"><span data-feather="home"></span>'+ name +'</a></li>';
}

function make_jump_links_begin()
{
    //方法说明：make_jump_links_begin方法，制作文章链接开始语句
    //返回值说明：返回html语句
    return '<br><hr><br><ul class="nav flex-column"><p class="lead">文章跳转</p><li class="nav-item">';
}

function make_jump_links_end(id,title)
{
    //方法说明：make_jump_links_end方法，制作文章链接结束语句
    //参数说明：id文章唯一标识符，name显示标题（全部必填）
    //返回值说明：返回生成好的文章链接结束语句
    //提示：这个东西是循环使用的，即“有多少链接这个就调用多少次”
    return '<a class="nav-link" href="#'+ id +'"><span data-feather="home"></span>'+ title +'</a></li>'
}

function make_body_end(author)
{
    //方法说明：make_body_end方法，制作html的body结束语句
    //参数说明：author作者（全部必填）
    //返回值说明：返回生成好的body结束语句
    return '</ul></div></nav></div></div><br><hr><footer class="bd-footer text-muted"><div class="container-fluid p-3 p-md-5"><p>© 2020 '+ author +' | Make by wing lite<div class="d-flex align-items-center"><a href="#top" target="_self">返回顶部</a></div></p></div></footer><!--head、small--></div></div></div><!--head、small-->'
}
