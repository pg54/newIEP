<template>
    <div class="main">

        <div class="pageNavbar">
            <span style="color: black">当前位置&nbsp;&nbsp;>&nbsp;&nbsp;</span>
            <span style="cursor: none;color: black">个案研讨&nbsp;&nbsp;>&nbsp;&nbsp;</span>
        </div>

        <div class="discuss-content">

            <div class="discuss-list">
                <div class="toolBox">
                    <div class="addWrap">
                        <el-button @click="addDiscussReport">新增个案</el-button>
                    </div>
                </div>

                <div class="center-content">
                    <el-card class="cardBox colorHeader " :body-style="{ padding: '0px'}">
                        <div class="tableWrap ">
                            <el-table :data="discussReports" style="width: 100%">
                                <el-table-column type="index" width="160" style="">
                                </el-table-column>

                                <el-table-column prop="Name" label="个案名称" width="600">
                                </el-table-column>

                                <el-table-column label="操作">
                                    <template scope="scope">
                                        <!--<el-button size="small" type="danger" @click="assessmentDetail(scope.$index, scope.row)">评估结果</el-button>-->
                                        <el-button size="small" :plain="true" type="info" @click="viewDiscussReportDetails(scope.$index,scope.row)">查看详情</el-button>
                                        <el-button size="small" :plain="true" type="danger" @click="deleteDiscussReport(scope.$index, scope.row)">删除</el-button>
                                    </template>
                                </el-table-column>

                            </el-table>
                        </div>
                        <el-pagination layout="prev, pager, next" @current-change="pageChange" :page-size="pageSize" :total="recordsCount" style="float:right;"></el-pagination>
                    </el-card>
                </div>
            </div>

            <el-dialog :title="discussDialogTitle" v-model="showDetailsFlag" size="small">

                <el-form label-width="110px" :model="discussReport" >
                    <el-row :gutter="24">
                        <el-col :span="24" class="content">
                            <el-form-item label="标题:">
                                <el-input v-model="discussReport.Name" placeholder="请填写标题"></el-input>
                            </el-form-item>
                        </el-col>
                    </el-row>

                    <el-row :gutter="24">
                        <el-col :span="24" class="content">
                            <el-form-item label="基本问题:">
                                <el-input
                                    type="textarea"
                                    autosize
                                    placeholder="请填写基本问题"
                                    v-model="discussReport.Problem">
                                </el-input>
                            </el-form-item>
                        </el-col>
                    </el-row>

                    <el-row :gutter="24">

                        <el-col :span="12" class="content">
                            <el-form-item label="措施:">
                                <el-input
                                    type="textarea"
                                    autosize
                                    placeholder="请填写措施"
                                    v-model="discussReport.Measure">
                                </el-input>
                            </el-form-item>
                        </el-col>

                        <el-col :span="12" class="content">
                            <el-form-item label="实施过程:">
                                <el-input
                                    type="textarea"
                                    autosize
                                    placeholder="请填写实施过程"
                                    v-model="discussReport.Process">
                                </el-input>
                            </el-form-item>
                        </el-col>

                    </el-row>

                    <el-row :gutter="24">

                        <el-col :span="12" class="content">

                            <el-form-item label="学生分组:">
                                <el-select v-model="currentGroup" placeholder="请选择分组" style="width:100%" @change="groupChange">
                                    <el-option v-for="(item, index) in patientGroups" :key="item.groupID" :label=item.groupName :value=item.groupID>
                                    </el-option>
                                </el-select>
                            </el-form-item>

                        </el-col>

                        <el-col :span="12" class="content">
                            <el-form-item label="学生:">
                                <el-select v-model="currentPatient" placeholder="请选择学生" style="width:100%">
                                    <el-option v-for="(item, index) in patients" :key="item.ID" :label=item.Name :value=item.ID>
                                    </el-option>
                                </el-select>
                            </el-form-item>
                        </el-col>
                    </el-row>

                    <el-row :gutter="24">

                        <el-col :span="12" class="content">
                            <el-form-item label="研讨日期:">
                                <el-date-picker type="date" placeholder="选择日期" v-model="discussReport.DiscussDate" style="width:100%"></el-date-picker>
                            </el-form-item>
                        </el-col>

                        <el-col :span="12" class="content">
                            <el-form-item label="记录者:">
                                <el-input v-model="discussReport.Recorder" placeholder="请填写记录者"></el-input>
                            </el-form-item>
                        </el-col>
                    </el-row>

                    <el-row :gutter="24">
                        <el-col :span="12" class="content">
                            <el-form-item label="效果与建议:">
                                <el-input
                                    type="textarea"
                                    autosize
                                    placeholder="请填写效果与建议"
                                    v-model="discussReport.Suggestion">
                                </el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="12" class="content">
                            <el-form-item label="家长反馈:">
                                <el-input
                                    type="textarea"
                                    autosize
                                    placeholder="请填写家长反馈"
                                    v-model="discussReport.FeedBack">
                                </el-input>
                            </el-form-item>
                        </el-col>
                    </el-row>

                    <el-row :gutter="24">
                        <el-col :span="12" class="content">
                            <el-form-item label="学生能力分析:">
                                <el-input
                                    type="textarea"
                                    autosize
                                    placeholder="请填写学生能力分析"
                                    v-model="discussReport.AbilityLevel">
                                </el-input>
                            </el-form-item>
                        </el-col>
                    </el-row>

                </el-form>

                <div style="float:right;margin-bottom:10px;margin-right:25px">
                    <el-button @click="cancel">返回</el-button>
                    <el-button type="primary" @click="saveDiscussReport">确认</el-button>
                </div>

            </el-dialog>

        </div>

    </div>
</template>
<script>
import api from '../../api/index.js';
export default {
    name: 'iepStudy',
    components: {
    },
    data() {
        return {
            showDetailsFlag: false,
            pageIndex: 1,
            recordsCount: 1,
            pageSize: 10,
            discussReports: [],
            discussReport: {
                ID: '',
                Name: '',
                StudentID: '',
                Measure: '',//措施
                FeedBack: '',// 家长反馈
                Recorder: '',//记录者
                DiscussDate: '',//研讨日期
                AbilityLevel: '',//学生能力分析
                Problem: '',//基本问题
                Process: '',//实施过程
                Suggestion: ''//效果与建议
            },
            discussDialogTitle: '新增个案',
            currentGroup: '',//当前操作患者组
            patientGroups: [],//患者组
            patients: [],//组下面的患者列表
            currentPatient: '',
        }
    },
    methods: {
        initData() {
            this.patients = [];
            this.currentGroup = '';
            this.currentPatient = '';
            this.patientGroups = this.$store.state.mystudent.patientList;
            this.discussReport = {
                ID: '',
                Name: '',
                StudentID: '',
                Measure: '',//措施
                FeedBack: '',// 家长反馈
                Recorder: '',//记录者
                DiscussDate: '',
                AbilityLevel: '',//学生能力分析
                Problem: '',//基本问题
                Process: '',//实施过程
                Suggestion: ''//效果与建议
            };
            this.discussReport.DiscussDate = new Date();
        },
        pageChange(currentPage) {
            this.pageIndex = currentPage;
            this.requestDiscussReports();
        },
        groupChange(id) {
            let _this = this;
            for (let i = 0; i < _this.patientGroups.length; i++) {
                if (_this.patientGroups[i].groupID === id) {
                    _this.patients = _this.patientGroups[i].groupPatients;
                    break;
                }
            }
        },
        viewDiscussReportDetails(index, row) {
            this.initData();
            this.discussReport = this.discussReports[index];
            this.showDetailsFlag = true;
            this.discussDialogTitle = '个案详情';
            let isFind = false;
            // 寻找学生所属组
            for (let i = 0; i < this.patientGroups.length; i++) {
                for (let j = 0; j < this.patientGroups[i].groupPatients.length; j++) {
                    if (this.patientGroups[i].groupPatients[j].ID === this.discussReport.StudentID) {
                        this.currentGroup = this.patientGroups[i].groupID;
                        this.patients = this.patientGroups[i].groupPatients;
                        isFind = true;
                        break;
                    }

                }
                if (isFind) {
                    break;
                }

            }
            this.currentPatient = this.discussReports[index].StudentID;
        },
        deleteDiscussReport(index, row) {
            let _this = this;
            _this.$confirm('确认删除该个案吗, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                let params = { id: _this.discussReports[index].ID };
                api.removeDiscussReport(params).then(res => {

                    if (res.Status) {
                        _this.$message({
                            type: 'success',
                            message: '删除成功!'
                        });
                    }
                    _this.requestDiscussReports();
                }).catch(err => {
                    _this.$message({
                        type: 'success',
                        message: '删除失败,请稍候再试！'
                    });
                });
            }).catch(() => {

            });

        },

        //显示教案dialog
        addDiscussReport() {
            this.showDetailsFlag = true;
            this.initData();
            this.discussDialogTitle = '新增个案';
            if (this.patientGroups.length > 0) {
                this.currentGroup = this.patientGroups[0].groupID;
                if (this.patientGroups[0].groupPatients.length > 0) {
                    this.patients = this.patientGroups[0].groupPatients;
                }
            }
        },

        //获取个案列表
        requestDiscussReports() {
            let _this = this;
            let params = { PageIndex: _this.pageIndex, PageSize: _this.pageSize };
            api.getDiscussReportList(params).then(res => {
                _this.recordsCount = res.Total;
                _this.discussReports = res.Records;
            }).catch(err => {
                _this.$message.error('获取个案列表失败！');
            });
        },

        //保存个案研讨报告
        saveDiscussReport() {
            let _this = this;
            if (_this.discussReport.Name === "") {
                _this.$message.warning('请填写个案名称！');
                return;
            }
            if (_this.currentPatient === '') {
                _this.$message.warning('请选择患者！');
                return;
            }
            _this.discussReport.StudentID = _this.currentPatient;
            api.saveDiscussReport(_this.discussReport).then(res => {
                if (res.Status) {
                    _this.$message.success(res.Message);
                    _this.initData();
                    _this.requestDiscussReports();
                    _this.showDetailsFlag = false;
                }
            }).catch(err => {
                _this.$message.success('添加失败,请稍候重试！');
            });
        },
        cancel() {
            this.showDetailsFlag = false;
        }

    },
    created() {
        this.requestDiscussReports();
    }
};
</script>


<style scoped>
.main {
    width: 100%;
    height: 626px;
    position: absolute;
    left: 0;
    top: 0;
}

.discuss-content {
    width: 100%;
    height: 583px;
    position: absolute;
    left: 0;
    top: 43px;
    overflow-y: scroll;
}

.center-content {
    width: 1080px;
    height: 571px;
    margin: 0 auto;
}

.colorHeader {
    border-top: 4px solid RGBA(49, 187, 252, 1.00);
    height: 525px;
}

.cardBox {
    width: 100%;
    height: 525px;
}

.tableWrap {
    width: 100%;
    height: 480px;
}

.toolBox {
    float: right;
    margin-right: 55px;
    margin-top: 10px;
    margin-bottom: 10px;
}




.pageNavbar span {
    font-size: 16px;
    cursor: pointer;
    line-height: 42px;
}

.pageNavbar span:hover {
    color: rgb(66, 171, 216);
}

.pageNavbar {
    position: absolute;
    left: -94px;
    top: 0;
    width: 1280px;
    height: 42px;
    border-bottom: 1px solid #cccccc;
}
</style>
