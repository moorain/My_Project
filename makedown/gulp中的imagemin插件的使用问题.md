
最近在使用gulp自动化构建项目的时候，使用的imagemin插件，代码，语法，和环境都没有问题，路径，报了一个错误：

![](https://i.imgur.com/kZ0qiCT.jpg)

在运行了项目的时候，在控制台看到任务运行了，但是运行完成之后就报错，尝试了各种解决办法，重新安装依赖包和gulp都无法解决。

后来在网上寻求解决办法，看到一位网友说可能是node版本不兼容的问题。
后来我一想 ，为什么我不能把插件的版本回退呢？

### 解决办法 ###

在项目根目录下的依赖包配置文件package.json的devDependencies下：


![](https://i.imgur.com/T221Y1v.jpg)

修改为：

![](https://i.imgur.com/G5NDAuH.jpg)

删掉原来的依赖包node_modules目录。
命令行再执行一次
**cnpm i** 或 npm install重新安装一下就行了。。

以上就是我的解决办法，仅做参考。
