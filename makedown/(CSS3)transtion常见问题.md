transitionend事件,是在过渡动画结束时触发的,本文总结了在开发中使用transitionend事件经常遇到的几个问题:

###1. transition 属性 ###
transition 属性是一个简写属性，用于设置四个过渡属性：

1. **transition-property**  规定设置过渡效果的 CSS 属性的名称。使用all可匹配全部发生变化的样式

2. **transition-duration** 规定完成过渡效果需要多少秒或毫秒。
  
3. **transition-timing-function** 规定速度效果的速度曲线,常用常量值: ease, ease-in, ease-out, ease-in-out, linear

4. **transition-delay**	 定义过渡效果何时开始。 单位:m ms;


transtion语法:

	transition: property duration timing-function delay;

实例和兼容性处理:

	
	div{
		width:100px;
		transition: width 2s;
		-moz-transition: width 2s; /* Firefox 4 */
		-webkit-transition: width 2s; /* Safari 和 Chrome */
		-o-transition: width 2s; /* Opera */
	}


### 2.transitionend事件 ###
 transition提供新的事件:

**transitionend**,在过渡动画结束时触发





### 3.transitionend事件的几个问题###

**1.设置transition-duration为0,存在兼容性问题,transitionend可能不被触发**


由于浏览器的兼容问题,在绑定transitionend事件之后,如果transition-duration为0,也就是过渡动画市场为0时,transitionend事件可能不会被触发..

解决办法:可以**给transition-duration设置一个极短的时间(如1ms)以保证事件的正常触发.**


**2.transitionend存在浏览器兼容性问题**

事件绑定时,兼容写法:
**transitionend, webkitTransitionEnd, mozTransitionEnd**


**3.display阻止transition动画效果**

display由none到显示,会阻止transition动画效果,若果要实现过度动画,则不能使用display.

**4.多次触发transitionend事件的问题**

transitionend触发次数基于所改变的样式数目,可以通过removeEventListener,禁用后续触发,以保证过度结束事件只执行1次;

实例:

	box.addEventListener("transitionend", fn)
			
	function fn(){
		box.removeEventListener("transitionend", fn);
		console.log(123);
	}






