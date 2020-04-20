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
        cb(null, Date.now() +"-"+ file.originalname)
    }
});
const storage2 = multer.diskStorage({
    //存储的位置
    destination(req, file, cb){
        cb(null, "public/vue/public/text")
    },
    //文件名字的确定 multer默认帮我们取一个没有扩展名的文件名，因此需要我们自己定义
    filename(req, file, cb){
        cb(null, Date.now() +"-"+ file.originalname)
    }
});
 //传入storage 除了这个参数我们还可以传入dest等参数
 const upload = multer({storage});//图片
 const upload2 = multer({storage:storage2});//文件
router.post('/img',upload.single('file'),(req,res,next)=>{
    let url=req.file.filename;
	console.log(url)  
	res.send({code:1,message:"上传图片成功",data:[]})
});
router.post('/text',upload2.single('text'),(req,res,next)=>{
    let url=req.file.originalname;
	console.log(url)  
	res.send({code:1,message:"上传文件成功",data:[]})
});
// let uploadEvent=(req,folder)=>{//上传的总函数
// 	return new Promise((reslove,rejact)=>{
// 	   const url = `public\/${req.file.filename}`;
// 	   let name = /\.[^\.]+$/.exec(url);//后缀
// 	   let math=Math.random();
// 	   math=math.toString().replace(".","");//随机字符串
	   
// 	});
// }
// router.post("/reg",(req,res)=>{
// 	var id="";
// 	var uname=req.body.uname;
// 	var upwd=req.body.upwd;
// 	var email="";
// 	var phone="";
// 	var avatar=req.body.avatar;
// 	var real_name="";
// 	var sex="";
// 	// console.log(uname,upwd)
  
// 	var sql="INSERT INTO mv_user VALUES (?,?,?,?,?,?,?,?)";//密码加密
// 	pool.query(sql,[id,uname,upwd,email,phone,avatar,real_name,sex],(err,result)=>{
// 	  if(err) throw err;
// 	  if(result.affectedRows>0){
// 		res.send({code:1,msg:"注册成功"});
// 	  }else{
// 		res.send({code:-1,msg:"注册失败"});
// 	  }
// 	});
//   });
  
  
//   router.post("/verify",(req,res)=>{//验证用户名是否已经存在
// 	  var sql="SELECT uid FROM mv_user WHERE uname=?";
// 	  pool.query(sql,[req.body.uname],function(err,result){
// 		  if(err) throw err;
// 		  if(result.length>0){
// 			  res.send({code:-1,msg:"用户名已经存在"});
// 		  }else{
// 			  res.send({code:1,msg:"用户名可用"});
// 		  };
// 	  });
//   });



// router.post("/login",(req,res)=>{

// 	var obj=req.body;
// 	var sql="SELECT uid FROM mv_user WHERE uname=? AND upwd=?";//登录
// 	  pool.query(sql,[obj.uname,obj.upwd],function(err,result){
// 		  if(err) throw err
// 		  if(result.length>0){
// 		  req.session.uid=result[0].uid//session值
// 		  // console.log(req.session)
// 		  res.send({code:1,msg:"登录成功",session:req.session.uid});
// 			  }else{
// 		  res.send({code:-1,msg:"用户名或者密码错误"});
// 		  };
// 	  });
//   });
  
//   router.post("/loglog",(req,res)=>{//登录返回用户名
// 	var sql="SELECT uname,avatar FROM mv_user WHERE uid=?";
// 	  pool.query(sql,[req.session.uid],function(err,result){
// 		  if(err) throw err;
// 		  if(result.length>0){
// 			  res.send({code:1,data:result});
// 		  }else{
// 			  res.send({code:-1,msg:"请先登录"});
// 		  };
// 	  });
//   });

module.exports=router;
