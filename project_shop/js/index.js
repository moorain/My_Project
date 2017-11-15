//导航菜单开始
$("#subnav li").hover(function(){
	$(this).addClass("current");
},function(){
	$(this).removeClass("current");
});
//导航菜单结束
//轮播控件开始
//首页banner轮播
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
	
//电子书-轮播:
	$(".ebookppt").tyslide({
		boxh:216,//盒子的高度
		w:332,//盒子的宽度
		h:216,//图片的高度
		isShow:true,//是否显示控制器
		isShowBtn:true,//是否显示左右按钮
		controltop:5,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
		controlsW:14,//控制按钮宽度
		controlsH:2,//控制按钮高度
		radius:100,//控制按钮圆角度数
		controlsColor:"#d8d8d8",//普通控制按钮的颜色
		controlsCurrentColor:"#7f7f7f"//当前控制按钮的颜色
	});
//服装,户外运动，童装-轮播
		$(".outdoor").tyslide({
		boxh:338,//盒子的高度
		w:425,//盒子的宽度
		h:338,//图片的高度
		isShow:true,//是否显示控制器
		isShowBtn:true,//是否显示左右按钮
		controltop:5,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
		controlsW:14,//控制按钮宽度
		controlsH:2,//控制按钮高度
		radius:100,//控制按钮圆角度数
		controlsColor:"#d8d8d8",//普通控制按钮的颜色
		controlsCurrentColor:"#7f7f7f"//当前控制按钮的颜色
	});
//轮播控件结束	
//图书，电子书开始
//叶签：
$("#ebook_menu li").mouseenter(function(){
	$(this).addClass("current").siblings().removeClass("current");
	var index = $("#ebook_menu li").index(this);
	$("#ebook_left div.ebook_con").hide().eq(index).show();
})
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
//前三个序号显示红色
$(function(){
	$("#ebook_right").find(".cssa:lt(3)").find("span").css({"color":"red"});
	$("#ebook_right").find(".cssb:lt(3)").find("span").css({"color":"red"});
});
//图书，电子书右侧排行鼠标特效结束
//服装，童装，户外运动区叶签效果开始
$(".product .titlewrapper li").mouseenter(function(){
	$(this).parent().find("li").removeClass("current");
	$(this).addClass("current");
	var index = $(this).parent().find("li").index(this);
	$(this).parent().parent().parent().find(".procontent").hide().eq(index).show();
})
//服装，童装，户外运动区叶签效果结束
//广告区叶签
$("#spread .spread_title ul li").mouseenter(function(){
	$(this).addClass("current").siblings().removeClass("current");
	var index = $("#spread .spread_title ul li").index(this);
	$("#spread .spread_con").hide().eq(index).show();
})

//搜索框获取焦点和失去焦点效果
$("#searchbox input.txt").focus(function(){
	//文本框获取焦点的时候要做的事情：
	var v=$(this).val();
	var tip=$(this).attr("data-text");
	if(v==tip)
	{
		$(this).val("");
		$(this).css({"color":"#000"});
	}
	
});

$("#searchbox input.txt").blur(function(){
	//文本框失去焦点的时候要做的事情：
	var v=$(this).val();
	var tip=$(this).attr("data-text");
	if(!v.length>0)
	{
		$(this).val(tip);
		$(this).css({"color":"#bfbfbf"});
	}
});

//右侧领卷中心特效
$("#coupon_center .center").hover(function(){
	$("#coupon_center .qr_code").show().animate({"width":100},300);
},function(){
	$("#coupon_center .qr_code").hide().css({"width":0});
	
})
//右侧领卷中心特效结束

$(window).scroll(function(){
	checkgototop();
	fixtopsearch();
	changefloorcolor();
});

$(function(){
	checkgototop();
	fixtopsearch();
	changefloorcolor();
});

//这个函数的功能：把搜索框固定在顶部
function fixtopsearch(){
	var dx=$("body").scrollTop();//获取整个页面向上滚动的距离。
	if(dx>200){
		$("#fixedwrapper").addClass("on");
	}
	else{
		$("#fixedwrapper").removeClass("on");
	}
}


//滚动到顶部效果
$("#gototop").click(function(){
	//让body 1秒钟滚动到顶部。 
	$("html,body").animate({
		scrollTop:0
	},800);
});

//功能：判断滚动高度，如果大于1000，就显示按钮，否则就隐藏按钮
function checkgototop(){
	var dx=$("body").scrollTop();//获取整个页面向上滚动的距离。
	if(dx>1000){
		$("#gototop").fadeIn();
	}
	else{
		$("#gototop").fadeOut();
	}
}


//滚动到各楼层

$("#floors>li").hover(function(){
	var tempcolor=$(this).attr("data-color");
	$(this).css({"background-color":tempcolor});
	$(this).stop(true,true).animate({"width":"80px"});
},function(){
	if($(this).hasClass("on")){
		$(this).stop(true,true).animate({"width":"40px"});
	}else{
		$(this).css({"background-color":"#f2f2f2"});
		$(this).stop(true,true).animate({"width":"40px"},100);
	}
});

$("#floors>li").click(function(){
	//求助当前li对应模块的相对于顶部的偏移（高度）
	var moduid=$(this).attr("data-id");
	var dx=$("#"+moduid).offset().top;
	$("body").animate({
		scrollTop:dx-90
	},800);
	
});

//功能：鼠标滚动的时候，根据滚动高度判断在哪个楼层，就让对应楼层的li改变背景颜色，但是宽度不改变。
function changefloorcolor(){
	//获取5各模块相对于页面顶部的竖直方向上的偏移。
	var ebookoffset=parseInt($("#ebook").offset().top);//电子书坐标
	var clothesoffset=parseInt($("#clothes").offset().top);//服装坐标
	var sportsoffset=parseInt($("#sports").offset().top);//户外运动坐标
	var childclothesoffset=parseInt($("#childclothes").offset().top);//童装
	var houseoffset=parseInt($("#fitment").offset().top);//家居日用
	

	var scrolldx=$("body").scrollTop();//获取整个页面的滚动高度
	$("#floors>li").removeClass("on");//移除所有楼层的on样式	
	var floor=$("#floors>li").eq(0);	
	if(scrolldx<clothesoffset&&scrolldx>=ebookoffset)//滚动高度 大于图书电子书  小于服装
	{
		floor.css({"background-color":floor.attr("data-color")});//把第一层的颜色从自定义属性上面取出来，设置成为li的背景
		floor.siblings().css({"background-color":"#f2f2f2"});
		floor.addClass("on");
	}
	else{	
		floor.css({"background-color":"#f2f2f2"});
	}
	
	
	var floor2=$("#floors>li").eq(1);
	if(scrolldx<sportsoffset&&scrolldx>=clothesoffset){
			floor2.css({"background-color":floor2.attr("data-color")});
			floor2.siblings().css({"background-color":"#f2f2f2"});
			floor2.addClass("on");
	}
	else{
		floor2.css({"background-color":"#f2f2f2"});
	}
	
	var floor3=$("#floors>li").eq(2);
	if(scrolldx<childclothesoffset&&scrolldx>=sportsoffset){
			floor3.css({"background-color":floor3.attr("data-color")});
			floor3.siblings().css({"background-color":"#f2f2f2"});
			floor3.addClass("on");
	}else{
		floor3.css({"background-color":"#f2f2f2"});
	}	
	
	var floor4=$("#floors>li").eq(3);
	if(scrolldx<houseoffset&&scrolldx>=childclothesoffset){
			floor4.css({"background-color":floor4.attr("data-color")});
			floor4.siblings().css({"background-color":"#f2f2f2"});
			floor4.addClass("on");
	}else{
		floor4.css({"background-color":"#f2f2f2"});
	}	
	
	var floor5=$("#floors>li").eq(4);
	if(scrolldx>=houseoffset){
			floor5.css({"background-color":floor5.attr("data-color")});
			floor5.siblings().css({"background-color":"#f2f2f2"});
			floor5.addClass("on");
	}else{
		floor5.css({"background-color":"#f2f2f2"});
	}	
}
//定位到版心
 $("#floors").css({"left":($(".innerbox").offset().left-45)});
 $("#gototop").css({"left":($(".innerbox").offset().left+1200)});
 