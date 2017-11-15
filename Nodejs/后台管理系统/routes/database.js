var express = require('express');
var router = express.Router();
var mongoose = require('./connect.js')
// 定义骨架
var baseSchema = new mongoose.Schema({
   unit_name:String,
   unit_num:String,
   unit_adress:String,
   contact:String,
   phone_num:String,
   unit_code:String
})
// 定义模型
var baseModel = mongoose.model('base',baseSchema,'base')




// 保存数据
router.post('/data_add.html', function(req, res) {
//   res.send('respond with a resource');
    // 接收数据
    var unit_name = req.body.unit_name;
    var unit_num = req.body.unit_num;
    var unit_adress = req.body.unit_adress;
    var contact = req.body.contact;
    var phone_num = req.body.phone_num;
    var unit_code = req.body.unit_code;
    // console.log(unit_name,unit_num,unit_adress,contact,phone_num,unit_code)
    // 实例化对象
    var newbase = new baseModel();
        newbase.unit_name = unit_name;
        newbase.unit_num = unit_num;
        newbase.unit_adress = unit_adress;
        newbase.contact = contact;
        newbase.phone_num = phone_num;
        newbase.unit_code = unit_code;
    newbase.save(function(err){
        if(err){
            throw err;
        }else{
            res.send("1");
            console.log("数据存储成功!")
        }
    })
});




// 渲染数据
router.get('/addlist.html',function(req,res){
    console.log("进入路由....")
    // 查询数据库所有数据
    baseModel.find({},function(err,data){
        // console.log(data);
        res.send(data);
    })
})
// 编辑---通过id返回数据
router.get('/edit_base.html',function(req,res){
    var id = req.query.id;
    baseModel.findById(id,function(err,data){
        res.send(data);
    })
})
// 编辑---编辑数据储存
router.post('/edit_save.html',function(req,res){
//    console.log(req.body.id)
   var id = req.body.id;
   baseModel.findById(id,function(err,data){
       console.log(data);
        //重新赋值
        data.unit_name = req.body.unit_name;
        data.unit_num = req.body.unit_num;
        data.unit_adress = req.body.unit_adress;
        data.contact = req.body.contact;
        data.phone_num = req.body.phone_num;
        data.unit_code = req.body.unit_code;
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

// 删除

router.post('/delete_base.html',function(req,res){
    // console.log(req.body['arr[]'])
    var arr = req.body['arr[]'];
    baseModel.find({"_id":{$in:arr}}).exec(function(err,data){
        // console.log(data);
        if(data.length){
            for(var i in data){
                data[i].remove();
            }
            res.send("1");
        }else{
            res.send("0");
        }
    })
})


module.exports = router;
