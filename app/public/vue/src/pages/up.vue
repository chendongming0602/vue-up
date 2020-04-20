<template>
    <div>
        <div class="title">上传图片</div>
        <el-upload
            ref="upload"
            list-type="picture-card"
            :on-preview="preview"
            :on-remove="remove"
            :on-progress="progress"
            :on-success="success"
            :before-upload="upload"
            :http-request="request"
            :auto-upload="false"
            accept=".jpg,.png,.jpeg,.gif"
            action=""
        >
            <i class="el-icon-plus"></i>
        </el-upload>
        <el-dialog :visible.sync="dialogVisible">
            <img width="100%" :src="dialogImageUrl" alt="">
        </el-dialog>
          <el-button  style="margin: 10px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button>
        <div class="title">上传文件</div>
        <el-upload
            class="upload-demo"
            ref="text"
            :on-change="handleChange"
            :auto-upload="false"
            :http-request="textEvent"
            action=""
        >
            <el-button size="small" type="primary" >点击上传</el-button>
            <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
        </el-upload>
        <el-button  style="margin: 10px;" size="small" type="success" @click="textUpload">上传到服务器</el-button>
    </div>
</template>
<script>
export default {
    data(){
        return {
            dialogImageUrl: '',
            dialogVisible: false
        }
    },
    methods:{
        // ///////////////////////////////////////上传文件
        handleChange(file, fileList) {
            this.fileList = fileList.slice(-3);
        },
        textEvent(params){
            let file = params.file,formData = new FormData();
            formData.append("text", file);
            formData.append("text", 123);//多余的值
            this.axios({
                path:"/user/text",
                method:"POST",
                data:formData
            }).then(res=>{
                alert("上传文件成功");
                this.$router.go(0);
                // console.log(res)
            })
        },
        textUpload(){
            this.$refs.text.submit();  
        },
        /////////////////////////////////// 上传图片
        remove(file, fileList) {
            console.log("删除时的钩子")
        // console.log(file, fileList);
        },
        preview(file) {
            this.dialogImageUrl = file.url;
            this.dialogVisible = true;
        },
        progress(){
            console.log("上传时")
        },
        success(){
            console.log("上传成功的钩子")
        },
        upload(){
            // return false
            console.log("上传之前")
        },
        request(params){//上传图片
            // console.log("自定义上传",file)
            let file = params.file,formData = new FormData();
            formData.append("file", file);
            formData.append("text", 123);//多余的值
            this.axios({
                path:"/user/img",
                method:"POST",
                data:formData
            }).then(res=>{
                alert("上传图片成功");
                this.$router.go(0);
                // console.log(res)
            })
        },
        submitUpload(e){
            this.$refs.upload.submit();  
        }
    }
}
</script>
<style  scoped>
    .title{
        padding: 10px;
        text-align: center;
        background: coral;
        color: #fff;
        font-size: 20px;
        margin-bottom: 10px;
    }
</style>