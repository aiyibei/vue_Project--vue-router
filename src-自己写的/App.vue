<template>
  <div>
    <ul>
      <li v-for="item in links"><a @click="$goRoute(item.route)">{{item.text}}</a></li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data(){
    return{
      links:[
        {
          text:'网站首页',
          route:'/home'
        },
        {
          text:'联系我们',
          route:'/lxwm'
        },
        {
          text:'服务项目',
          route:'/xm'
        }  
      ]
    }
  },
  components:{
  }
}
</script>
<style>
  .text-center{
    text-align:center;
  }
  ul li{
    display:inline-block;
    margin-right:10px;
  }
  ul li a{
    display:inherit;
    padding:5px 10px;
    border:1px solid #ccc;
  }
  ul li a:hover{
    cursor:pointer;
    color:#fff;
    background-color:#138bec;
    border:1px solid #138bec;
  }
</style>