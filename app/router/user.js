 const express=require("express");
var router=express.Router();
const pool=require("../pool.js");
let fs = require('fs');
const multer = require('multer');
// console.log(__dirname);
// console.log(Date.now());
//上传的文件保存在 upload

const storage = multer.diskStorage({
    //存储的位置
    destination(req, file, cb){
        cb(null, "public/vue/public/img")
    },
    //文件名字的确定 multer默认帮我们取一个没有扩展名的文件名，因此需要我们自己定义
    filename(req, file, cb){
        let math=Math.random();
        math=math.toString().replace(".","");//随机字符串
        cb(null, math +"-"+ file.originalname)
    }
});
 //传入storage 除了这个参数我们还可以传入dest等参数
let upload = multer({
    storage
}).array('file'); 
//上传图片总函数(多张)
let imgs=(req,res)=>{
    return new Promise((resolve,reject)=>{
        upload(req, res, function (err) {
            if (err) return resolve(0)
            try{
                    //循环处理
                let imgPath=[];
                req.files.forEach(function (i) {
                    //获取临时文件的存储路径
                    imgPath.push(i.filename);
                    // console.log("i.path:",i.path)
                });
                resolve(imgPath)
            }catch(errr){
                return resolve(0)
            }
        });
    });
};



//上传头像
router.post('/img',async(req,res,next)=>{
    let result=await imgs(req,res);
    if(result===0) return res.send({code:500,message:"图片上传失败"});
    res.send({code:1,message:"图片上传成功",data:result})
    // console.log(req.file)
});

module.exports=router;
