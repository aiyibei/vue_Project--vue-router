<!--
       1.文件要完整
       2.没有export default  你怎么把文件暴露接口出去呢
       3. <router-view></router-view>这个是插槽的意思，不是暴露接口
       4. 还有一点，你在路由引入vue文件的时候。注意看这个name
       5.这样跟你解释一下vue路由到底是个什么东西。 路由就是通过插槽<router-view>配合 你网页的地址不同去显示插槽内部不同的内容
-->
<template>
    <div>
        <div v-html="home" class="home text-center">{{home}}</div>
        <router-view></router-view>
    </div>
</template>

<script>

    export default{
        name:"home",
        data(){
            return{
                home:'这是网站首页，目前啥也没有。</br><a href="http://www.baidu.com">建设中>>>>>>>></a>'
            }
        },
        components:{

        }
    }
</script>
<style>
.home{
    margin-top:10%;
    font-size:1.2em;
    font-weight:bold;
}
.home a{
    text-decoration:none;
    color:#000000;
}
.home a:hover{
    text-decoration:blink;
    color:#ff00ff;
}
</style>