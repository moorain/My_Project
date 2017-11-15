//banner
$("#ppt01").tyslide({
			boxh:430,//盒子的高度
			w:1000,//盒子的宽度
			h:400,//图片的高度
			isShow:true,//是否显示控制器
			isShowBtn:true,//是否显示左右按钮
			controltop:0,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
			controlsW:25,//控制按钮宽度
			controlsH:25,//控制按钮高度
			radius:100,//控制按钮圆角度数
			controlsColor:"#d8d8d8",//普通控制按钮的颜色
			controlsCurrentColor:"#FF6600"//当前控制按钮的颜色
});
//独家提供
$(".alone_ppt").tyslide({
			boxh:500,//盒子的高度
			w:1200,//图片的宽度
			h:470,//图片的高度
			isShow:true,//是否显示控制器
			isShowBtn:true,//是否显示左右按钮
			controltop:0,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
			controlsW:12,//控制按钮宽度
			controlsH:12,//控制按钮高度
			radius:100,//控制按钮圆角度数
			controlsColor:"#d8d8d8",//普通控制按钮的颜色
			controlsCurrentColor:"#FF6600"//当前控制按钮的颜色
});
//独家提供叶签
$("#tap>ul li").mouseenter(function(){
	$(this).addClass("current3").siblings().removeClass("current3");
	var index = $("#tap>ul li").index(this);
	$(".alone_ppt").eq(index).show().siblings().hide();
});
	
	$(".alone_ppt_pic").css({"width":170+'px',"height":220+'px'})
	
//热卖畅销：
$("#rank li").mouseenter(function(){
	$(this).addClass("current").siblings().removeClass("current");
});
$("#rank").mouseleave(function(){
	$("#rank li").eq(0).addClass("current").siblings().removeClass("current");
});
////热卖畅销-前三个显示红色：
$(function(){
	$("#rank").find(".bookbox:lt(3)").find("span").css({"background":"#ff6600"});
});
//主编推荐
//右侧排行鼠标特效开始：
//鼠标移入：
$("#ebook_right ul li").mouseenter(function(){
		$("#ebook_right ul li .cssa").show();
		$("#ebook_right ul li .cssb").hide();
		$(this).find(".cssb").show();
		$(this).find(".cssa").hide();
})
//鼠标移出：
$("#ebook_right ul").mouseleave(function(){
		$("#ebook_right ul li .cssa").show();
		$("#ebook_right ul li .cssb").hide();
		$("#ebook_right ul li .cssb")[0].style.display="block";
		$("#ebook_right ul li .cssa")[0].style.display="none";
})
//推荐-前三个序号显示红色
$(function(){
	$("#ebook_right").find(".cssa:lt(3)").find("span").css({"color":"red"});
	$("#ebook_right").find(".cssb:lt(3)").find("span").css({"color":"red"});
});






//返回顶部控件
function pageScroll(){ 
//把内容滚动指定的像素数（第一个参数是向右滚动的像素数，第二个参数是向下滚动的像素数） 
window.scrollBy(0,-100); 
//延时递归调用，模拟滚动向上效果 
scrolldelay = setTimeout('pageScroll()',10); 
//获取scrollTop值，声明了DTD的标准网页取document.documentElement.scrollTop，否则取document.body.scrollTop；因为二者只有一个会生效，另一个就恒为0，所以取和值可以得到网页的真正的scrollTop值 
var sTop=document.documentElement.scrollTop+document.body.scrollTop; 
//判断当页面到达顶部，取消延时代码（否则页面滚动到顶部会无法再向下正常浏览页面） 
if(sTop==0) clearTimeout(scrolldelay); 
} 
$("#footer .gototop").mouseup(function(){
	pageScroll();
})