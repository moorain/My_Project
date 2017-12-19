最近在做一个表单的时候，遇到一个很奇怪的问题，在设置input标签时，有两个input标签，分别设置了type为text和button ， 发现无论怎么设置。两者的宽高都不一致，去百度了下，发现有很多也出现了这个问题。具体就是**两者采用了不同的盒子模型。**

### 问题出现 ###
代码：

 	<div>
        <p><input type="text" id="text"></p> 
        <p><input type="button" id="button"></p>
    </div>

样式:

 	<style>
        #text,#button{
            width: 100px;
            height: 40px;
            border: 2px solid red;
            background: transparent;
        }
    </style>

浏览器效果：

![](https://i.imgur.com/hKkiFiQ.jpg)

可以很清晰的看到，两者的宽高有很大不同。
在浏览器控制台查看style：

type为text：

![](https://i.imgur.com/Lqds51q.jpg)

type为button：

![](https://i.imgur.com/hDT6f4l.jpg)


可以看到两者的不同。可以看到type为button时 ，浏览器使用了怪异盒子模型。也就是ie旧版本使用的盒子模型。

这里的解决办法是**把两个input盒子都设置为怪异盒子模型**，使其保持一致。

	<style>
          #text,#button{
            width: 100px;
            height: 40px;
            border: 2px solid red;
            background: transparent;
            box-sizing: border-box;
        }
    </style>



效果：

![](https://i.imgur.com/LcXuhjw.jpg)




