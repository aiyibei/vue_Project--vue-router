<!--
       1.文件要完整
       2.没有export default  你怎么把文件暴露接口出去呢
       3. <router-view></router-view>这个是插槽的意思，不是暴露接口
       4. 还有一点，你在路由引入vue文件的时候。注意看这个name
       5.这样跟你解释一下vue路由到底是个什么东西。 路由就是通过插槽<router-view>配合 你网页的地址不同去显示插槽内部不同的内容
-->
<template>
    <div class="content">
        <h3 class="text-center">{{title1}}</h3>
        <ul>
            <li>五险一金</li>
            <li>年底双薪</li>
            <li>加班补助</li>
            <li>补充公积金</li>
            <li>补充医疗保险</li>
        </ul>
        <p>
            <h5>职位描述</h5>
            <div>
<h5>职位信息</h5>
1.通过电话、微信与客户进行有效沟通了解客户需求，帮助客户下单；<br>
2.维护老客户，根据客户需求提升服务质量。<br>
3.维护企业公众号。<br> 
<h5>任职要求：</h5>
1、有一定的客户服务知识和能力，有客户服务工作经验的优先考虑。<br>
2、计算机操作熟练，office办公软件使用熟练，有一定的网络知识基础。<br>
3、要求一定要有“客户为先”的服务精神，一切从帮助客户、满足客户角度出发<br>
4、性格要求沉稳、隐忍，善于倾听，有同理心，乐观积极、普通话标准、流利，反应灵敏。<br>
5、热爱工作，敬业、勤恳，乐于思考，具有自我发展的主观愿望和自我学习能力。<br>
有意向者请直接发送个人简历函。<br>
工作地址惠州市惠城区麦地路风尚国际8D<br>
            </div>
        </p>
        <router-view></router-view>
    </div>
</template>
   
<script>
export default{
    name:'kefu', //这个意思是给你的vue取了一个名字
    data(){
        return{
           title1:'网络在线销售客服+包吃',
        }
    },
    components:{

    }
}
</script>

<style>
.kefu_nr{font-size:1.2em;}
  .text-center{
    text-align:center;
  }
.content ul li{
    display:inline-block;
    margin-right:10px;
    padding:5px 10px;
    border:1px solid #ccc;
    margin-bottom:12px;
  }
</style>