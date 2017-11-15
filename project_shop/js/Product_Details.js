			$(document).ready(function(){
//				$(".jqzoom").imagezoom();
				$("#thumblist li a").click(function(){
					//增加点击的li的class:tb-selected，去掉其他的tb-selecte
					$(this).parents("li").addClass("tb-selected").siblings().removeClass("tb-selected");
					//赋值属性
					$(".jqzoom").attr('src',$(this).find("img").attr("mid"));
					$(".jqzoom").attr('rel',$(this).find("img").attr("big"));
				});
			});
			
//种类选择

$(".kind p span").mouseup(function(){
	$(this).addClass("current").siblings().removeClass("current");
})
//购物车购买数量
//增加
$(".buy_num input[name='add']").click(function(){
	var num = $(".buy_num input[name='buynum']").val()
	num= parseInt(num)+1;
	$(".buy_num input[name='buynum']").val(num)
})
//减少
$(".buy_num input[name='reduce']").click(function(){
	var num = $(".buy_num input[name='buynum']").val()
	if(num>1){
		num= parseInt(num)-1;
		$(".buy_num input[name='buynum']").val(num)
	}
})


//商品介绍
$(".assess_title span").click(function(){
	$(this).addClass("current").siblings().removeClass("current");
	var index = $(".assess_title span").index(this);
	$(".assess .ass_content").hide().eq(index-1).show()
})

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


//搜索框获取焦点和失去焦点效果
$("#searchbox input.txt").focus(function(){
	//文本框获取焦点的时候要做的事情：
	var v=$(this).val();
	var tip=$(this).attr("data-text");
	if(v==tip)
	{
		$(this).val(" ");
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
