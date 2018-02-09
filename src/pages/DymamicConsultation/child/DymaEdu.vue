<template>
    <div class="main">
        <div class="eduWrap" v-show="showEduWrap" v-loading.fullscreen.lock="articleLoading">
            <div class="tabs-chose">
                <li v-for="(tab, index) in tabs" :class="{active : currentTab === index }" @click="currentTab = index">{{tab}}
                </li>
            </div>
            <div class="tabs-content">
                <div v-show="currentTab === 0" class="tab-content">
                    <addNewsForm :newsCategoryOptions="CategoryIndex"></addNewsForm>
                    <div class="toolBox">
                        <el-button @click="goAddEduForm" style="float:right">
                            <Icon type="plus-round"></Icon>
                            新增文章
                        </el-button>
                    </div>
                    <div class="center-content">
                        <div class="newsList">
                            <div v-for="(o, index) in allEduData" class="item ">
                                <div class="linkBox">
                                    <img :src="o.Logo" alt="logo" class="linkImg">
                                    <div class="linkContent">
                                        <p @click="gotoIframe(o)">
                                            <span class="newsTitle">{{ o.Title }}</span>
                                            <span class="hot" v-show="index < 3">hot</span>
                                        </p>
                                        <p class="icons" style="visibility:hidden">
                                            <span>
                                                <Icon type="eye" size="20"></Icon>1200</span>
                                            <span>
                                                <Icon type="chatbox-working" size="20"></Icon>1200</span>
                                            <span>
                                                <Icon type="ios-star" size="20"></Icon>1200</span>
                                        </p>
                                        <p class="toolBtns" v-show="o.DoctorID === doctorID">
                                            <el-button @click="modifyItem(o)">修改</el-button>
                                            <el-button @click="deleteALLEduItem(o.ID)">删除</el-button>
                                        </p>
                                    </div>
                                    <div class="newsTime">
                                        <Icon type="clock" size="16" class="timeIcon"></Icon>
                                        <span>{{ o.CreatedOn }}</span>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="page">
                        <el-pagination @current-change="nextPageEdu" layout="prev, pager, next" :page-size="5" :total="eduPageTotal">
                        </el-pagination>
                    </div>
                </div>

                <div v-show="currentTab === 1" class="tab-content">
                    <div class="center-content">
                        <div class="drArticleList" style="margin-top:20px">
                            <div v-for="(o, index) in drArticleData" class="item ">
                                <div class="linkBox">
                                    <img :src="o.Logo" alt="logo" class="linkImg">
                                    <div class="linkContent">
                                        <p @click="gotoIframe(o)">
                                            <span class="newsTitle">{{ o.Title }}</span>
                                            <span class="hot" v-show="index < 3">hot</span>
                                        </p>
                                        <p class="icons" style="visibility:hidden">
                                            <span>
                                                <Icon type="eye" size="20"></Icon>1200</span>
                                            <span>
                                                <Icon type="chatbox-working" size="20"></Icon>1200</span>
                                            <span>
                                                <Icon type="ios-star" size="20"></Icon>1200</span>
                                        </p>
                                        <!-- <p class="toolBtns" v-show="o.DoctorID === doctorID">
                                            <el-button @click="modifyItem(o)">修改</el-button>
                                            <el-button @click="deleteMyArticleItem(o.ID)">删除</el-button>
                                        </p> -->
                                    </div>
                                    <div class="newsTime">
                                        <Icon type="clock" size="20" class="timeIcon"></Icon>
                                        <span>{{ o.CreatedOn }}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="page">
                        <el-pagination @current-change="myArticlenextPage" layout="prev, pager, next" :page-size="5" :total="pageTotal">
                        </el-pagination>
                    </div>
                </div>
            </div>
        </div>

        <div v-show="showEduIframe" class="eduIframeWrap">
            <iframe width="1280" height="580" name="eduIframe" id="eduIframe" frameborder="0" marginwidth="0" marginheight="0"></iframe>
            <!--<el-button @click="cancelIframe">返回</el-button>-->
        </div>

    </div>
</template>
<script>
    import addNewsForm from '../../../components/addNewsForm.vue';
    import {
        getArticleDetail,
        deleteArticle,
        requestArticle,
        requestDrArticle
    } from '../../../api/api';
    import axios from 'axios';
    export default {
        name: 'dymaEdu',
        components: {
            addNewsForm
        },
        computed: {
            doctorID: function () {
                return this.$store.state.questionPaper.drProfile.ID;
            },
            showEduWrap: function () {
                return this.$store.state.questionPaper.generalNewsStatus;
            },
            showEduIframe: function () {
                return this.$store.state.questionPaper.newsIframeStatus;
            }
        },
        data() {
            return {
                currentTab: 0,
                tabs: ['全部文章', '我的文章'],
                CategoryIndex: 1,
                allEduCurrentPage: 1,
                allEduData: [],
                eduPageTotal: 1,
                // newsURL: '',
                drArticleData: [],
                pageTotal: 1,
                myArticleCurrentPage: 1,
                articleLoading: false,
            }
        },
        methods: {
            gotoIframe(o) {
                var path = o.Path;
                var isURL = /^http[s]{0,1}:\/\/.+$/.test(path)
                if (!isURL) return this.$message.warning('该链接为空')
                this.articleLoading = true;
                if (/mp\.weixin\.qq\.com/.test(path)) {
                    var urlHead = window.location.protocol === 'http:' ? 'http:' : 'https:'
                    var url = urlHead + '//cors-anywhere.herokuapp.com/' + path
                    let _this = this
                    axios.get(url)
                        .then(function (response) {
                            var html = response.data;
                            html = html.replace(/data-src/g, "src");
                            var html_src = 'data:text/html;charset=utf-8,' + html;
                            document.querySelector("#eduIframe").setAttribute("src", html_src);
                            _this.$store.dispatch('showGeneralNews', false);
                            _this.$store.dispatch('showNewsIframe', true);
                            _this.articleLoading = false;
                        })
                        .catch(function (error) {
                            _this.$message.error(error)
                            _this.articleLoading = false;
                        });
                } else {
                    document.querySelector("#eduIframe").setAttribute("src", path);
                    this.$store.dispatch('showGeneralNews', false);
                    this.$store.dispatch('showNewsIframe', true);
                    this.articleLoading = false;
                }
            },
            goBack() {
                this.$router.push('/dynamicConsultation');
            },
            nextPageEdu(currentPage) {
                this.allEduCurrentPage = currentPage
                this.requestEduNews(this.allEduCurrentPage);
            },
            goAddEduForm() {
                this.$store.dispatch('addFormVisible');
            },
            modifyItem(o) {
                var obj = Object.assign({}, o);
                getArticleDetail(o.ID).then(res => {
                    this.$store.dispatch('setFormContent', res.data);
                    this.$store.dispatch('isModify');
                    this.$store.dispatch('addFormVisible');
                });
            },
            deleteALLEduItem(id) {
                deleteArticle(id).then(res => {
                    if (res.Code === 0) {
                        this.$message.success('删除成功');
                        this.allArticle = true;
                        this.requestEduNews(this.allEduCurrentPage);
                        this.allArticle = false;
                        this.myArticlenextPage(this.myArticleCurrentPage);
                    }
                });
            },
            requestEduNews(pageIndex) {
                var params = {
                    'CategoryType': 1,
                    'IsRecommend': 0,
                    'PageIndex': pageIndex,
                    'PageSize': 5
                };
                requestArticle(params).then(res => {
                    this.allEduData = res.Records;
                    this.eduPageTotal = res.Total;
                });
            },
            myArticlenextPage(pageIndex) {
                this.myArticleCurrentPage = pageIndex;
                requestDrArticle(pageIndex, 5).then(res => {
                    this.drArticleData = res.data.Records;
                    this.pageTotal = res.data.Total;
                });
            },
            requestPageData(pageIndex) {
                requestDrArticle(pageIndex, 5).then(res => {
                    this.drArticleData = res.data.Records;
                    this.pageTotal = res.data.Total;
                });
            },
            deleteMyArticleItem(id) {
                deleteArticle(id).then(res => {
                    if (res.Code === 0) {
                        this.$message.success('删除成功');
                        requestDrArticle(this.myArticleCurrentPage, 5).then(res => {
                            this.drArticleData = res.data.Records;
                            this.pageTotal = res.data.Total;
                            this.nextPageEdu(this.allEduCurrentPage);
                        });
                    }
                });
            }
        },
        created() {
            this.requestEduNews(1);
            this.requestPageData(1);
        }
    };

</script>
<style scoped>
    .eduWrap {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 583px;
    }

    .main {
        position: absolute;
        left: 0;
        top: 43px;
        width: 100%;
        height: 583px;
    }

    .tabs-chose {
        position: absolute;
        width: 94px;
        height: 583px;
        background-color: #EEEFF0
    }

    .tabs-content {
        position: absolute;
        left: 94px;
        top: 0;
        width: 1185px;
        height: 583px;
        border-left: 1px solid #EFEFEF;
        overflow-y: scroll;
    }

    .eduIframeWrap {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 583px;
    }

    .tabs-chose li {
        width: 94px;
        height: 60px;
        background-color: RGBA(238, 239, 240, 1.00);
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 14px;
        font-weight: bold;
    }

    .tabs-chose .active {
        background-color: #ffffff;
        color: RGBA(32, 160, 255, 1.00);
        border-left: 6px solid #31BBFC;
    }

    .center-content {
        width: 1080px;
        margin: 0 auto;
        height: 500px;
        margin-top: 40px;
        overflow-y: scroll;
    }

    .toolBox {
        width: 1080px;
        margin: 0 auto;
        padding-top: 10px;
    }

    .item {
        padding: 14px 0;
        border-bottom: 1px solid #EFF0F1
    }

    .linkBox {
        display: block;
        width: 100%;
        height: 80px;
        position: relative
    }

    .linkImg {
        position: absolute;
        left: 0;
        right: 0;
        width: 126px;
        height: 80px
    }

    .linkContent {
        margin-left: 130px;
        font-size: 16px;
    }

    .tabs-content .newsTitle {
        position: relative;
        left: 5px;
        line-height: 0px
    }

    .tabs-content .newsTime {
        position: absolute;
        top: 0;
        right: 0;
        font-size: 12px;
        line-height: 30px;
    }

    .tabs-content .hot {
        display: inline-block;
        width: 35px;
        height: 20px;
        margin-left: 5px;
        text-align: center;
        line-height: 20px;
        background-color: #FBBB2C;
        color: #FEF8ED;
    }

    .tabs-content .toolBtns {
        margin-top: 8px;
    }

    .tabs-content .toolBtns button {
        height: 25px;
        padding: 0px 15px;
    }

    .formOne {
        z-index: 2005
    }

    .navigation {
        font-size: 16px;
        padding-left: 18px;
        margin-bottom: 10px;
        padding-bottom: 10px;
        width: 100%;
        padding-top: 10px;
        border-bottom: 1px solid gray;
    }

    .navigation span:hover {
        text-decoration: underline;
        color: #42ABD8;
    }

    .page {
        float: right;
        margin-right: 45px;
    }

</style>
