<template>
    <div>
        <div class="title">上传图片</div>
        <el-upload
            ref="upload"
            action="https://jsonplaceholder.typicode.com/posts/"
            list-type="picture-card"
            :on-preview="preview"
            :on-remove="remove"
            :on-progress="progress"
            :on-success="success"
            :before-upload="upload"
            :http-request="request"
            :auto-upload="false"
        >
            <i class="el-icon-plus"></i>
        </el-upload>
        <el-dialog :visible.sync="dialogVisible">
            <img width="100%" :src="dialogImageUrl" alt="">
        </el-dialog>
          <el-button  style="margin: 10px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button>
        <div class="title">上传文件</div>
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
        request(file){
            console.log("自定义上传")
           
        },
        submitUpload(e){
            this.$refs.upload.submit();
             this.axios({
                path:"/user/avatar",
                method:"POST"
            }).then(res=>{
                console.log(res)
            })
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