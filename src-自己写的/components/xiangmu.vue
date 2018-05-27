<!--
       1.文件要完整
       2.没有export default  你怎么把文件暴露接口出去呢
       3. <router-view></router-view>这个是插槽的意思，不是暴露接口
       4. 还有一点，你在路由引入vue文件的时候。注意看这个name
       5.这样跟你解释一下vue路由到底是个什么东西。 路由就是通过插槽<router-view>配合 你网页的地址不同去显示插槽内部不同的内容
-->
<template>
    <div>
        <h2 class="text-center">{{title}}</h2>
        <ul class="text-center spacing" style="padding:0">
            <li v-for="item in links"><a @click="$goRoute(item.route)">{{item.text}}</a></li>
        </ul>
        <router-view></router-view>
    </div>
</template>

<script>
export default{
    name:"xiangmu",
    data(){
        return{
            title:'医院分激光科和手术科室',
            links:[
                {
                    text:'激光科',
                    route:'/xm/jiguang' //这里是对应的目录下面的.vue文件
                },
                {
                    text:'手术科',
                    route:'/xm/shoushu'
                }
            ]
        }
    }
}
</script>