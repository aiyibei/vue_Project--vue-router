import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import lianxiwomen from '@/components/lianxiwomen'
import job from '@/components/lianxiwomen/job'
import kefu from '@/components/lianxiwomen/job/kefu'
import wangluo from '@/components/lianxiwomen/job/wangluo'
import zhengxingYY from '@/components/lianxiwomen/job/zhengxingYY'
import jiguangYY from '@/components/lianxiwomen/job/jiguangYY'
import map from '@/components/lianxiwomen/map'
import xiangmu from '@/components/xiangmu'
import shoushu from '@/components/xiangmu/shoushu'
import jiguang from '@/components/xiangmu/jiguang'
       /*上面的import 吧你的vue文件引入过来，方便调用
       */
Vue.use(Router)
//这个地方就是配置路由
export default new Router({
  routes: [
    { 
       /*path指的是你的网站链接啊，跟你的文件没有半毛钱关系，只是叫你去设定一个网站链接去显示你想显示的组件。比如说
        你吧path设置为A 
        那么。 你当前的组件 就在你的 localhost：8080/A 显示明白了。*/
      path: '/home',
      name: 'home',
      component: home  //这个要对应你所想要渲染的vue组件
    },
    {
      path: '/lxwm', 
      name: 'lianxiwomen',
      component: lianxiwomen,
      children:[ 
        {
          path:'job', //问题就在不同的webpack配置 这个 孩子路由要不要加 /lianxiwomen/job 这个你也可以测试要不要加
          name:'job',
          component:job,
          children:[
            {
                path:'kefu',
                name:'kefu',
                component:kefu
            },
            {
              path:'wangluo',
              name:'wagnluo',
              component:wangluo
            },
            {
              path:'zhengxingYY',
              name:'zhengxingYY',
              component:zhengxingYY
            },
            {
              path:'jiguangYY',
              name:'jiguangYY',
              component:jiguangYY
            }
          ]
        },
        {
          path:'map',
          name:'map',
          component:map
        }
      ]
    },
    {
      path:'/xm',
      name:'xiangmu',
      component:xiangmu,
      children:[
        {
            path:'shoushu',
            name:'shoushu',
            component:shoushu
        },
        {
            path:'jiguang',
            name:'jiguang',
            component:jiguang
        }
      ]
    }
  ]
})