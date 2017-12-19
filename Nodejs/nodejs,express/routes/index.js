var express = require('express');
var router = express.Router();
var mongoose = require('./connect.js')
// 定义骨架:
var userSchema = new mongoose.Schema({
    address:String,//帐号
    username:String,//用户名
    password:String,//密码
    tbnumber:String,//序号
    role:String,//角色
    branch:String,//部门
    isopen:Boolean//是否启用
})
//定义骨架:
var logSchema = new mongoose.Schema({
    "username":String,
    "content":String,
    "optime":String,
    "ip":String,
    "result":String
})
// 发布模型
var userModel= mongoose.model('user',userSchema,'user');
// 日志模型
var logModel= mongoose.model('log',logSchema,'log');

// 登录验证
router.post('/checklogin.html',function(req,res){
    var username = req.body.username;
    var password = req.body.password;
    // 在数据库中查询
    userModel.find({"username":username,"password":password}).exec(function(err,data){
        // 判断数据是否存在
        if(data.length){
            res.cookie("name",username)
            res.send("1");
        }else{
            res.send("0");
        }
    })
})

// 验证cookie
router.get('/checkuser.html',function(req,res){
    var name = req.cookies.name;
    if(name) {
        res.send('1')
      } else {
        res.send('alert("请登录!"); location.href = "login.html";');
      }
})

// 退出登录
router.get('/clearcookie.html',function(req,res){
    res.clearCookie("name");
    res.redirect("admin")
})

// 添加用户数据
router.post('/adduser.html',function(req,res){
    // 接收数据
    var address = req.body.address;
    var username=req.body.username;
    var password=req.body.password;
    var tbnumber=req.body.tbnumber;
    var role=req.body.role;
    var branch=req.body.branch;
    var isopen=req.body.isopen;

    // console.log("后端接收到的数据:"+address,username,password,tbnumber,role,branch,isopen);
    // 创建实体,把接收到数据保存在数据库中
    var usersModel  = new userModel();
        usersModel.address  = address;
        usersModel.username  = username;
        usersModel.password  = password;
        usersModel.tbnumber  = tbnumber;
        usersModel.role  = role;
        usersModel.branch  = branch;
        usersModel.isopen  = isopen;
    // 保存在数据库中
    usersModel.save(function (err) {
        if(!err){
            console.log("The data has been stored .....")
            var result = "成功!"
        }else{
            throw err;
            var result = "失败!"            
        }
    // 保存日志
    // 获取日志数据

        var log = new logModel();

        var _username = req.cookies.name;
        var content = "新增用户:"+username;
        var optime = new Date();
        var result = result;
        var ip = req.ip; 
        console.log(_username,log,content,optime,result,ip)
        // 创建日志实例
        log.username = _username;
        log.log = log;
        log.content = content;
        log.optime = optime;
        log.result = result;
        log.ip = ip;
        log.save();
    });
})

//渲染用户列表
router.get('/useradd.html',function(req,res){
    //去数据库查询数据
    userModel.find({}, function (err, data) {
        res.send(data);
    });
})

// 删除用户
router.post('/user_del.html',function(req,res){
    //注意数据的结构,可打印req.body查看数据结构....
    var arr = req.body['arr[]'];  
    // 根据id去查询出所有的数据
    userModel.find({"_id":{$in:arr}}).exec(function(err,data){
        // console.log(data);
        // 遍历找到的需要删除的数据 数组不能直接调用remove
        if(data.length){
            for(var i in data){
                data[i].remove();
            }
            res.send('1');
        }else{
            res.send('0');
        }
    })
})

// 修改数据
router.get('/edit_user.html',function(req,res){
    var _id = req.query.id;
    // console.log(_id);
    userModel.find({"_id":_id}).exec(function(err,data){
        res.send(data[0]);
        // console.log(data[0]);
    })
})

// 修改数据--保存修改的数据
router.post('/edituser_save.html',function(req,res){
    // console.log(req.body);
    var id = req.body.userid;
    // console.log(id);
    // 接收修改后的新数据
    var address = req.body.address;
    var username = req.body.username;
    var password = req.body.password;
    var tbnumber = req.body.tbnumber;
    var role = req.body.role;
    var branch = req.body.branch;
    var isopen = req.body.isopen;
    //通过id找到原来的数据
    userModel.findById(id, function (err, data) {
        console.log(data);
        //重新赋值
       data.address = address;
       data.username = username;
       data.password = password;
       data.tbnumber = tbnumber;
       data.role = role;
       data.branch = branch;
       data.isopen = isopen;
        //保存到数据库
       data.save(function (err) {
            if(err) {
                res.send("0");
            } else {
                res.send("1");
                console.log("The data has been revised....")
            }
        }) 
    })
}) 

// 修改密码
router.post('/changepassword.html',function(req,res){
    // 获取到新密码和旧密码...
    var oldpsw = req.body.oldpassword;
    var newpsw = req.body.newpassword;
    // 从cookie 获取用户名
    var username = req.cookies.name; 
    userModel.find({"username":username,"password":oldpsw}).exec(function(err,data){
        console.log(data);
        if(data.length){
            data[0].password = newpsw;
            data[0].save(function (err) {
                if(!err){
                    res.send({"status":"1000","msg":"修改成功!"});
                }else{
                    res.send({"status":"1001","msg":"修改失败!"});
                }
            })
        }else{
            res.send({"status":"1002","msg":"旧密码输入错误!"})
        }
    })
})

// 分页
router.get('/show_page.html',function(req,res){

    // 每页显示条数
    var pagesize = 8;
    // 当前页数
    var page = req.query.page?req.query.page:1;
    // 查询所有数据
    userModel.find({}).exec(function(err,data){
        // 计算出总页数
        var pagecount = Math.ceil(data.length/pagesize);
        var tote = data.length;
        console.log(tote);
        // 按条件查询出每一页对应的数据
        var n = (page - 1)*pagesize;
        userModel.find({}).skip(n).limit(pagesize).exec(function(err,data){
            //将pagecount附加在data数组最后一项 ,一起返回到前端    
            data.push({"pagecount":pagecount});
            data.push({"tote":tote,"pagesize":pagesize})
            res.send(data);

        })
    })
})

// 查询
router.post('/search.html',function(req,res){
    // 接收
    var part = req.body.part;
    var userrole = req.body.userrole;
    var findname = req.body.findname;
    // console.log(part,userrole,findname);
    // 根据查询条件,查询出数据   .. 
    var condition = {};

    // 构造查询条件

    var obj = {};
    if(part !== "全部"){
        obj.branch = part;//部门
    }
    if(userrole !== "全部"){
        obj.role = userrole;//部门
    }
    if(findname !== ""){
        obj.address = new RegExp(findname);//部门
    }
    // 查找....
    userModel.find(obj).exec(function(err,data){
        res.send(data);
    })
})




// 日志

router.get("/ask_log.html",function(req,res){
    logModel.find({}).exec(function(err,data){
        res.send(data);
    })
})
module.exports = router;
