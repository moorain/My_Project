;(function($){
	function _sidedoor(options){
		var _defaults = {//设置默认参数
			sideW : 800,//总宽度
			sideH : 500,//总高度
			navH : 50,//菜单栏高度
			navW : 100,//单个菜单宽度
			licolor : "black",//菜单字体颜色
			libgcolor : "",//菜单背景
		}
		var config=$.extend({},_defaults,options); //从左向右合并对象，将最终的结果返回
		this.each(function(index, itemitem) {
			item = $(itemitem);
			item.css({"width":config.sideW,"height":config.sideH})
			item.find("ul li").css({
				"height":(config.navH-3),
				"line-height":config.navH+'px',
				"width":config.navW,
				"color":config.licolor,
				"background":config.libgcolor
			});
			item.find("ul").css({"height":(config.navH-1),"width":(config.sideW)})
			item.find(".content").css({"height":(config.sideH - config.navH -2)})
			//效果
			item.find("ul li").mousemove(function(){	
				var _that = $(this);
				$(this).addClass("current").siblings().removeClass("current")
				//var index = item.find("ul li").index(this);
				var index = _that.index();
				_that.parent().parent().find(".content").hide().eq(index).show();
			})
		})
	}		
	$.fn.sidedoor = _sidedoor;
})(jQuery);