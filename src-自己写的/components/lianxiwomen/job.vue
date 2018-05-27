<template>
    <div>
        <h3 class="text-center red">{{title}}</h3>
        <ul class="text-center spacing" style="padding:0">
            <li v-for="item in links"><a @click="$goRoute(item.route)">{{item.text}}</a></li>
        </ul>
        <router-view></router-view>
    </div>
</template>

<script>
export default{
    name:'job',
    data(){
        return{
            title:'公司招聘信息页面',
            links:[
                {
                    text:'网络技术',
                    route:'/lxwm/job/wangluo'
                },
                {
                    text:'客服咨询',
                    route:'/lxwm/job/kefu'
                },
                {
                    text:'激光医生',
                    route:'/lxwm/job/zhengxingYY'
                },
                {
                    text:'整形医生',
                    route:'/lxwm/job/jiguangYY'
                }
            ]
        }
    },
    components:{

    }
}
</script>