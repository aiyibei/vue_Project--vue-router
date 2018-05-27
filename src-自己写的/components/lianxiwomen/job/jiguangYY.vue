<template>
    <div class="content">
        <h3 class="text-center">{{title}}</h3>
        <ul>
            <li>五险一金</li>
            <li>年底双薪</li>
            <li>加班补助</li>
        </ul>
        <p>
            <h5>职位描述</h5>
            <div>
1、电子商务网站开发、系统开发；</br>
2、按照项目管理流程，参与研发部门的总体设计评审；</br>
3、进行详细设计、代码开发，配合测试，高质量完成项目；</br>
4、参与技术难题攻关、组织技术积累等工作。</br>
<h5>任职资格：</h5>
1、一年以上开发经验，有企业级应用开发经验；</br>
2、精通Java/J2EE编程，有Spring+Hibernate或类似框架的实际项目经验，熟练使用Eclipse等开发工具；</br>
3、熟悉JavaScript、Ajax、XML等相关技术；</br>
4、熟悉Velocity、Freemaker等模板引擎；</br>
5、熟悉Oracle、MySQL等数据库开发、SQL性能调优；</br>
6、熟练掌握常用的Linux命令、、shell脚本，Windows、Server的各项服务、应用配置；
            </div>
        </p>
        <router-view></router-view>
    </div>
</template>

<script>
    export default{
        name:'jiguangYY',
        data(){
            return{
                title:'激光美容科招聘信息介绍'
            }
        },
        components:{

        }
    }

</script>

<style>
</style>