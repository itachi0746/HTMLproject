function openwindow(url,name,iWidth,iHeight){
    iWidth = window.screen.width / 2;
    iHeight = (window.screen.height-30)/2;
    var iTop = (window.screen.height-30-iHeight)/2; //获得窗口的垂直位置;
    var iLeft = (window.screen.width-10-iWidth)/2; //获得窗口的水平位置;
    window.open(url,name,'height='+iHeight+',,innerHeight='+iHeight+',width='+iWidth+',innerWidth='+iWidth+',top='+iTop+',left='+iLeft+',toolbar=no,menubar=no,scrollbars=auto,resizeable=no,location=no,status=no');
}
// QQ空间分享
$('.share_qzone').on('click',function () {

    console.log($('.logo').find('img').attr('src'));
    var p = {
        url:location.href,
        showcount:'0',/*是否显示分享总数,显示：'1'，不显示：'0' */
        desc:$('meta[name=description]').attr('content'),
        summary:$('meta[name=description]').attr('content'),/*分享摘要(可选)*/
        title:$('title').text(),
        site:'',/*分享来源 如：腾讯网(可选)*/
        pics:location.host+$('.logo').find('img').attr('src'), /*分享图片的路径(可选)*/
        style:'201',
        width:39,
        height:39
    };
    var s = [];
    for(var i in p){
        s.push(i + '=' + encodeURIComponent(p[i]||''));
    }
    var url = "http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?"+s.join('&');
    openwindow(url,'','','');

    //var a = $('<a id="zone_link_a" target="_blank" href="http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?'+s.join('&')+'"><span id="zone_link"></span></a>>');
    //a.appendTo($('body'));
    //$('#zone_link').click(); // 点击a标签子级元素 防止页面不跳转
    //$('#zone_link_a').remove()
})
// 新浪微博分享
$('.share_sina').on('click',function () {
    console.log($('.logo').find('img').attr('src'))
    var p = {
        url:location.href,
        appKey:'0',
        title:$('title').text(),
        site:'',/*分享来源 如：腾讯网(可选)*/
        pic:location.host+$('.logo').find('img').attr('src'), /*分享图片的路径(可选)*/
    };
    var s = [];
    for(var i in p){
        s.push(i + '=' + encodeURIComponent(p[i]||''));
    }
    var url = "http://service.weibo.com/share/share.php?"+s.join('&');
    openwindow(url,'','','');
    //var a = $('<a id="sina_link_a" target="_blank" href="http://service.weibo.com/share/share.php?'+s.join('&')+'"><span id="sina_link"></span></a>>');
    //a.appendTo($('body'));
    //$('#sina_link').click(); // 点击a标签子级元素 防止页面不跳转
    //$('#sina_link_a').remove()
})

// 微信二维码分享
$('.share_wx').on('click',function(){
    if($('#qrcode').length){
        $('#qrcode').remove();
        return false;
    }
    var $this = $(this);
    $this.css('position','relative');
    var div = $('<div id="qrcode">');
    div.css({
        width:'6rem',
        height:'6rem',
        position:'absolute',
        top: '-6rem',
        left: '-2rem'
        //left: '-11rem',
        //background:url("{dede:global.cfg_templets_skin/}/images/qrcode.png")
    })
        .append($('<img src="'+location.protocol+'/templets/default/images/qrcode.png" style="width: 100%">'))
        .appendTo($this)
    //location.href = '/qrcode.html'
})

//官网的通用统计代码
var _hmt = _hmt || [];
(function()
    { var hm = document.createElement("script"); hm.src = "https://hm.baidu.com/hm.js?85cd4ed2f7fe10c6217c36a152fa6500"; var s = document.getElementsByTagName("script")[0]; s.parentNode.insertBefore(hm, s); }
)();