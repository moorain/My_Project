## CSS中的居中布局 ##

### 水平居中： ###

**html代码:**

    <div class="parent">
        <div class="child"></div>
    </div>

**1.transform(css3)**
	
	.parent {
	    position: relative;
	}
	.child {
	    position: absolute;
	    left: 50%:
	    transform: translateX(-50%);
	}

利用transform的方式向左偏移自身的50%;同理可用以下方法:

**2.利用绝对定位+margin偏移:**

    .parent{
        width: 600px;
        height: 200px;
        position: relative;
    }
    .child{
        position: absolute;
        width: 100px;
        left: 50%;
        height: 10px;
        margin-left: -50px;
    }



**3.flex 布局**

	.parent {
	    display: flex;
	    justify-content: center;
	}

子元素浮动,绝对定位,行内元素


**行内元素居中(display: inline)**

常见的内联元素有：span, a, img, input, label 等等

	.parent {
	    text-align: center;
	}



**块级元素居中(display: block)**

常见的块元素：div, h1~h6, table, p, ul, li 等等

方式一：设置 margin

	.parent {
	    width: 100%;
	}
	.child {
	    width: 600px;
	    height: 50px;
	    margin: 0 auto;
	    background: #999;
	}

方式二：修改居中元素为 inline-block 属性

	.parent {
	    text-align: center;
	}
	.child {
	    display: inline-block;
	}


### 垂直居中元素： ###

**方式一：CSS3 transform**

	.parent {
	    position: relative;
	}
	.child {
	    position: absolute;
	    top: 50%;
	    transform: translateY(-50%);
	}

**方式二：flex 布局**
	
	.parent {
	    display: flex;
	    align-items: center;
	}

子元素为浮动，绝对定位，内联元素
	
文字垂直居中:

	.text {
	    line-height: 200px;
	    height: 200px;
	}


块级元素:
方式一:垂直方向上的偏移

	.parent {
	    position: relative;
	}
	.child{
	    position: absolute;
	    top: 50%;
	    height: 100px;
	    margin-top: -50px;
	}


方式二：

	.parent {
	    position: relative;
	}
	.child{
	    position: absolute;
	    top: 0;
	    bottom: 0;
	    height: 100px;
	    margin: auto 0;
	}



**一些垂直居中元素：**
	
	
	div {
	    width: 100px;
	    height: 100px;
	    margin: auto;
	    position: fixed;
	    //absolute is ok
	    top: 0;
	    right: 0;
	    bottom: 0;
	    left: 0;
	}

优点：

1. 不仅可以实现在正中间，还可以在正左方，正右方  
2. 元素的宽高支持百分比 % 属性值和 min-/max- 属性  
3. 可以封装为一个公共类，可做弹出层  
4. 浏览器支持性好
	
		.child {
		    width: 100px;
		    height: 100px;
		    position: absolute;
		    top: 50%;
		    left: 50%;
		    margin-left: -50px;
		    margin-top: -50px;
		}

特点：

1. 良好的跨浏览器特性,兼容 IE6 - IE7  
2. 灵活性差，不能自适应，宽高不支持百分比尺寸和 min-/max- 属性


		.child {
		    width: 100px;
		    height: 100px;
		    position: absolute;
		    top: 50%;
		    left: 50%;
		    transform: translate(-50%, -50%);  
		}

特点：

1. 内容可自适应，可以封装为一个公共类，可做弹出层  
2. 可能干扰其他 transform 效果

	
		.parent {
		    display: flex;
		    justify-content: center;
		    align-items: center;
		}

这是 CSS 布局未来的趋势。Flexbox 是 CSS3 新增属性，设计初衷是为了解决像垂直居中这样的常见布局问题。


参考:https://zhuanlan.zhihu.com/p/25068655