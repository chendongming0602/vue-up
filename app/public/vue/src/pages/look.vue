<template>
    <div>
        <div class="title">上传的图片</div>
        <div class="img-box">
            <img v-for="(t,i) in imgs" :key="i" :src="t" :alt="i">
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            imgs:[
                require("../../public/img/1587370406625-分享小卡片.png"),
                require("../../public/img/1587370406625-分享小卡片.png"),
                require("../../public/img/1587371120268-开屏上.png"),
            ]
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
    .img-box{
        margin-top: 20px;
        border:2px solid coral;
        display: flex;
        justify-content: space-around;
        align-content: center;
        flex-wrap: wrap;
        padding: 10px;
    }
    .img-box img{
        width: 400px;
        height: 300px;
        border-radius: 10px;
        margin-top: 10px;
        object-fit: cover;
    }
</style>