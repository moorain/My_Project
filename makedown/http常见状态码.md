常见http状态码



### 1~5开头的http状态码的含义 ###

1.   1xx开头表示消息
2.   2xx表示成功
3.   3xx表示重定向
4.   4xx表示请求错误
5.   5xx表示服务端错误


### 常见的http状态码 ###

**200 ok**

表示请求成功，一切正常

**301 Moved Permanently**

重定向，客户请求的文档在其他地方，新的url在location头中给出，浏览器此时应自动访问新的url

**302 Found**

临时重定向，类似于301，但是新的url应该被视为临时性的替代，而不是永久性的。

**304 Not Modified**

客户端有缓冲的文档，并发出了一个条件性的请求。服务器告诉客户，原来缓冲的文档还可以继续使用。

**400 Bad Request**

请求出现语法错误

**403 Forbidden**

资源不可用

**404 not found**

无法找到指定位置的资源

**405 Method Not Allowed**

请求方法（get ,post ,head ,put,tract等）对指定的资源不适用。

**500 internal server error**

服务器遇到了意料不到的情况，不能完成客户的请求

**501 not implemented**

服务器不支持实现请求所需要的功能

