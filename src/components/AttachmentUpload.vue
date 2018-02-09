<template>
    <div>
        <div class="tab-choses">
            <li v-for="(item, index) in originData" :class="{active : currentTab === index }" @click="tabClick(index)">
                {{ item }}
            </li>
        </div>
        <div class="tab-contentWrap">
            <div class="tab-chosedContent" v-show="currentTab === contentIndex" v-for="(item, contentIndex) in originData">
                <h2 class="titleBox">{{ item }}</h2>
                <div class="uploadBox">
                    <div class="uploadWrap clearfix">
                        <el-upload class="avatar-uploader" :action="getuploadURL()" :show-file-list="false" :on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload" :headers="getAuth()">
                            <img v-if="attachment.Path" :src="attachment.Path" class="avatar">
                            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                            <p>
                                <i class="el-icon-arrow-up"></i>
                            </p>
                            <!-- <p><span></span></p> -->
                            <el-button type="primary" size="mini">点击选择图片</el-button>
                        </el-upload>
                    </div>
                    <div class="uploadAction" >
                        <el-button type="warning"  @click="submitUpload()">确认上传该图片</el-button>
                        <p>格式：JPG/PNG</p>
                        <p>大小：小于10M</p>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
    import api from '../api/index.js';
    export default {
        name: 'attchmentUpload',
        data() {
            return {
                originData: ['儿童出生医学证明', '常住人口登记卡', '监护人身份证', '儿童健康证明', '医学诊断书', '残疾证'],
                currentTab: 0,
                attachmentList: [],
                imageName: '',
                attachment: {
                    ID: '',
                    Path: '',
                    PatientAgentID: '',
                    Type: 1
                },//当前操作的附件
            }
        },
        methods: {
            beforeAvatarUpload() {

            },
            requestAttachmentList() {
                let _this = this;
                _this.initData();
                api.getAttachmentList(_this.patientId).then(res => {
                    _this.attachmentList = res.List;
                    for (let i = 0; i < _this.attachmentList.length; i++) {
                        if (_this.attachmentList[i].Type === _this.currentTab + 1) {
                            _this.attachment = _this.attachmentList[i];
                            break;
                        }
                    }
                }).catch(err => {
                    _this.$message.error('获取患者附件失败,请稍候再试！');
                });
            },
            getAuth() {
                return { 'authorization': localStorage.getItem('accessToken') };
            },
            initData() {
                this.patientId = this.$store.state.mystudent.currentPatientId.ID;
                this.attachment = {
                    ID: '',
                    Path: '',
                    PatientAgentID: this.patientId,
                    Type: this.currentTab + 1
                };
            },
            tabClick(index) {
                this.currentTab = index;
                this.initData();
                for (let i = 0; i < this.attachmentList.length; i++) {
                    if (this.attachmentList[i].Type === this.currentTab + 1) {
                        this.attachment = {
                            ID : this.attachmentList[i].ID,
                            Path: this.attachmentList[i].Path,
                            Type : this.attachmentList[i].Type,
                            PatientAgentID:this.attachmentList[i].PatientAgentID
                        };
                        break;
                    }
                }
            },
            submitUpload() {
                let params = {
                    ID: this.attachment.ID,
                    Type: this.attachment.Type,
                    PatientAgentID: this.attachment.PatientAgentID,
                    Attachment: this.imageName
                };
                api.uploadPatientAttachment(params).then(res => {
                    if (res.Status) {
                        this.$message.success('保存成功！');
                        this.requestAttachmentList();
                    } else {
                        this.$message.error('保存失败,请稍后重试！');
                    }
                }).catch(err => {
                    this.$message.error('保存失败,请稍后重试！');
                    console.log(err);
                });
            },
            getuploadURL() {
                return api.uploadIMGURL;
            },
            handleAvatarSuccess(res, file) {
                if (res.Code == 0) {
                    this.attachment.Path = res.Path;
                    this.imageName = res.Msg;
                } else {
                    this.$message.error('上传照片失败，请重试');
                }
            },

        },
        created() {
            this.requestAttachmentList();
        },
        mounted() {

        }

    }
</script>
<style scoped>
    .attachmentBox {
        width: 100%;
        height: 580px;
        position: absolute;
        left: 0;
        top: 43px;
        overflow-y: scroll;
    }

    .tab-choses {
        position: absolute;
        left: 0;
        top: 0;
        width: 95px;
        height: 580px;
        border-right: 1px solid #efefef;
    }

    .tab-choses li {
        width: 94px;
        height: 70px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
    }

    .tab-choses .active {
        background-color: #ffffff;
        color: RGBA(32, 160, 255, 1.00);
    }

    .tab-contentWrap {
        position: absolute;
        left: 95px;
        top: 0;
        width: 1090px;
        height: 580px;
    }

    .uploadBox {
        width: 100%;
        height: 310px;
    }

    .uploadBox div {
        float: left;
    }

    .titleBox {
        width: 100%;
        height: 60px;
        line-height: 60px;
        padding-left: 60px;
    }

    .uploadWrap {
        width: 300px;
        height: 300px;
        margin-left: 60px;
        /*overflow: hidden;*/
        /* border: 2px dotted rgba(152, 152, 152, 1); */
        box-shadow: 0 9px 12px -6px rgba(0,0,0,.2),0 19px 29px 2px rgba(0,0,0,.14),0 7px 36px 6px rgba(0,0,0,.12)!important;
    }

    .avatar-uploader .el-upload {
        border: 1px dotted #d9d9d9;
        border-radius: 6px;
        cursor: pointer;
        position: relative;
    }

    .avatar-uploader .el-upload:hover {
        border-color: #20a0ff;
    }

    .avatar-uploader-icon {
        font-size: 28px;
        color: #8c939d;
        width: 300px;
        height: 300px;
        line-height: 300px;
        text-align: center;
    }

    .avatar {
        width: 300px;
        height: 300px;
        display: block;
    }

    .uploadAction {
        width: 338px;
        height: 300px;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
    }

    .uploadAction p {
        font-size: 15px;
        font-weight: bold;
        color: rgba(173, 173, 173, 1);
        margin: 5px;
    }

</style>

