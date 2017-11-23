单行布局的一些方法:

### 前言 ###
html代码:
css:

        ul{
            padding: 0;
            margin: 0;
           
        }
        li{
            width: 25%;
            height: 100px;
            list-style: none;
        }
        li:nth-child(1){background: red;}
        li:nth-child(2){background: green;}
        li:nth-child(3){background: gold;}
        li:nth-child(4){background: gray;}

内容:

	 <ul>
        <li>A</li>
        <li>B</li>
        <li>C</li>
        <li>D</li>
    </ul>

1. 使用float布局时,设置左右浮动,会出现一些问题
2. display:inline-block

以上的方法,都有一些问题,因为它们两者都不是为了布局而生的(float最开始是实现文字环绕的目的)

### 1.flex ###

	ul{
	 display:flex;
	}

![](https://i.imgur.com/sbLViuO.png)

这是flex其中一个常用场景,主要有两个使用场景.

### 2.flex-direction ###
**1.  row** 默认值。灵活的项目将水平显示，正如一个行一样。

**2.  row-reverse** 与 row 相同，但是以相反的顺序。(**由右边往左,水平方向反向**)

	ul{
        display: flex;
        flex-direction:row-reverse; 
    }
![](https://i.imgur.com/Tf5efok.png)

**3.column** 灵活的项目将垂直显示，正如一个列一样。  

**4.column-reverse**  与 column 相同，但是以相反的顺序。


**排序方向为主轴,其垂直方向为侧轴**

### 3.对齐方式: justify-content ###

**沿主轴方向:**

flex-start  :排列的起止方向对齐.
flex-end : 排列的终止方向对齐
center:居中对齐
space-between:两边对齐(无空隙),中间空白均分
space-around :将容器均分,元素放入均分块内...


### align-content ###

**沿侧轴方向**

属性性质同上:

flex-start  :排列的起止方向对齐.  
flex-end : 排列的终 止方向对齐  
center:居中对齐  
space-between:两边对齐(无空隙),中间空白均分  
space-around :将容器均分,元素放入均分块内...  


