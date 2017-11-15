$(function(){
	$.fn.magnifying = function(){
		var that = $(this),
		 $imgCon = that.find('.con-fangDaIMg'),//正常图片容器
		 	$Img = $imgCon.find('img'),//正常图片，还有放大图片集合
		   $Drag = that.find('.magnifyingBegin'),//拖动滑动容器
		   $show = that.find('.magnifyingShow'),//放大镜显示区域
		$showIMg = $show.find('img'),//放大镜图片
		$ImgList = that.find('.con-FangDa-ImgList > li >img'),
		multiple = $show.width()/$Drag.width();

		$imgCon.mousemove(function(e){
			$Drag.css('display','block');
			$show.css('display','block');
		    //获取坐标的两种方法
		   	// var iX = e.clientX - this.offsetLeft - $Drag.width()/2,
		   	// 	iY = e.clientY - this.offsetTop - $Drag.height()/2,	
		   	var iX = e.pageX - $(this).offset().left - $Drag.width()/2,
		   		iY = e.pageY - $(this).offset().top - $Drag.height()/2,	
		   		MaxX = $imgCon.width()-$Drag.width(),
		   		MaxY = $imgCon.height()-$Drag.height();
				
  	   	    /*这一部分可代替下面部分，判断最大最小值
		   	var DX = iX < MaxX ? iX > 0 ? iX : 0 : MaxX,
		   		DY = iY < MaxY ? iY > 0 ? iY : 0 : MaxY;
		   	$Drag.css({left:DX+'px',top:DY+'px'});	   		
		   	$showIMg.css({marginLeft:-3*DX+'px',marginTop:-3*DY+'px'});*/

		   	iX = iX > 0 ? iX : 0;
		   	iX = iX < MaxX ? iX : MaxX;
		   	iY = iY > 0 ? iY : 0;
		   	iY = iY < MaxY ? iY : MaxY;	
		   	$Drag.css({left:iX+'px',top:iY+'px'});	   		
		   	$showIMg.css({marginLeft:-multiple*iX+'px',marginTop:-multiple*iY+'px'});
		   	//return false;
		});
		$imgCon.mouseout(function(){
		   	$Drag.css('display','none');
			$show.css('display','none');
		});

		$ImgList.mousemove(function(){
			var NowSrc = $(this).data('bigimg');
			$Img.attr('src',NowSrc);
			$(this).parent().addClass('active current').siblings().removeClass('active current');
		});	
	}

	$("#fangdajing").magnifying();


});

//放大镜下方列表容器current边框


//下方滚动条
$(".leftbtn").mouseup(function(){

	var leftNum = $(".con-FangDa-ImgList").position().left;
	console.log(leftNum);
	if(leftNum<= -320){
		leftNum = leftNum +340;
		console.log(leftNum);
		$(".con-FangDa-ImgList").stop(true,true).animate({"left":leftNum+"px"},500)
	}
})
$(".rightbtn").mouseup(function(){

	var leftNum = $(".con-FangDa-ImgList").position().left;
	console.log(leftNum);
	if(-320<leftNum){
		leftNum = leftNum -340;
		console.log(leftNum);
		$(".con-FangDa-ImgList").stop(true,true).animate({"left":leftNum+"px"},500);
	}
})

//放大镜的点击显示
$(".con-fangDaIMg").click(function(){
	$("#large_img").show();
//放大镜的显示关闭按钮
})
$('#makeclose').click(function(){
	$("#large_img").hide();
})
//列表
$("#large_img .piclist li").mousemove(function(){
	$(this).addClass("current").siblings().removeClass("current");
	var index = $("#large_img .piclist li").index(this);
	$("#large_img .pic").eq(index).show().siblings().hide();
	return false;
})
//左右翻页
$("#large_img .mask_left").click(function(){
	 var index = $("#large_img .piclist .current").index();
	 if(index>0){
	 	index = parseInt(index)-1;
	 	$("#large_img .piclist li").eq(index).addClass("current").siblings().removeClass("current");
	 	$("#large_img .pic").eq(index).show().siblings().hide();
	 }else if(index == $("#large_img .piclist li").length-2||index == 0){
			var len = $("#large_img .piclist li").length-2;
	 		$("#large_img .piclist li").eq(len).addClass("current").siblings().removeClass("current");
	 		$("#large_img .pic").eq(len).show().siblings().hide();
	 	}
	 return false;
})
$("#large_img .mask_right").click(function(){
	 var index = $("#large_img .piclist .current").index();
	 if($("#large_img .piclist li").length-2>index>0){
	 	index = parseInt(index)+1;
	 	$("#large_img .piclist li").eq(index).addClass("current").siblings().removeClass("current");
	 	$("#large_img .pic").eq(index).show().siblings().hide();
	 }else if(index == $("#large_img .piclist li").length-2){
	 	$("#large_img .piclist li").eq(0).addClass("current").siblings().removeClass("current");
	 	$("#large_img .pic").eq(0).show().siblings().hide();
	 }
	 return false;
})