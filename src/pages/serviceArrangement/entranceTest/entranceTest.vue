<template>
    <!-- 入学评测 -->

    <div class="tab-content testManager">

        <div class="center-content" v-if=" 'entranceTest' === lastPath">
            <div class="toolBox">
                <el-button @click="addEntrancePaper">
                    新建评估表
                </el-button>
            </div>
            <el-card class="cardBox colorHeader" :body-style="{ padding: '0px'}">
                <div class="tableWrap" style="height: 480px">
                    <el-table :data="entranceListData" style="width: 100%">
                        <el-table-column type="index" width="70">
                        </el-table-column>

                        <el-table-column prop="Name" label="名称" width="160">
                        </el-table-column>

                        <el-table-column prop="PackageName" label="课程包名称">
                        </el-table-column>

                        <el-table-column prop="CreatedOn" label="创建时间">
                        </el-table-column>

                        <el-table-column label="操作">
                            <template scope="scope">
                                <el-button size="mini" :plain="true" type="info" @click="startNewEnterance(scope.$index, scope.row)">开始新评测</el-button>
                                <el-button size="mini" :plain="true" type="warning" @click="checkEntrancePaticent(scope.$index, scope.row)">已评测患者</el-button>
                                <el-button size="mini" :plain="true" type="danger" @click="deleteExam(scope.$index, scope.row, true)">删除</el-button>
                            </template>
                        </el-table-column>

                    </el-table>
                </div>

                <el-pagination layout="prev, pager, next" @current-change="testPaperListChange" :page-size="10" :total="entrancePaperTotal" style="float:right;"></el-pagination>
            </el-card>
        </div>

        <div v-else>
            <router-view></router-view>
        </div>


        <el-dialog title="入学评测" :visible="addEntranceTestVisible" :modal-append-to-body="false" :close-on-click-modal="false" @close="entrancePaperCancel">
            <div class="addTestFormWrap">
                <el-form ref="addTestform" :model="entranceFormData" label-width="100px">
                    <el-form-item label="名称">
                        <el-input v-model="entranceFormData.Name" type="mini" style="width: 100%"></el-input>
                    </el-form-item>
                    <!-- <el-form-item label="课程包">
                        <el-select v-model="entranceFormData.PaperPackageID" placeholder="请选择课程包" style="width: 100%">
                            <el-option v-for="o in entrancePackageData" :label="o.Name" :value="o.ID"></el-option>
                        </el-select>
                    </el-form-item> -->
                </el-form>
            </div>
            <!-- <div class="addTestsubmit">
                <el-button @click.native="submitEntrancePaper">确认</el-button>
            </div> -->

            <div slot="footer" class="dialog-footer">
                <el-button @click.native="entrancePaperCancel">返回</el-button>
                <el-button @click.native="submitEntrancePaper" type="primary">确认</el-button>
            </div>
        </el-dialog>


        <el-dialog title="入学评测选择患者" :visible="choseToEntranceTestVisible" :modal-append-to-body="false" :close-on-click-modal="false"
            @close="resetChosePatientTest" :show-close="false">

            <el-select v-model="selectedPacientIDS" placeholder="请选择小组" @change="filterPacient">
                <el-option v-for="(item, index) in selectedGroup" :key="item.groupName" :label=item.groupName :value=index>
                </el-option>
            </el-select>

            <el-select v-model="choseToTestPatient" placeholder="请选择患者">
                <el-option v-for="(item, index) in selectedGroupPacientes" :key="item.Name" :label=item.Name :value=item.ID>
                </el-option>
            </el-select>

            <div slot="footer" class="dialog-footer">
                <el-button @click.native="choseToEntranceTestVisible = false">返回</el-button>
                <el-button type="primary" class="testPaper" @click="choseToEntranceTestSubmit('yy', false)">评测开始</el-button>
            </div>
        </el-dialog>



        <el-dialog title="已评测患者" :visible="pacientListVisible" :modal-append-to-body="false" :close-on-click-modal="false">

            <el-card class="newCardBox colorHeader" :body-style="{ padding: '0px'}">
                <div class="tableWrap">
                    <el-table :data="entranceedPatientListData" style="width: 100%">
                        <el-table-column type="index" width="80">
                        </el-table-column>

                        <el-table-column prop="ExamName" label="评测名称">
                        </el-table-column>

                        <el-table-column prop="Name" label="姓名">
                        </el-table-column>

                        <el-table-column label="操作" width="300">
                            <template scope="scope">
                                <el-button v-if="!scope.row.Status" size="mini" :plain="true" type="info" @click="checkPacientTestDetail(scope.$index, scope.row, false, true)">继续评测</el-button>
                                <el-button v-if="!scope.row.Status" size="mini" :plain="true" type="info" @click="toDeleteExamPatient(scope.$index, scope.row, true)">删除</el-button>
                                <el-button v-if="scope.row.Status" size="mini" :plain="true" type="info" @click="checkPacientTestDetail(scope.$index, scope.row, true, true)">分析表</el-button>
                                <el-button v-if="scope.row.Status" size="mini" :plain="true" type="info" @click="checkPacientTestReport(scope.$index, scope.row, true)">评估报告</el-button>
                            </template>
                        </el-table-column>
                    </el-table>

                </div>
                <el-pagination layout="prev, pager, next" @current-change="entrancedPatientListNextPage" :page-size="10" :total="entranceedPatientListTotal"
                    style="float:right;"></el-pagination>
            </el-card>


        </el-dialog>


    </div>

</template>
<script>
    import api from '../../../api/index.js';
    import TestResult from '../../../components/resultPaper.vue';
    export default {
        name: 'entranceTest',
        computed: {
            lastPath: function () {
                let pathStr = this.$route.path
                let pathArr = pathStr.split('/')
                pathArr.splice(0, 1)
                let len = pathArr.length
                return pathArr[len - 1]
            },
        },
        data() {
            return {
                entrancePackageData: [],
                entranceListData: [], //入学评测列表数据源
                entrancePaperTotal: 1,
                entrancePaperCurrentPage: 1,

                choseToTestVisible: false,
                choseCPEPvisible: false, //CPEP

                addEntranceTestVisible: false, //新增入学评测
                entranceFormData: {
                    Name: '',
                    PaperPackageID: ''
                },

                choseToEntranceTestVisible: false, //选择患者
                selectedPacientIDS: '',
                selectedGroup: this.$store.state.mystudent.patientList, // 患者小组数组
                selectedGroupPacientes: [], // 小组中患者数组
                choseToTestPatient: '',

                pacientListVisible: false, //已评测患者列表
                entranceedPatientListData: [],
                entranceedPatientListTotal: 1,
                entrancedPatientCurrentPage: 1,
            }
        },
        components: {
            TestResult
        },
        methods: {
            addEntrancePaper() {
                this.addEntranceTestVisible = true;
                api.getEntrancePackage().then(res => {
                    if (res.statusText === 'OK') {
                        this.entrancePackageData = res.data.List;
                    }
                })
            },
            startNewEnterance(index, row) {
                this.paperPackageID = row.PaperPackageID;
                this.testID = row.ID;
                this.choseToEntranceTestVisible = true;
            },
            checkEntrancePaticent(index, row) {
                this.pacientListVisible = true;
                this.examID = row.ID;
                this.requestEntrancePaticent(1);
            },
            deleteExam(index, row, isEntrance) {
                this.examID = row.ID;
                var params = {
                    ID: this.examID
                };
                api.deleteExam(params).then(res => {
                    if (res.Code === 3) {
                        this.consfirmDeleteExamMsg = res.Msg;
                        this.$confirm('关联数据会被删除, 是否继续?', '提示', {
                            confirmButtonText: '确定',
                            cancelButtonText: '取消',
                            type: 'warning'
                        }).then(() => {
                            this.confirmDeleteExam();
                        });
                    } else if (res.Code === 0) {
                        this.$message.warning('删除成功');
                        if (isEntrance) {
                            this.getentranceList(this.entrancePaperCurrentPage);
                        } else {
                            this.getTestList(this.testedPatientCurrentPage);
                        }

                    } else if (res.Code === 1) {
                        this.$message.warning('指定评估不存在');
                    } else if (res.Code === 2) {
                        this.$message.warning('指定评估不属于当前医生');
                    }
                });
            },
            //第一页
            requestEntrancePaticent(pageIndex) {
                let params = {
                    ExamID: this.examID,
                    PageIndex: pageIndex,
                    PageSize: 10,
                    PackageType: '2'
                };
                api.requestTestMembers(params).then(res => {
                    this.entranceedPatientListData = res.Records;
                    this.entranceedPatientListTotal = res.Total;
                });
            },
            testPaperListChange(currentPage) {
                this.entrancePaperCurrentPage = currentPage;
                this.requestEntrancePaticent(currentPage);
            },
            //继续评测页面
            checkPacientTestDetail(index, row, isComplete, isEntrance) {
                this.$store.dispatch('setTestPaticentID', row.PatientAgentID);
                this.$store.dispatch('setTESTID', row.ID);
                this.$store.dispatch('setTESTISCOMPLETE', isComplete);
                if (isEntrance) {
                    this.pacientListVisible = false;
                    this.$router.push({
                        path: '/serviceTool/entranceTest/resultPaper'
                    });
                } else {
                    // this.testStatuses = [false, false, false, true, false];
                }
            },
            checkPacientTestReport(index, row, isEntrance) {
                this.$store.dispatch('setTestPaticentID', row.PatientAgentID);
                this.$store.dispatch('setTESTID', row.ID);
                if (isEntrance) {
                    this.pacientListVisible = false;
                    this.$router.push({
                        path: '/serviceTool/entranceTest/reportPaper'
                    });
                } else {
                    
                }

            },
            entrancedPatientListNextPage(currentPage) {
                this.entrancedPatientCurrentPage = currentPage;
                this.requestEntrancePaticent(this.entrancedPatientCurrentPage);
            },
            toDeleteExamPatient(index, row, isEntrance) {
                this.examPatientID = row.ID
                let params = {
                    ID: this.examPatientID
                };
                api.deleteExamPatient(params).then(res => {
                    if (res.Code === 3) {
                        this.consfirmDeleteExamMsg = res.Msg;
                        this.$confirm('关联数据会被删除, 是否继续?', '提示', {
                            confirmButtonText: '确定',
                            cancelButtonText: '取消',
                            type: 'warning'
                        }).then(() => {
                            this.confirmDeleteExamPatient(isEntrance);
                        });
                    } else if (res.Code === 0) {
                        this.$message.success('删除成功');
                        if (isEntrance) {
                            this.requestEntrancePaticent(this.entrancedPatientCurrentPage);
                        } else {
                            this.requestTestPaticent(this.testedPatientCurrentPage);
                        }

                    } else if (res.Code === 1) {
                        this.$message.warning('指定评估不存在');
                    } else if (res.Code === 2) {
                        this.$message.warning('指定评估不属于当前医生');
                    }
                });
            },
            getentranceList(pageIndex) {
                let params = {
                    PageIndex: pageIndex,
                    PageSize: 10,
                    PackageType: '2'
                };
                api.requestTestList(params).then(res => {
                    this.entranceListData = res.Records;
                    this.entrancePaperTotal = res.Total;
                });
            },
            submitEntrancePaper() {
                this.entranceFormData.PaperPackageID = this.entrancePackageData[0].ID
                let params = this.entranceFormData;
                api.addTestPaper(params).then(res => {
                    if (res.Code === 0) {
                        this.$message.success('成功');
                        this.addEntranceTestVisible = false;
                        this.getentranceList(this.entrancePaperCurrentPage);
                    } else {
                        this.$message.warning(res.Msg);
                    }
                });
            },
            entrancePaperCancel() {
                this.addEntranceTestVisible = false;
                this.entranceFormData = {
                    Name: '',
                    PaperPackageID: ''
                };
            },
            resetChosePatientTest() {
                this.selectedPacientIDS = '';
                this.choseToTestPatient = '';
            },
            filterPacient(val) {
                if (this.choseToEntranceTestVisible) { //bug,两个选择病人的callback，我用choseToTestVisible区分
                    console.log('is here');
                    this.selectedGroupPacientes = this.selectedGroup[val].groupPatients;
                }
            },
            choseToEntranceTestSubmit(title, isComplete) {
                let params = {
                    ExamID: this.testID,
                    PatientAgentID: this.choseToTestPatient
                };
                api.chosePatientToTest(params).then(res => {
                    if (res.Code === 0) {
                        this.$store.dispatch('setTestPaticentID', row.PatientAgentID);
                        this.$store.dispatch('setTESTID', row.ID);
                        this.$store.dispatch('setTESTISCOMPLETE', isComplete);
                        this.choseToEntranceTestVisible = false;
                        this.$router.push({
                            path: '/serviceTool/entranceTest/resultPaper'
                        });

                    } else {
                        this.$message.warning('网络异常');
                    }
                });
            },
            sendToPacientSubmit() {
                var params = {
                    PaperID: this.paperID,
                    Patients: [this.pacientsIDS]
                };
                api.sendPaperToPatient(params).then(res => {
                    let code = res.Code;
                    switch (code) {
                        case 0:
                            this.$message.success('发送成功');
                            this.requestInitData();
                            break;
                        case 1:
                            this.$message.warning('指定的问卷不存在');
                            break;
                    }
                    this.sendToPaticentVisible = false;
                });
            },
        },
        created() {
            this.getentranceList(1); // 入学评测
        }
    };

</script>
<style scoped>


</style>
