<template>
    <div class="mainContent">

        <el-dialog title="修改个人信息" :visible="modifyProfileVisible" :close-on-click-modal="false" :show-close="false"
                   @close="clearFormData">

            <el-form :model="modifyProfileform" label-width="80px" ref="modifyProfileRef">

                <el-form-item label="更新头像">
                    <el-upload class="avatar-uploader" :action="getuploadURL()" :headers="getAuth()"
                               :show-file-list="false" :on-success="handleAvatarScucess"
                               :before-upload="beforeAvatarUpload">
                        <img v-if="imageUrl" :src="imageUrl" class="avatar" v-model="modifyProfileform.Logo"
                             style="width: 84px;height: 84px">
                        <i v-else class="icon iconfont icon-upload" style="font-size: 50px"></i>
                    </el-upload>
                </el-form-item>

                <el-form-item label="姓名:">
                    <el-input v-model="modifyProfileform.NickName"></el-input>
                </el-form-item>


                <el-form-item label="机构:">
                    <el-select v-model="modifyProfileform.InstitutionID" placeholder="请选择" @change="deptOnChange">
                        <el-option v-for="item in institutionData" :key="item.ID" :label="item.Name" :value="item.ID">
                        </el-option>
                    </el-select>
                </el-form-item>

                <el-form-item label="科室:">
                    <el-select v-model="modifyProfileform.DeptID" placeholder="请选择" @change="deptOnChange">
                        <el-option v-for="item in DeptNameData" :key="item.Name" :label="item.Name" :value="item.ID">
                        </el-option>
                    </el-select>
                </el-form-item>

                <el-form-item label="病种选择:">
                    <el-select v-model="modifyProfileform.DiagnosisTags" multiple placeholder="请选择">
                        <el-option v-for="item in diagnosisTagsData" :key="item.ID" :label="item.Name" :value="item.ID">
                        </el-option>
                    </el-select>
                </el-form-item>

                <el-form-item label="职称:">
                    <el-select v-model="modifyProfileform.Title" placeholder="请选择">
                        <el-option v-for="item in TitleNameData" :key="item.ID" :label="item.Name" :value="item.ID">
                        </el-option>
                    </el-select>
                </el-form-item>

                <el-form-item label="行政职务:">

                    <el-select v-model="modifyProfileform.Position" placeholder="请选择">
                        <el-option v-for="item in PositionNameData" :key="item.ID" :label="item.Name" :value="item.ID">
                        </el-option>
                    </el-select>
                </el-form-item>

                <el-form-item label="工作年限:">
                    <el-input v-model="modifyProfileform.WorkYear"></el-input>
                </el-form-item>



                <el-form-item label="研究领域:">
                    <el-input type="textarea" v-model="modifyProfileform.SearchArea"></el-input>
                </el-form-item>

                <el-form-item label="医疗工作领域:">
                    <el-input type="textarea" v-model="modifyProfileform.WorkArea"></el-input>
                </el-form-item>

            </el-form>

            <div slot="footer" class="dialog-footer">
                <el-button @click.native="closeModifyDailog">返回</el-button>
                <el-button type="primary" @click.native="modifyProfileSubmit()">提交</el-button>
            </div>

        </el-dialog>

        <div class="toolBox">
            <el-button @click="printCard">发送名片</el-button>
            <el-button @click="modifyProfile()">修改</el-button>
        </div>
        <div id="pdf-wrap">
            <div class="person">
                <el-card :body-style="{ padding: '0px',position: 'relative',height: '190px' }">

                    <div class="logoArea">
                        <div>
                            <img :src="drData.Logo" alt="logo" class="logoIMG">
                        </div>
                        <div>
                            <div style="text-align:center">{{ drData.NickName }}</div>
                            <div style="text-align:center">
                                <span>{{ drData.InstitutionName}}</span>
                            </div>
                        </div>
                    </div>

                    <div class="drDetails">
                        <div class="detailItem">
                            <span>工作年限: </span>
                            <span>{{ drData.WorkYear }}</span>
                        </div>

                        <div class="detailItem">
                            <span>职称:</span>
                            <span>{{ drData.TitleName }}</span>
                        </div>

                        <div class="detailItem">
                            <span>职称: </span>
                            <span>{{ drData.PositionName }}</span>
                        </div>
                    </div>


                    <div  v-if="drData.Services && drData.Services.length === 0" class="serviceInfo">
                        <p>服务暂未通过审核</p>
                    </div>

                    <div v-if="drData.Services && drData.Services.length !== 0" class="serviceInfo">
                        <div v-for="item in drData.Services" :key="item.OrderCount" class="order">
                            <div v-if="item.Name === '康复管家'" class="serviceItem">
                                <img src="../../assets/images/dyma/康复管家.png" alt="logo">
                            </div>
                            <div v-else-if="item.Name === '图文咨询'" class="serviceItem">
                                <img src="../../assets/images/dyma/图文咨询.png" alt="logo">
                            </div>
                            <div v-else-if="item.Name === '视频咨询'" class="serviceItem">
                                <img src="../../assets/images/dyma/视频咨询.png" alt="logo">
                            </div>
                            <div v-else class="serviceItem">
                                图片加载中
                            </div>
                            <div class="serviceItem">{{item.Name}}</div>
                            <div v-if="item.Valid" class="servicePrice">价格:{{item.Price}}元/次</div>
                            <div v-else class="servicePrice">暂未开启</div>
                        </div>
                    </div>

                    <div class="totalOrder">
                        <div class="orderNumber">总订单数</div>
                        <p CLASS="servicePrice">{{ drData.TotalOrderCount }}</p>
                    </div>

                </el-card>

            </div>
            <div class="profession">

                <!--<el-card :body-style="{ padding: '0px' ,height: '260px'}">-->
                    <el-card>

                    <div class="professionItem workArea">
                        <p class="headTitle">研究领域:</p>
                        <p class="workContent">{{ drData.WorkArea }}</p>
                    </div>

                    <div class="professionItem">
                        <p class="headTitle">工作领域:</p>
                        <p class="workContent">{{ drData.SearchArea }}</p>
                    </div>

                    <div class="professionItem">
                        <p class="headTitle">病种领域</p>
                        <el-tag class="tag" v-for="item in drData.DiagnosisTags" :key="item.Name" type="primary">
                            {{item.Name}}
                        </el-tag>
                    </div>
                </el-card>

            </div>
        </div>


    </div>
</template>
<script>
    import api from '../../api/index.js';

    export default {
        name: 'serviceFile',
        watch: {
            '$route': 'init'
        },
        data() {
            return {
                drData: '',
                modifyProfileVisible: false,
                isModify: false,
                DeptNameData: [],
                TitleNameData: [],
                PositionNameData: [],
                diagnosisTagsData: [],
                institutionData: [], //机构
                imageUrl: '',//头像地址
                modifyProfileform: {
                    Logo: '',
                    NickName: '',
                    DeptID: '',
                    Title: '',
                    Position: '',
                    DiagnosisTags: [],
                    WorkArea: '',
                    SearchArea: '',
                    WorkYear: '',
                    InstitutionID: ''
                }
            };
        },
        methods: {
            init() {
                api.drProfile().then(res => {
                    this.drData = res.data;
//                    if (!res.data.Services) {  // 用户第一次使用，res.data.Services为空
//                        res.data.Services = [
//                            {Name: '图文咨询', Valid: false},
//                            {Name: '视频咨询', Valid: false},
//                            {Name: '康教管家', Valid: false}
//                        ]
//                    }
                });
                api.requestDept().then(res => {
                    this.DeptNameData = res.data.List;
                });
                api.requestTitle().then(res => {
                    this.TitleNameData = res.data.List;
                });
                api.requestPosition().then(res => {
                    this.PositionNameData = res.data.List;
                });
                let params = {
                    PageIndex: 1,
                    PageSize: 10,
                    type: 0
                };
                api.choseInstitution(params).then(res => {
                    this.institutionData = res.data.Records
                });
            },
            clearFormData() {
                this.modifyProfileform = {
                    Logo: '',
                    NickName: '',
                    DeptID: '',
                    Title: '',
                    Position: '',
                    DiagnosisTags: [],
                    WorkArea: '',
                    SearchArea: '',
                    WorkYear: '',
                    InstitutionID: ''
                };
            },
            //修改个人信息
            modifyProfile() {
                let _this = this;
                api.drProfile().then(res => {
                    let originData = Object.assign({}, res.data);
                    _this.imageUrl = originData.Logo
                    _this.modifyProfileform.NickName = originData.NickName
                    _this.modifyProfileform.DeptID = originData.DeptID
                    var totalArr = _this.DeptNameData;
                    for (let i = 0, j = totalArr.length; i < j; i++) {
                        if (totalArr[i].ID === this.modifyProfileform.DeptID) {
                            _this.diagnosisTagsData = totalArr[i].Diagnosises;
                        }
                    }

                    var arr = originData.DiagnosisTags;
                    var selecedDialog = [];
                    for (var i = 0; i < arr.length; i++) {
                        selecedDialog.push(arr[i].ID);
                    }
                    _this.modifyProfileform.DiagnosisTags = selecedDialog;
                    _this.modifyProfileform.Title = originData.Title;
                    _this.modifyProfileform.Position = originData.Position;
                    _this.modifyProfileform.WorkArea = originData.WorkArea;
                    _this.modifyProfileform.SearchArea = originData.SearchArea;
                    _this.modifyProfileform.WorkYear = originData.WorkYear;
                    _this.modifyProfileform.InstitutionID = originData.InstitutionID;
                    _this.modifyProfileVisible = true;
                });
            },
            getAuth() {
                return {'authorization': localStorage.getItem('accessToken')};
            },
            //科室变化
            deptOnChange(value) {
                var totalArr = this.DeptNameData;
                for (let i = 0, j = totalArr.length; i < j; i++) {
                    if (totalArr[i].ID === value) {
                        //设置病种options
                        this.diagnosisTagsData = totalArr[i].Diagnosises;
                        if (i !== 0) {
                            this.$message.warning('暂时只开通诊断评估，请选择诊断评估科室后再选择病种');
                        }
                    }
                }
            },
            closeModifyDailog() {
                this.clearFormData();
                this.modifyProfileVisible = false;
            },
            //更新个人档案信息
            modifyProfileSubmit() {
                let _this = this;
                var pushData = Object.assign({}, _this.modifyProfileform);
                var formDailogData = pushData.DiagnosisTags;
                pushData.DiagnosisTags.map(function (item) {
                    return {'ID': item};
                });
                for (var i = 0; i < pushData.DiagnosisTags.length; i++) {
                    var params = pushData.DiagnosisTags[i];
                    pushData.DiagnosisTags[i] = {'ID': params};
                }
                api.modifydrProfile(pushData).then(res => {
                    var code = res.data.Code;
                    if (code === 0) {
                        _this.init();
                        _this.modifyProfileVisible = false;
                        _this.$message.success('修改成功');
                    }
                });
                api.drProfile().then(res => {
                    this.$store.dispatch('addUserProfile', res.data);
                })
            },
            makeFormData(data) {
                let dialogIDs = [];
                for (let i = 0; i < data.length; i++) {
                    var obj = {
                        ID: data[i].ID
                    }
                    dialogIDs.push(obj);
                }
                return dialogIDs;

            },
            getuploadURL() {
                return api.uploadLogo;
            },
            handleAvatarScucess(res, file) {
                if (res.Code === 0) {
                    this.imageUrl = res.Msg;
                    this.modifyProfileform.Logo = res.Msg;
                    this.init();
                } else {
                    this.$message.error('上传头像失败，请重试');
                }
            },
            beforeAvatarUpload() {
            },
            printCard() {
//                let newWindow = window.open("_blank");   //打开新窗口
//                let codestr = document.getElementById("pdf-wrap").innerHTML;   //获取需要生成pdf页面的div代码
//                newWindow.document.write(codestr);   //向文档写入HTML表达式或者JavaScript代码
//                newWindow.document.close();     //关闭document的输出流, 显示选定的数据
//                newWindow.print();   //打印当前窗口
//                return true;
            }
        },
        mounted() {
        },
        created() {
            this.init();
        }
    };
</script>
<style lang="css" scoped>
    /*@import "../../assets/css/myServiceFile.css";*/
    .title {
        width: 80%;
        height: 583px;
        margin: 20px auto 0
    }

    .logoIMG {
        width: 80px;
        height: 80px;
        -webkit-border-radius: 40px;
        -moz-border-radius: 40px;
        border-radius: 40px;
    }

    .headTitle {
        font-size: 16px;
        font-weight: bold;
        color: #333333;
        margin-bottom: 14px
    }

    .mainContent {
        width: 1186px;
        height: 583px;
        padding: 0 28px
    }

    .person {
        width: 1130px;
        margin: 20px 0;
        font-size: 16px
    }

    .profession {
        width: 1130px;
        margin: 20px 0
    }

    .toolBox {
        width: 1130px;
        margin: 16px 0;
        display: flex;
        justify-content: flex-end
    }

    .logoArea {
        position: absolute;
        left: 0;
        top: 0;
        width: 152px;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center
    }

    .drDetails {
        position: absolute;
        left: 152px;
        top: 0;
        width: 136px;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center
    }

    .detailItem {
        margin-bottom: 26px;
    }

    .detailItem span {
    }

    .serviceInfo {
        position: absolute;
        left: 279px;
        top: 0;
        width: 584px;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: space-around
    }

    .serviceItem {
        margin-bottom: 20px
    }

    .servicePrice {
        font-size: 18px;
        color: #23BAFF
    }

    .order {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center
    }

    .orderNumber {
        font-size: 18px;
        color: #333333;
        margin-bottom: 20px
    }

    .totalOrder {
        position: absolute;
        left: 863px;
        top: 0;
        width: 264px;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center
    }

    .professionItem {
        margin-bottom: 16px;
        margin-left: 24px
    }

    .workContent {
        font-size: 16px;
        color: #999999
    }

    .workArea {
        margin-top: 20px
    }

    .tag {
        margin-right: 20px
    }

    .avatar-uploader {
    }

</style>
