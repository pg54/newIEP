<template>
    <el-dialog :title="dialogTitle" v-model="isShowDialogFlag" :show-close="false">
        <el-form ref="addServiceformEle" :model="addServiceform" label-width="80px">

            <el-form-item label="发布类型:">
                <el-select v-model="addServiceform.CategoryCode" :disabled='hiddenIt' placeholder="请选择">
                    <el-option v-for="item in categories" :key="item.Name" :label="item.Name" :value="item.Code">
                    </el-option>
                </el-select>
            </el-form-item>

            <el-form-item label="新闻封面">
                <el-upload class="avatar-uploader" :action="getuploadURL()" :headers="getAuth()" :show-file-list="false" :on-success="handleAvatarScucess"
                    :before-upload="beforeAvatarUpload">
                    <img v-if="imageUrl" :src="imageUrl" class="avatar" v-model="addServiceform.Logo" style="width: 84px;height: 84px">
                    <i v-else class="icon iconfont icon-upload" style="font-size: 50px"></i>
                </el-upload>
            </el-form-item>

            <el-form-item label="文章标题:">
                <el-input v-model="addServiceform.Title"></el-input>
            </el-form-item>

            <el-form-item label="是否转载:">
                <el-switch v-model="showReprint" @change='changeType' on-text="" off-text=""></el-switch>
            </el-form-item>

            <div v-show="showReprint">
                <el-form-item label="微信文章链接:">
                    <el-input v-model="wechatURL"></el-input>
                </el-form-item>
            </div>

            <div v-show="!showReprint">
                <el-form-item label="文章小节:">
                    <el-input v-model="addServiceform.Summary"></el-input>
                </el-form-item>
                <el-form-item label="文章段落:" v-for="(item, index) in addServiceform.Items ">
                    <el-input type="textarea" :rows="6" v-model="item.Content" style="margin-bottom: 10px"></el-input>
                    <el-button size="mini" style="float: right" @click="reduceNewSection(index)">删除</el-button>
                    <el-button size="mini" style="float: right;margin-right: 10px" @click="addNewSection">增加段落</el-button>
                </el-form-item>
            </div>
        </el-form>

        <div slot="footer" class="dialog-footer">
            <el-button @click.native="cancel()">返回</el-button>
            <el-button type="primary" @click.native="addArticle()">提交</el-button>
        </div>

    </el-dialog>
</template>
<script>
    import {
        uploadIMGURL,
        addNewArticle,
        requestArticleCate
    } from '../api/api';
    export default {
        name: 'addNewsForm',
        data() {
            return {
                hiddenIt: false,
                categories: [],
                imageUrl: '',
                addServiceform: {
                    ID: '',
                    Title: '',
                    Summary: '',
                    CategoryCode: '',
                    Items: [{
                        Content: ''
                    }],
                    Logo: '',
                    Type: 1,
                },
                wechatURL: '',
                showReprint: false,

            };
        },
        computed: {
            // isReprint: function () {
            //     if (this.showReprint) {
            //         this.$store.dispatch('setIReprint', true);
            //         this.addServiceform.Type = 2;
            //     } else {
            //         this.showReprint = true;
            //         this.$store.dispatch('setIReprint', false);
            //     }
            //     return this.$store.state.questionPaper.isReprint;
            // },
            isShowDialogFlag: function () {
                this.getCateCodes();
                var isModify = this.$store.state.questionPaper.isModify;
                if (isModify) {
                    this.addServiceform = this.$store.state.questionPaper.formContent;
                    this.showReprint = this.addServiceform.Type === 2 ? true : false;
                    this.wechatURL = this.addServiceform.Items[0].Content;
                    this.imageUrl = this.$store.state.questionPaper.formContent.Logo;
                }
                return this.$store.state.questionPaper.addFormVisble;
            },
            newsCategoryOptionsaComputed: function () {
                return this.newsCategoryOptions;
            },
            dialogTitle: function () {
                var isModify = this.$store.state.questionPaper.isModify;
                if (isModify) {
                    return "更新文章";
                }
                return "新增文章";
            }
        },
        props: ['newsCategoryOptions'],
        methods: {
            getAuth() {
                return {
                    'authorization': localStorage.getItem('accessToken')
                };
            },
            getuploadURL() {
                return uploadIMGURL;
            },
            handleAvatarScucess(res, file) {
                console.log('图片上传res');
                console.log(res);
                if (res.Code === 0) {
                    this.imageUrl = res.Path;
                    this.addServiceform.Logo = res.Msg;
                } else {
                    this.$message.error('没有找到文件');
                }
            },
            beforeAvatarUpload() {

            },
            changeType(swith) {
                console.log(swith)
                this.addServiceform.Type = swith ? 2 : 1;
            },
            resetForm() {
                this.imageUrl = '';
                this.showReprint = false;
                this.wechatURL = '';
                this.addServiceform = {
                    ID: '',
                    Title: '',
                    Summary: '',
                    CategoryCode: '',
                    Items: [{
                        Content: ''
                    }],
                    Logo: '',
                    Type: 1,
                };
            },
            //添加文章
            addArticle() {
                var params = this.addServiceform;
                console.log(params.Type)
                console.log(params)
                let _this = this;
                if (params.Type === 2) {
                    params.Items[0].Content = this.wechatURL;
                    let formRules = [false, false, false, false]
                    if (params.CategoryCode === '') {
                        setTimeout(function () {
                            _this.$message.warning('请填写文章类型')
                        }, 200)
                    } else {
                        formRules[0] = true;
                    }
                    if (params.Logo === '') {
                        setTimeout(function () {
                            _this.$message.warning('请上传文章封面')
                        }, 400)
                    } else {
                        formRules[1] = true;
                    }
                    if (params.Title === '') {
                        setTimeout(function () {
                            _this.$message.warning('请填写文章标题')
                        }, 600)
                    } else {
                        formRules[2] = true;
                    }
                    params.Items.forEach(function (ele) {
                        if (ele.Content === '') {
                            setTimeout(function () {
                                _this.$message.warning('请填写微信文章链接')
                            }, 1000)
                            return;
                        } else {
                            formRules[3] = true;
                            return;
                        }
                    })
                    let submitArr = formRules.filter(ele => ele)
                    if (submitArr.length === 4) {
                        _this.postArticle(params)
                    }
                } else {
                    let formRules = [false, false, false, false, false, false]
                    if (params.CategoryCode === '') {
                        setTimeout(function () {
                            _this.$message.warning('请填写文章类型')
                        }, 200)
                    } else {
                        formRules[0] = true;
                    }
                    if (params.Logo === '') {
                        setTimeout(function () {
                            _this.$message.warning('请上传新闻封面')
                        }, 400)
                    } else {
                        formRules[1] = true;
                    }
                    if (params.Title === '') {
                        setTimeout(function () {
                            _this.$message.warning('请填写文章标题')
                        }, 600)
                    } else {
                        formRules[2] = true;
                    }
                    if (params.Summary === '') {
                        setTimeout(function () {
                            _this.$message.warning('请填写文章小节')
                        }, 800)
                    } else {
                        formRules[3] = true;
                    }
                    params.Items.forEach(function (ele) {
                        if (ele.Content === '') {
                            setTimeout(function () {
                                _this.$message.warning('请填写文章段落')
                            }, 1000)
                            return;
                        } else {
                            formRules[4] = true;
                            return;
                        }
                    })
                    let submitArr = formRules.filter(ele => ele)
                    if (submitArr.length === 5) {
                        _this.postArticle(params)
                    }
                }
            },
            postArticle(content) {
                addNewArticle(content).then(res => {
                    if (res.Code === 0) {
                        this.$message.success('文章上传成功');
                    } else {
                        this.$message.error(res.Msg);
                    }
                    this.$store.dispatch('addFormInvisible');
                    this.initData(this.addServiceform.CategoryCode)
                    this.resetForm();
                    this.$store.dispatch('notModify');
                });
            },
            initData(categoryCode) {
                switch (categoryCode) {
                    case 1:
                        this.$parent.requestEduNews(1);
                        this.$parent.requestPageData(1);
                        //this.$store.dispatch('getEduDataAll', 1);
                        break;
                    case 2:
                        this.$parent.requestArticleNews(1);
                        this.$parent.requestPageData(1);
                        //this.$store.dispatch('getArticleDataAll', 1);
                        break;
                    case 3:
                        // this.$store.dispatch('getTrainingDataAll', 1);
                        this.$parent.requestTrainingData(1);
                        this.$parent.requestPageData(1);
                        break;
                    case 4:
                        this.$parent.requestCompanyNews(1);
                        break;
                    case 5:
                        this.$parent.requestIndustryNews(1);
                        break;
                    case 6:
                        this.$parent.requestPlatformNews(1);
                        break;
                }

            },
            cancel() {
                this.resetForm();
                this.$store.dispatch('addFormInvisible');
                this.$store.dispatch('notModify');
                //this.closeDialog();
            },
            closeDialog() {
                console.log('关闭');
            },
            //增加段落
            addNewSection() {
                var obj = {
                    Content: ''
                };
                this.addServiceform.Items.push(obj);
                console.log(this.addServiceform.Items);
            },
            reduceNewSection(index) {
                if (this.addServiceform.Items.length === 1) {
                    this.$message.warning('默认段落，无法删除');
                } else {
                    this.addServiceform.Items.splice(index, 1);
                }
            },
            getCateCodes() {
                requestArticleCate().then(res => {
                    let _this = this;
                    _this.categories = res.data.List;
                    var index = _this.newsCategoryOptions;
                    console.log('传入Index：' + index);
                    for (var i = 0; i < _this.categories.length; i++) {
                        if (_this.categories[i].Code == index) {
                            _this.addServiceform.CategoryCode = _this.categories[i].Code;
                            break;
                        }
                    }
                    //                _this.hiddenIt = true;
                });
            },
        },
        mounted() {}
    };

</script>
<style scoped>
    .formWrap {
        width: 100%;
        height: 500px
    }

</style>
