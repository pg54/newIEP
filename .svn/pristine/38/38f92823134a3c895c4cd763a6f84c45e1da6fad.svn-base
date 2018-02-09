<template>
    <div class="main">

        <div class="pageNavbar">
            <span style="color: black">当前位置&nbsp;&nbsp;>&nbsp;&nbsp;</span>
            <span style="cursor: none;color: black">教案库&nbsp;&nbsp;>&nbsp;&nbsp;</span>
        </div>

        <div class="lesson-content">

            <div class="lesson-list">
                <div class="toolBox">
                    <div class="addWrap">
                        <el-button @click="addLessonPlan">新增教案</el-button>
                    </div>
                </div>

                <div class="center-content">
                    <el-card class="cardBox colorHeader " :body-style="{ padding: '0px'}">
                        <div class="tableWrap ">
                            <el-table :data="lessonPlans" style="width: 100%">
                                <el-table-column type="index" width="160" style="">
                                </el-table-column>

                                <el-table-column prop="Name" label="教案名称" width="600">
                                </el-table-column>

                                <!--<el-table-column prop="Name" label="创建时间" width="140">
                                                                                                                                                                                    </el-table-column>-->

                                <el-table-column label="操作">
                                    <template scope="scope">
                                        <!--<el-button size="small" type="danger" @click="assessmentDetail(scope.$index, scope.row)">评估结果</el-button>-->
                                        <el-button size="small" :plain="true" type="info" @click="viewLessonPlanDetails(scope.$index,scope.row)">查看详情</el-button>
                                        <el-button size="small" :plain="true" type="danger" @click="deleteLessonPlan(scope.$index, scope.row)">删除</el-button>
                                    </template>
                                </el-table-column>

                            </el-table>
                        </div>
                        <el-pagination layout="prev, pager, next" @current-change="pageChange" :page-size="pageSize" :total="recordsCount" style="float:right;"></el-pagination>
                    </el-card>
                </div>
            </div>

            <el-dialog :title="lessonDialogTitle" v-model="showDetailsFlag" size="small">

                <el-form label-width="140px" :model="lessonPlan">
                    <el-row :gutter="24">
                        <el-col :span="24" class="content">
                            <el-form-item label="标题:">
                                <el-input v-model="lessonPlan.Name" placeholder="请填写标题"></el-input>
                            </el-form-item>
                        </el-col>
                    </el-row>

                    <el-row :gutter="24">
                        <el-col :span="24" class="content">
                            <el-form-item label="课程领域/单元主题:">
                                <el-input v-model="lessonPlan.LearningContent" placeholder="请填写"></el-input>
                            </el-form-item>
                        </el-col>
                    </el-row>

                    <el-row :gutter="24">

                        <el-col :span="12" class="content">
                            <el-form-item label="主教:">
                                <el-input
                                    type="textarea"
                                    autosize
                                    placeholder="请填写主教内容"
                                    v-model="lessonPlan.MainContent">
                                </el-input>
                            </el-form-item>
                        </el-col>

                        <el-col :span="12" class="content">
                            <el-form-item label="辅教:">
                                <el-input
                                    type="textarea"
                                    autosize
                                    placeholder="请填写辅教内容"
                                    v-model="lessonPlan.SecondaryContent">
                                </el-input>
                            </el-form-item>
                        </el-col>

                    </el-row>

                    <el-row :gutter="24">
                        <el-col :span="12" class="content">
                            <el-form-item label="授课日期:">
                                <el-date-picker type="date" placeholder="选择日期" v-model="lessonPlan.TeachingDate" style="width:100%"></el-date-picker>
                            </el-form-item>
                        </el-col>
                        <el-col :span="12" class="content">
                            <el-form-item label="授课形式">
                                <el-select v-model="lessonPlan.TeachingType" placeholder="请选择授课形式" style="width:100%">
                                    <el-option v-for="(item, index) in TeachingTypes" :key="item.ID" :label=item.Value :value=item.ID>
                                    </el-option>
                                </el-select>
                            </el-form-item>
                        </el-col>
                    </el-row>

                    <el-row :gutter="24">
                        <el-col :span="12" class="content">
                            <el-form-item label="教学目标:">
                                <el-input
                                    type="textarea"
                                    autosize
                                    placeholder="请填写教学目标"
                                    v-model="lessonPlan.TeachingTarget">
                                </el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="12" class="content">
                            <el-form-item label="教学准备:">
                                <el-input
                                    type="textarea"
                                    autosize
                                    placeholder="请填写教学准备"
                                    v-model="lessonPlan.Preparation">
                                </el-input>
                            </el-form-item>
                        </el-col>
                    </el-row>

                    <el-row :gutter="24">
                        <el-col :span="12" class="content">
                            <el-form-item label="教学重点:">
                                <el-input
                                    type="textarea"
                                    autosize
                                    placeholder="请填写教学重点"
                                    v-model="lessonPlan.Points">
                                </el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="12" class="content">
                            <el-form-item label="教学难点:">
                                <el-input
                                    type="textarea"
                                    autosize
                                    placeholder="请填写教学难点"
                                    v-model="lessonPlan.Difficulties">
                                </el-input>
                            </el-form-item>
                        </el-col>
                    </el-row>

                    <el-row :gutter="24">
                        <el-col :span="12" class="content">
                            <el-form-item label="教学过程:">
                                <el-input
                                    type="textarea"
                                    autosize
                                    placeholder="请填写教学过程"
                                    v-model="lessonPlan.Process">
                                </el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="12" class="content">
                            <el-form-item label="学生能力分析:">
                                <el-input
                                    type="textarea"
                                    autosize
                                    placeholder="请填写学生能力分析"
                                    v-model="lessonPlan.AbilityLevel">
                                </el-input>
                            </el-form-item>
                        </el-col>
                    </el-row>

                    <el-row :gutter="24">
                        <el-col :span="12" class="content">
                            <el-form-item label="教学反思:">
                                <el-input
                                    type="textarea"
                                    autosize
                                    placeholder="请填写教学反思"
                                    v-model="lessonPlan.Rethink">
                                </el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="12" class="content">
                            <el-form-item label="教学评鉴:">
                                <el-input
                                    type="textarea"
                                    autosize
                                    placeholder="请填写教学评鉴"
                                    v-model="lessonPlan.Comments">
                                </el-input>
                            </el-form-item>
                        </el-col>
                    </el-row>
                </el-form>

                <div style="float:right;margin-bottom:10px;margin-right:25px">
                    <el-button @click="cancel">返回</el-button>
                    <el-button type="primary" @click="saveLessonPlan">确认</el-button>
                </div>

            </el-dialog>

        </div>

    </div>
</template>
<script>
import api from '../../api/index.js';
export default {
    name: 'iepLibrary',
    components: {
    },
    data() {
        return {
            showDetailsFlag: false,
            pageIndex: 1,
            recordsCount: 1,
            pageSize: 10,
            lessonPlans: [],
            lessonPlan: {
                ID: '',
                Name: '',
                LearningContent: '',//课程领域/单元主题
                MainContent: '',
                SecondaryContent: '',
                TeachingDate: '',
                TeachingType: 1,
                AbilityLevel: '',//学生能力分析
                TeachingTarget: '',
                Preparation: '',
                Points: '',
                Difficulties: '',
                Process: '',
                Rethink: '',
                Comments: ''
            },
            TeachingTypes: [{ ID: 1, Value: '集体课' }, { ID: 2, Value: '小组课' }, { ID: 3, Value: '个别课' }],
            lessonDialogTitle: '新增教案',
        }
    },
    methods: {
        initLessonPlan() {
            this.lessonPlan = {
                ID: '',
                Name: '',
                LearningContent: '',//课程领域/单元主题
                MainContent: '',
                SecondaryContent: '',
                TeachingDate: '',
                TeachingType: 1,
                AbilityLevel: '',//学生能力分析
                TeachingTarget: '',
                Preparation: '',
                Points: '',
                Difficulties: '',
                Process: '',
                Rethink: '',
                Comments: ''
            };
            this.lessonPlan.TeachingDate = new Date();
        },

        pageChange(currentPage) {
            this.pageIndex = currentPage;
            this.requestLessonPlans();
        },

        viewLessonPlanDetails(index, row) {
            this.initLessonPlan();
            this.lessonPlan = this.lessonPlans[index];
            this.showDetailsFlag = true;
            this.lessonDialogTitle = '教案详情';
        },

        deleteLessonPlan(index, row) {
            let _this = this;
            _this.$confirm('确认删除该教案吗, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                let params = { id: _this.lessonPlans[index].ID };
                api.removeLessonPlan(params).then(res => {
                    if (res.Status) {
                        _this.$message({
                            type: 'success',
                            message: '删除成功!'
                        });
                    }
                    _this.requestLessonPlans();
                }).catch(err => {
                    _this.$message({
                        type: 'error',
                        message: '删除失败,请稍候再试!'
                    });
                });
            }).catch(() => {
            });
        },

        //显示教案dialog
        addLessonPlan() {
            this.showDetailsFlag = true;
            this.initLessonPlan();
            this.lessonDialogTitle = '新增教案';
        },

        //获取教案列表
        requestLessonPlans() {
            let _this = this;
            let params = { PageIndex: _this.pageIndex, PageSize: _this.pageSize };
            api.getLessonPlanList(params).then(res => {
                _this.recordsCount = res.Total;
                _this.lessonPlans = res.Records;
            }).catch(err => {
                _this.$message.error('获取教案信息失败！');
            });
        },

        //保存教案
        saveLessonPlan() {
            let _this = this;
            if (_this.lessonPlan.Name === "") {
                _this.$message.warning('请填写教案名称！');
                return;
            }
            api.saveLessonPlan(_this.lessonPlan).then(res => {
                if (res.Status) {
                    _this.$message.success(res.Message);
                    _this.initLessonPlan();
                    _this.requestLessonPlans();
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
        this.requestLessonPlans();
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

.lesson-content {
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
