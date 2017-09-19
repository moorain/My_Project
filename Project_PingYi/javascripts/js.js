 window.onload = function(){
 
 //实现的效果，滚动条滚动时，距离顶部一定高度的时候，显示返回顶部
        //点击返回顶部时  慢慢返回
        //步骤二  注册滚动事件
        window.onscroll = function(){
            //获取当前滚动条的高度
            var  topPx = Math.max(document.documentElement.scrollTop,document.body.scrollTop);
            //找到返回按钮
            var  returnTop = document.getElementById('returnTop');
            //判断          
            if(topPx>=300){
                returnTop.style.display = 'block';
            }else{
                returnTop.style.display = 'none';
            }
            //添加点击事件
            returnTop.onclick = function(){
                alert('en');
                
                //添加定时器
                var returnBtn = setInterval(function(){
                   alert('en');
                   
                    var len =  document.documentElement.scrollTop||document.body.scrollTop;
                   alert(len);
                    len -=10;
                    console.log(len);
                    if(len<=0){
                        clearInterval(returnBtn);
                    }else{
                        document.documentElement.scrollTop = len;
                        document.body.scrollTop = len;
                        console.log(len);
                    }   
                },300)
            }
        }
    }        