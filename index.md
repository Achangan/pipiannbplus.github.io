<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>皮皮安的个人网站</title>
    <link rel="stylesheet" href="网页报告/index.css">
    <script src="https://cdn.jsdelivr.net/gh/TaylorLottner/Fork/sakura.js"></script>
</head>
<body>
<nav class="nav">
        <a href="index.html">首页</a>
        <a href="网页报告/个人简历.html" target="_blank">个人简历</a>
        <a href="网页报告/相册.html" target="_blank">相册</a>
        <a href="https://blog.csdn.net/qq_46178251" target="_blank">笔记分享</a>
</nav>
<div class="slideshow">
    <img src="网页报告/QQ图片20200531124244.png"  class="slide0">
    <img src="网页报告/QQ图片20200531124307.png" style="display: none" class="slide0">
    <img src="网页报告/QQ图片20200531124313.png" style="display: none" class="slide0">
    <script>
        var index = 1;
        auto();
        function auto() {
            var slides = document.getElementsByClassName('slide0')
            for (var i = 0; i < slides.length; i++) {
                slides[i].style.display = 'none';
            }
            index++;
            if(index > slides.length){
                index = 1;
            }
            slides[index - 1].style.display="";
            setTimeout(auto,3000);
        }
    </script>
</div>

<main class="main">
    <div class="our">
        <h2>Hall Of Fame</h2>
        <div class="intro">
            <h3>我们的团队</h3>
            <p>励志参加各种比赛，首次参加微信小程序设计大赛，准备参加大创，蓝桥杯等大型比赛</p>
        </div>


        <div class="member">
            <h3>团队成员</h3>
            <ol>
                <li>队长:常安</li>
                <li>队员:陈*</li>
                <li>队员:杨**</li>
            </ol>
        </div>

        <div class="good">
            <h3>擅长领域</h3>
            <p>
                主要涉及嵌入式开发，软件制作，渗透攻防，以及web前端制作
            </p>
        </div>

    </div>

    <div class="card">
        <h2>成员卡片</h2>
        <div class="card-s">
        <div class="chang">
            <a href="网页报告/wanghuahua.html"><img src="3c03faef16bd3f4443124eb0e06cbbbc.png"></a>
            <h3>常安</h3>
            <p>所在院校：西安培华学院</p>
            <p>软件工程1901</p>
            <p>喜欢编程，看书，听音乐，梦想是称为能够独当一面的软件/游戏开发者</p>
        </div>

        <div class="chang">
           <a href="网页报告/cheng.html"> <img src="QQ图片20200531215522.jpg"></a>
            <h3>陈*</h3>
            <p>所在院校：西安培华学院</p>
            <p>****1901</p>
            <p>喜欢吃，擅长adoub公司的一些软件，例如ps，pr</p>
        </div>

        <div class="chang">
           <a href="网页报告/yang.html"><img src="af2c4b85892c03a2d7f0780cc8175ff9.png"></a>
            <h3>杨**</h3>
            <p>所在院校：西安培华学院</p>
            <p>****1901</p>
            <p>一个上进行极强的女孩，能够专注认真的做好每一件事，同届中我皮皮安少有佩服的人之一</p>
        </div>
        </div>
    </div>

    <div class="relation">
        <h2>联系我们</h2>
        <form>
            <p>姓名:</p>
            <input type="text" name="name" size="36">
            <p>邮箱:</p>
            <input type="email" name="email" size="36">
            <p>电话:</p>
            <input type="text" name="phono" size="36">
            <input type="button" value="提交" class="button">
        </form>
    </div>


</main>

<div class="footer">
    <ul>
        <li><a><img src="网页报告/weibo.png"></a></li>
        <li><a><img src="网页报告/weixin.png"></a></li>
        <li><a><img src="网页报告/github.png"></a></li>
        <li><a><img src="网页报告/qq.png"></a></li>
        <li><a class="a2" href="https://github.com/Achangan">github.com/Achangan</a></li>
    </ul>

</div>

</body>
</html>