<template>
    <div class="main">
        <div class="pageNavbar">
            <span style="color: black">当前位置&nbsp;&nbsp;>&nbsp;&nbsp;</span>
            <span style="cursor: none;color: black">活动记录&nbsp;&nbsp;>&nbsp;&nbsp;</span>
        </div>
    
        <div class="record-content">
    
            <div class="discuss-list">
                <div class="toolBox">
                    <div class="addWrap">
                        <el-button @click="addActiveRecord">新增活动记录</el-button>
                    </div>
                </div>
    
                <div class="center-content">
                    <el-card class="cardBox colorHeader " :body-style="{ padding: '0px'}">
                        <div class="tableWrap ">
                            <el-table :data="activeRecords" style="width: 100%">
                                <el-table-column type="index" width="160" style="">
                                </el-table-column>
    
                                <el-table-column prop="Name" label="活动名称" width="600">
                                </el-table-column>
    
                                <el-table-column label="操作">
                                    <template scope="scope">
                                        <!--<el-button size="small" type="danger" @click="assessmentDetail(scope.$index, scope.row)">评估结果</el-button>-->
                                        <el-button size="small" :plain="true" type="info" @click="viewActiveRecordDetails(scope.$index,scope.row)">查看详情</el-button>
                                        <el-button size="small" :plain="true" type="danger" @click="deleteActiveRecord(scope.$index, scope.row)">删除</el-button>
                                    </template>
                                </el-table-column>
    
                            </el-table>
                        </div>
                        <el-pagination layout="prev, pager, next" @current-change="pageChange" :page-size="pageSize" :total="recordsCount" style="float:right;"></el-pagination>
                    </el-card>
                </div>
            </div>
    
            <el-dialog :title="activeRecordDialogTitle" v-model="showDetailsFlag" size="small">
    
                <el-form label-width="90px" :model="activeRecordInfo" style="padding-left:10px;margin:0px">
                    <el-row :gutter="24">
                        <el-col :span="24" class="content">
                            <el-form-item label="标题:">
                                <el-input v-model="activeRecordInfo.Name" placeholder="请填写标题"></el-input>
                            </el-form-item>
                        </el-col>
                    </el-row>
    
                    <el-row :gutter="24">
                        <el-col :span="12" class="content">
                            <el-form-item label="学生分组:">
                                <el-select v-model="activeRecordInfo.GroupID" placeholder="请选择分组" style="width:100%">
                                    <el-option v-for="(item, index) in patientGroups" :key="item.groupID" :label=item.groupName :value=item.groupID>
                                    </el-option>
                                </el-select>
                            </el-form-item>
                        </el-col>
    
                        <el-col :span="12" class="content">
                            <el-form-item label="活动日期:">
                                <el-date-picker type="date" placeholder="选择日期" v-model="activeRecordInfo.ActiveDate" style="width:100%"></el-date-picker>
                            </el-form-item>
                        </el-col>
    
                    </el-row>
    
                    <el-row :gutter="24">
                        <el-col :span="24" class="content">
                            <el-form-item label="活动内容:">
                                <el-input v-model="activeRecordInfo.ActiveContent" type="textarea" placeholder="请填写"></el-input>
                            </el-form-item>
                        </el-col>
                    </el-row>
    
                    <el-row :gutter="24">
                        <el-col :span="24" class="content">
                            <el-form-item label="家长会内容:">
                                <el-input v-model="activeRecordInfo.MeetingContent" type="textarea" placeholder="请填写"></el-input>
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
    name: 'iepRecord',
    components: {
    },
    data() {
        return {
            showDetailsFlag: false,
            pageIndex: 1,
            recordsCount: 1,
            pageSize: 10,
            activeRecords: [],
            activeRecordInfo: {
                ID: '',
                Name: '',
                ActiveContent: '',// 活动内容
                ActiveDate: '',//活动日期
                MeetingContent: '',//家长会内容
                Suggestion: '',//家长建议
                GroupID: '',
            },
            activeRecordDialogTitle: '新增家长活动记录',
            patientGroups: [],//组（班级）
        }
    },
    methods: {
        initData() {
            this.activeRecordInfo = {
                ID: '',
                Name: '',
                ActiveContent: '',// 活动内容
                ActiveDate: '',//活动日期
                MeetingContent: '',//家长会内容
                Suggestion: '',//家长建议
                GroupID:'',
            };
            this.patientGroups = this.$store.state.mystudent.patientList;
            this.activeRecordInfo.ActiveDate = new Date();
        },
        pageChange(currentPage) {
            this.pageIndex = currentPage;
            this.requestParentActiveRecords();
        },
        viewActiveRecordDetails(index, row) {
            this.initData();
            this.activeRecordInfo = this.activeRecords[index];
            this.showDetailsFlag = true;
            this.activeRecordDialogTitle = '家长活动记录详情';
        },
        deleteActiveRecord(index, row) {
            let _this = this;
            _this.$confirm('确认删除该家长活动记录吗, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'


            }).then(() => {
                let params = { id: _this.activeRecords[index].ID };
                api.removeParentActiveRecord(params).then(res => {
                    if (res.Status) {
                        _this.$message({
                            type: 'success',
                            message: '删除成功!'
                        });
                    }
                    _this.requestParentActiveRecords();
                }).catch(err => {
                    _this.$message({
                        type: 'success',
                        message: '删除失败,请稍候再试！'
                    });
                });
            }).catch(() => {

            });

        },

        //显示家长活动记录dialog
        addActiveRecord() {
            this.showDetailsFlag = true;
            this.initData();
            this.activeRecordDialogTitle = '新增家长活动记录';
        },

        //获取家长活动记录列表
        requestParentActiveRecords() {
            let _this = this;
            let params = { PageIndex: _this.pageIndex, PageSize: _this.pageSize };
            api.getParentActiveRecordList(params).then(res => {
                _this.recordsCount = res.Total;
                _this.activeRecords = res.Records;
            }).catch(err => {
                _this.$message.error('获取家长活动记录列表失败！');
            });
        },

        //保存教案
        saveDiscussReport() {
            let _this = this;
            if (_this.activeRecordInfo.Name === "") {
                _this.$message.warning('请填写活动记录名称！');
                return;
            }
            if (_this.activeRecordInfo.GroupID === "") {
                _this
                return;
            }
            api.saveParentActiveRecord(_this.activeRecordInfo).then(res => {
                if (res.Status) {
                    _this.$message.success(res.Message);
                    _this.initData();
                    _this.requestParentActiveRecords();
                    _this.showDetailsFlag = false;
                    _this.$message.success('添加成功');
                }
            }).catch(err => {
                _this.$message.error('添加失败,请稍候重试！');
            });
        },
        cancel() {
            this.showDetailsFlag = false;
        }

    },
    created() {
        this.requestParentActiveRecords();
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

.record-content {
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