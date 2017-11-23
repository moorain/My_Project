CSS3中的背景属性

在CSS3中,新添了很多特性,在工作开发中,背景属性的使用率极高,本文对CSS中的背景属性做了一个简单的概述.

## 1.背景的主要属性 ##

在CSS3之前,背景主要包括了五个属性: 

- background-color（背景颜色）
- background-image（背景图片）
- background-repeat（背景图片展示方式）
- background-attachment（背景图片是固定还是滚动）
- background-position（背景图片位置）

##2. CSS3新增属性 ##
CSS3的出现,新增的属性:

- background-size：    设置背景图片的大小；
- background-origin：  指定了背景图像的位置区域，很少使用；
- background-clip：    定义背景图像的裁剪区域，很少使用。



### 2.1 background-size属性 ###

用于设置背景图片的大小

属性值:


**cover**   保持等比例缩放,会完全覆盖容器(多余超出的部份会隐藏)
**contain** 保持等比例缩放,保证图片内容完整显示,如果比例和容器不同,容器背景会有空白.

除了两个属性.还可以设置具体数值,百分比值来控制图片的大小.

### 2.2 background-origin属性 ###

可用于设置背景图定位原点

属性值:

**content-box**  决定background-position起始位置从content的外边缘padding的内边缘）开始显示背景图片。

**padding-box**   默认值，决定background-position起始位置从padding的外边缘(border的内边缘)开始显示背景图片。

**border-box**  决定background-position起始位置从border的外边缘开始显示背景图片。

#### 注意: ####

background-Origin属性指定background-position属性应该是**相对位置。**

**如果背景图像background-attachment是"固定"，这个属性没有任何效果。**


### 2.3 background-clip（背景裁剪属性） ###

background-clip属性是用来定义背景图像的裁剪区域。

属性值:

**border-box：** 从border区域（不含border）开始向外裁剪背景。 

![](https://i.imgur.com/OpXgngM.png)

**padding-box：** 从padding区域（不含padding）开始向外裁剪背景。

![](https://i.imgur.com/aVBo4gx.png)

**content-box：** 从content区域开始向外裁剪背景。 

![](https://i.imgur.com/SHWYmlh.png)


从前景内容的形状（比如文字）作为裁剪区域向外裁剪，如此即可实现使用背景作为填充色之类的遮罩效果.


## 3. background-image（多背景） ##

 background-image属性设置方法多种多样,所以单独讨论:


### 设置线性渐变背景 ###

语法:

	参数设置: linear-gradient( 方向, 色标点1 [点位], 色标点2 [点位], 色标点3 [点位], 色标点... )

方向可为常量值(top,left,right,bottom),还可为角度值( 角度数deg ), 色标定位点可设置为：具体数值、百分比, **该样式存在浏览器兼容性问题.**  

实例1 如下:(-webkit-为chrome内核兼容,在实际开发中要考虑到兼容问题)

	background-image: -webkit-linear-gradient(left,#FF404C,#1CA5B8)

结果:

![](https://i.imgur.com/mon5I46.png)

	background-image: -webkit-linear-gradient(left,#FF404C 300px,#1CA5B8)

结果:

![](https://i.imgur.com/8V5l8rY.png)


**background还可设置多段线性渐变背景**,参数设置:   
repeating-linear-gradient

	background-image: -webkit-repeating-linear-gradient(left,#FF404C,#1CA5B8 200px) 

![](https://i.imgur.com/En6BHPm.png)

参数同线性渐变背景一样,常用于制作背景图案.

### 径向渐变背景 ###
background可设置径向渐变背景  
参数设置:

	radial-gradient( 半径(中心点x轴定位 中心点y轴定位), 色标点1 [点位], 色标点2 [点位], 色标点3 [点位], 色标点... )

**径向渐变背景也可以进行多段设置,只需要添加”repeating-”前缀,可用于制作涟漪,雷达波...效果.**

### 多背景设置 ###

多段参数之间以”,”相隔,可使用简写方案,或逐条编写,多段参数同样是”,”相隔,**各属性分段设置一一对应**,可用于实现前端性能优化, 设置多背景时,**越靠前其优先级越高**.

实例1:

	background-image: url(f4.png), url(f5.jpg)
	background-position: 10px 10px, 0px 0px;

实例2:

	background-image: url(bg.png), -webkit-linear-gradient(left, #ff9eaf, #72b8fe);
	background-repeat: no-repeat;
	background-position: center;





