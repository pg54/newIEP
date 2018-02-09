<template>
    <div class="main">
        <div class="pageNavbar">
            <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item v-for="(item, index) in xpath" :key="item.text">
                    <span @click="linkJump(index)">{{ pathNameSequence[item.text] }}</span>
                </el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="tabs">
            <div class="tabs-chose">
                <!-- <li v-for="(tab, index) in tabs" :class="{active : currentTab === index }" @click="currentTab = index;CPEPVisible = [true,false,false];choseCPEPvisible = false;testStatuses = [true,false,false,false,false];">{{tab}}
                </li> -->
                <ul slot="links" class="links">
                    <!--<li><router-link class='link' to="/myService/serviceDyma"><p>动态</p></router-link></li>-->
                    <li>
                        <router-link class='link' to="/serviceTool/serviceDynamics" @click.native="navtitle = '管理'">
                            <p>动态</p>
                        </router-link>
                    </li>
                    <li>
                        <router-link class='link' to="/serviceTool/consultancy" @click.native="navtitle = '咨询管理'">
                            <p>咨询管理</p>
                        </router-link>
                    </li>  

                    <li>
                        <router-link class='link' to="/serviceTool/testManage" @click.native="navtitle = '评测管理'">
                            <p>评测管理</p>
                        </router-link>
                    </li>

                    <li>
                        <router-link class='link' to="/serviceTool/trainingManagement" @click.native="navtitle = '训练管理'">
                            <p>训练管理</p>
                        </router-link>
                    </li>
                    <li>
                        <router-link class='link' to="/serviceTool/visitCenter" @click.native="navtitle = '随访中心'">
                            <p>随访中心</p>
                        </router-link>
                    </li>
                    <li>
                        <router-link class='link' to="/serviceTool/cpep" @click.native="navtitle = 'CPEP'">
                            <p>CPEP</p>
                        </router-link>
                    </li>
                    <li>
                        <router-link class='link' to="/serviceTool/entranceTest" @click.native="navtitle = '入学评测'">
                            <p>入学评测</p>
                        </router-link>
                    </li>
                </ul>

            </div>
            <div class="tabs-content">
                <router-view :key="key"></router-view>
            </div>
        </div>
    </div>
</template>
<script>
    import api from '../../api/index.js';
    export default {
        name: 'ServiceTool',
        computed: {
            key() {
                if (this.$router.currentRoute.path == '/serviceTool') {
                    this.jumptoFirstChild();
                }
                return this.$route.name !== undefined ? this.$route.name + +new Date() : this.$route + +new Date();
            },
            xpath: function () {
                let pathStr = this.$route.path
                let pathArr = pathStr.split('/')
                pathArr.splice(0, 1)
                let len = pathArr.length
                let newArr = pathArr.map(function (ele, index) {
                    let obj = {
                        text: ele,
                        disabled: index === (len - 1)
                    }
                    return obj
                })
                return newArr
            },
        },
        data() {
            return {
                currentTab: 0,
                tabs: ['动态', '咨询管理', '评测管理', '训练管理', '随访中心', 'CPEP', '入学评测'],
                navtitle: '',
                pathNameSequence: {
                    'serviceTool': '服务安排',
                     'cpep': 'CPEP', 
                     'serviceCPEP':　'CPEP评测',
                     'consultancy':　'咨询管理',
                     'testManage':　'评测管理',
                     'serviceDynamics':　'动态',
                     'entranceTest':　'入学测试',
                     'trainingManagement':　'训练管理',
                     'visitCenter':　'入学测试',
                     'sendQuestionnaire': '问卷内容'
                     }
            };
        },
        methods: {
            jumptoFirstChild() {
                this.$router.push({
                    path: '/serviceTool/serviceDynamics'
                });
            },
            linkJump(index) {
                let xpath = this.xpath.map(ele => ele.text)
                let pathStr = '/' + xpath.slice(0, index + 1).join('/').trim()
                // 记录对应的path的状态，状态有两个，列表弹窗，对应的页数，其实就是这个挺难做的，每个path对应的具体网络请求的都不同。每个页面单独弄一个history，
                // vuex中每个path对应一个history，后面再弄
                this.$router.push(pathStr);
            }
        },
        created() {

        }
    };

</script>

<style scoped>
    .main {
        position: absolute;
        left: 0;
        top: 0;
    }

    .tabs {
        position: absolute;
        top: 42px;
        left: 0;
        width: 100%;
        height: 583px;
        z-index: 5;
    }

    .tabs-chose {
        position: absolute;
        width: 95px;
        height: 583px;
        background-color: #EEEFF0;
        border-right: 1px solid #EFEFEF;
        box-sizing: border-box;
    }

    .tabs-content {
        position: absolute;
        left: 95px;
        top: 0;
        width: 1185px;
        height: 100%;
    }

    .tabs-chose li {
        width: 94px;
        height: 60px;
        background-color: #EEEFF0;
        display: flex;
        cursor: pointer;
        align-items: center;
        justify-content: center;
    }

    .tabs-chose .active {
        background-color: #ffffff;
        color: RGBA(47, 189, 252, 1.00);
        border-left: 6px solid #31BBFC;
    }

    .center-content {
        width: 1125px;
        margin: 0 auto;
    }

    .testManager {
        width: 1125px;
        margin: 0 auto;
    }

    .moveLeft {
        margin-left: -30px;
    }

    .toolBox {
        display: flex;
        justify-content: flex-end;
        margin-top: 5px;
        margin-bottom: 5px;
    }

    .paticentLogo {
        width: 60px;
        height: 60px;
        border-radius: 30px
    }

    .paperContent {
        width: 100%;
        max-height: 600px;
        overflow-y: hidden
    }

    .addTestFormWrap {
        width: 100%;
    }

    .addTestsubmit {
        width: 550px;
        text-align: center;
        margin: 0 auto
    }

    .colorHeader {
        border-top: 4px solid RGBA(49, 187, 252, 1.00)
    }

    .cardBox {
        width: 100%;
        height: 530px;
        margin-top: 10px;
    }

    .newCardBox {
        width: 100%;
        height: 570px;
        margin-top: 10px;
    }

    .tableWrap {
        width: 100%;
        height: 530px;
    }

    .pageNavbar {
        position: absolute;
        left: 0;
        top: 0;
        width: 1280px;
        height: 42px;
        border-bottom: 1px solid #cccccc;
        box-sizing: border-box;
    }

    .heightMaxBox {
        height: 540px;
    }

    .pageNavbar span {
        font-size: 16px;
        cursor: pointer;
        line-height: 42px;
    }

    .pageNavbar span:hover {
        color: rgb(66, 171, 216);
    }

    .shortLength {
        height: 494px
    }

    .longTest {
        height: 560px
    }

    .onc-input {
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        background-color: #fff;
        background-image: none;
        border-radius: 4px;
        border: 1px solid #bfcbd9;
        box-sizing: border-box;
        color: #1f2d3d;
        display: block;
        font-size: inherit;
        height: 36px;
        line-height: 1;
        outline: 0;
        padding: 3px 10px;
        transition: border-color .2s cubic-bezier(.645, .045, .355, 1);
        width: 100%;
    }

    .onc-input:focus {
        border: 1px solid rgba(32, 160, 255, 1);
    }

    .courseCheckBox {
        width: 200px;
        height: 40px;
        line-height: 40px;
    }

    .courseCheckBox:nth-child(1) {
        margin-left: 15px
    }

    .cpepWrap {
        width: 100%;
        height: 583px;
        overflow-y: scroll;
    }

    .cpepContentWrap {
        width: 100%;
        height: 583px;
        overflow-y: scroll;
    }
    /*自定义滚动条*/

    .cpep_scrollbar::-webkit-scrollbar {
        width: 8px;
        height: 8px;
        background-color: #F5F5F5;
    }
    /*定义滚动条轨道 内阴影+圆角*/

    .cpep_scrollbar::-webkit-scrollbar-track {
        -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
        border-radius: 10px;
        background-color: #F5F5F5;
    }
    /*定义滑块 内阴影+圆角*/

    .cpep_scrollbar::-webkit-scrollbar-thumb {
        border-radius: 10px;
        -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, .3);
        background-color: #20a0ff;
    }

    .onc-box {
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        background-color: #fff;
        background-image: none;
        border-radius: 4px;
        border: 1px solid #bfcbd9;
        box-sizing: border-box;
        color: #1f2d3d;
        display: block;
        font-size: inherit;
        line-height: 1;
        outline: 0;
        padding: 3px 10px;
        transition: border-color .2s cubic-bezier(.645, .045, .355, 1);
        width: 100%;
    }


    .links {
        width: 94px;
        height: 583px;
        background-color: #EFEFEF;
    }

    .link {
        display: flex;
        width: 94px;
        height: 60px;
        font-size: 14px;
        color: #333333;
        align-items: center;
        justify-content: center
    }

    .link span {
        display: inline-block;
        width: 20px;
        height: 20px;
        margin-right: 20px;
    }

    .router-link-active {
        background-color: RGBA(254, 255, 255, 1.00);
        color: RGBA(47, 189, 252, 1.00);
        border-left: 6px solid #31BBFC
    }

</style>
