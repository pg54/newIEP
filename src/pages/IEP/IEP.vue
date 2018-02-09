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
                <ul slot="links" class="links">
                    <li>
                        <router-link class='link' to="/iep/iepBasicInfo" @click.native="navtitle = '基本信息'">
                            <p>基本信息</p>
                        </router-link>
                    </li>
                    <li>
                        <router-link class='link' to="/iep/iepAnalysis" v @click.native="navtitle = '评测分析'">
                            <p>评测分析</p>
                        </router-link>
                    </li>
                    <li>
                        <router-link class="link" to="/iep/iepPlan" @click.native="navtitle = '教学计划'">
                            <p>教学计划</p>
                        </router-link>
                    </li>
                    <li>
                        <router-link class='link' to="/iep/iepSchedule" @click.native="navtitle = '课程表'">
                            <p>课程表</p>
                        </router-link>
                    </li>
                    <li>
                        <router-link class='link' to="/iep/ieplibrary" @click.native="navtitle = '教案库'">
                            <p>教案库</p>
                        </router-link>
                    </li>
                    <li>
                        <router-link class='link' to="/iep/iepStudy" @click.native="navtitle = '个案研讨'">
                            <p>个案研讨</p>
                        </router-link>
                    </li>
                    <li v-if="false">
                        <router-link class='link' to="/iep/iepSummary" @click.native="navtitle = '记录总结'">
                            <p>记录总结</p>
                        </router-link>
                    </li>
                    <li>
                        <router-link class='link' to="/iep/iepRecord" @click.native="navtitle = '活动记录'">
                            <p>活动记录</p>
                        </router-link>
                    </li>
                    <li v-if="false">
                        <router-link class='link' to="/iep/iepFeedback" @click.native="navtitle = '反馈评价'">
                            <p>反馈评价</p>
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
    import {
        setToken
    } from '../../api/api';
    export default {
        name: 'iep',
        computed: {
            key() {
                if (this.$router.currentRoute.path == '/iep') {
                    this.jumptoIepPlan();
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
                navtitle: '基本信息',
                pathNameSequence: {
                    'iep': 'IEP计划',
                    'iepBasicInfo': '基本信息',
                    'iepAnalysis':　'评测分析',
                    'iepPlan':　'教学计划',
                    'iepSchedule':　'课程表',
                    'ieplibrary':　'教案库',
                    'iepStudy':　'个案研讨',
                    'iepSummary':　'记录总结',
                    'iepRecord':　'活动记录',
                    'iepFeedback':　'反馈评价',
                    'resultPaper': '评测结果'
                }
            }
        },
        methods: {
            jumptoIepPlan() {
                this.$router.push('/iep/iepBasicInfo');
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

        },
        destroyed() {},
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
    /* .iepWrap { position: relative } */
    /* #sidebar {
    position: absolute;
    left: 0;
    top: 42px;
    width: 95px;
    height: 583px;
    overflow-y: scroll;
    background-color: #EFEFEF;
    border-right: 1px solid #EFEFEF;
} */
    /* .main {
    position: absolute;
    left: 95px;
    height: 626px;
    top: 0;
    width: calc(100% - 95px)
} */

    .links {
        width: 94px;
        height: 583px;
        background-color: #EFEFEF
    }

    .link {
        display: flex;
        width: 94px;
        height: 70px;
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
