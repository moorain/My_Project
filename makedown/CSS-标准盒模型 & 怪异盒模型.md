CSS3盒模型

## 1. CSS盒模型回顾 ##

在CSS中主要有以下几种盒模型：inline、inline-block、block、table、absolute position和float.

浏览器把每个元素看做一个盒模型，每一个盒模型是由以下几个属性组合所决定的：display、position、float、width、height、margin、padding和border等，不同类型的盒模型会产生不同的布局。

## 2. 盒子模型模式 ##

盒模型一共有两种模式，一种是**标准模式**，另一种就是**怪异模式**。


#### 标准盒子模型 ####

标准模式的盒子模型：padding和border不被包含在定义的width和height之内。对象的实际宽度等于设置的width值和border、padding之和，即 

( Element width = width + border + padding ) 。

#### 怪异盒子模型 ####

怪异模式的盒子模型：padding和border被包含在定义的width和height之内。对象的实际宽度就等于设置的width值，即使定义有border和padding也不会改变对象的实际宽度，即 

( Element width = width ).


## 3. Box-sizing 盒模型组成模式 ##

**box-sizing：content-box | border-box**

作用：设置或检索对象的盒模型组成模式。  
语法：box-sizing：content-box | border-box

默认值：content-box  

content-box：将对象定义为标准模式下的盒模型。 
border-box：将对象定义为怪异模式下的盒模型。

**标准盒子模型尺寸规格** = content + padding + border

**怪异盒子模型尺寸规格** = content

注意:该样式存在**浏览器兼容性**问题,当下考虑到多终端适配,通常在样式初始化时设置:

(exp: *{ box-sizing: border-box; })