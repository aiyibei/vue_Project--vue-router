<template>
    <div>
        <h2 v-html="title" class="text-center">{{title}}</h2>
        <ul class="text-center spacing" style="padding:0">
            <li v-for="item in links"><a @click="$goRoute(item.route)">{{item.text}}</a></li>
        </ul>
        <router-view></router-view>
    </div>
</template>

<script>
export default{
    name:"lianxiwomen",
    data(){
        return{
            title:'这个是<a href="http://www.baidu.com">联系我们</a>页面',
            links:[
                {
                    text:'人才招聘',
                    route:'/lxwm/job'
                },
                {
                    text:'公司地图',
                    route:'/lxwm/map'
                }
            ]
        }
    },
    components:{

    }
}
</script>
<style>
</style>