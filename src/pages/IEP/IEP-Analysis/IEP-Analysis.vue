<template>
    <div class="mainIEP">
        <div class="registerBox">
            <div class="center-content">
                <div v-if="'iepAnalysis' === lastPath">
                    <div class="toolBox">
                        <el-button @click="addTestPaper">
                            <!-- <Icon type="plus-round"></Icon> -->
                            新建评估表
                        </el-button>
                    </div>
                    <el-card class="cardBox colorHeader" :body-style="{ padding: '0px'}">
                        <div class="tableWrap" style="height: 480px">
                            <el-table :data="testPaperListData" style="width: 100%">
                                <el-table-column type="index" width="70">
                                </el-table-column>

                                <el-table-column prop="Name" label="评测表名称" width="160">
                                </el-table-column>

                                <el-table-column prop="PackageName" label="课程包名称">
                                </el-table-column>

                                <el-table-column prop="CreatedOn" label="创建时间">
                                </el-table-column>

                                <el-table-column label="操作">
                                    <template scope="scope">
                                        <el-button size="mini" :plain="true" type="info" @click="startTest(scope.$index, scope.row)">开始新评测</el-button>
                                        <el-button size="mini" :plain="true" type="warning" @click="checkTestPaticent(scope.$index, scope.row)">已评测患者</el-button>
                                        <el-button size="mini" :plain="true" type="danger" @click="deleteExam(scope.$index, scope.row)">删除</el-button>
                                    </template>
                                </el-table-column>
                            </el-table>
                        </div>
                        <el-pagination layout="prev, pager, next" @current-change="testPaperListChange" :page-size="10" :total="testPaperTotal" style="float:right;"></el-pagination>
                    </el-card>
                </div>

                <div v-else>
                    <router-view></router-view>
                </div>


            </div>
        </div>



        <el-dialog title="已评测患者" :visible="pacientListVisible" :modal-append-to-body="false" :close-on-click-modal="false">
            <el-card class="newCardBox colorHeader" :body-style="{ padding: '0px'}">
                <div class="tableWrap">
                    <el-table :data="testedPatientListData" style="width: 100%">
                        <el-table-column type="index" width="80">
                        </el-table-column>

                        <el-table-column prop="ExamName" label="评测名称">
                        </el-table-column>

                        <el-table-column prop="Name" label="姓名">
                        </el-table-column>

                        <el-table-column label="操作" width="300">
                            <template scope="scope">
                                <el-button v-if="!scope.row.Status" size="mini" :plain="true" type="info" @click="checkPacientTestDetail(scope.$index, scope.row, false)">继续评测</el-button>
                                <el-button v-if="!scope.row.Status" size="mini" :plain="true" type="info" @click="toDeleteExamPatient(scope.$index, scope.row)">删除</el-button>
                                <el-button v-if="scope.row.Status" size="mini" :plain="true" type="info" @click="checkPacientTestDetail(scope.$index, scope.row, true)">分析表</el-button>
                                <el-button v-if="scope.row.Status" size="mini" :plain="true" type="info" @click="checkPacientTestReport(scope.$index, scope.row)">评估报告</el-button>
                            </template>
                        </el-table-column>

                    </el-table>
                </div>

                <el-pagination layout="prev, pager, next" @current-change="testedPatientListNextPage" :page-size="10" :total="testedPatientListTotal"
                    style="float:right;"></el-pagination>

            </el-card>
        </el-dialog>


        <el-dialog title="新建评估表" :visible="addTestPaperVisible" :modal-append-to-body="false" :close-on-click-modal="false" @close="testPaperCancel" :show-close="false">
            <div class="addTestFormWrap">
                <el-form ref="addTestform" :model="testFormData" label-width="120px">
                    <el-form-item label="名称">
                        <el-input v-model="testFormData.Name" type="mini" style="width: 100%"></el-input>
                    </el-form-item>

                    <!--<el-form-item label="添加课程:">-->
                        <!--<div class='onc-box'>-->
                            <!--<el-checkbox-group v-model="testFormData.CourseIds">-->
                                <!--<el-checkbox v-for="item in courseData" :label="item.ID" class="courseCheckBox">{{ item.Name }}</el-checkbox>-->
                            <!--</el-checkbox-group>-->
                        <!--</div>-->
                    <!--</el-form-item>-->

                    <el-form-item label="添加课程" prop='CourseIds'>
                        <div class="block">
                            <el-cascader
                                style='width: 100%'
                                change-on-select
                                size="medium"
                                expand-trigger="hover"
                                :options="courseData"
                                v-model="testFormData.CourseIds"
                                @change="handleChange">
                            </el-cascader>
                        </div>
                    </el-form-item>

                    <el-form-item label="已选中课程" v-show="multipleCourses.length">
                        <el-tag class="tag" v-for="(item, index) in multipleCourses" :key="index" type="primary">
                            {{item}}
                        </el-tag>
                    </el-form-item>

                </el-form>
            </div>

            <div slot="footer" class="dialog-footer">
                <el-button @click.native="addTestPaperVisible = false">返回</el-button>
                <el-button type="primary" @click.native="submitTestPaper">确认</el-button>
            </div>
        </el-dialog>

        <el-dialog title="选择患者" v-model="choseToTestVisible" :modal-append-to-body="false" :close-on-click-modal="false" @close="resetChosePatientTest"
            :show-close="false">

            <el-select v-model="selectedPacientIDS" placeholder="请选择小组" @change="filterPacient">
                <el-option v-for="(item, index) in selectedGroup" :key="item.groupName" :label=item.groupName :value=index>
                </el-option>
            </el-select>

            <el-select v-model="choseToTestPatient" placeholder="请选择患者">
                <el-option v-for="(item, index) in selectedGroupPacientes" :key="item.Name" :label=item.Name :value=item.ID>
                </el-option>
            </el-select>

            <div slot="footer" class="dialog-footer">
                <el-button @click.native="choseToTestVisible = false">返回</el-button>
                <el-button type="primary" class="testPaper" @click="choseToTestSubmit('yy', false)">评测开始</el-button>
            </div>
        </el-dialog>


    </div>
</template>
<script>
    import api from '../../../api/index';
    import TestResult from '../../../components/resultPaper.vue';
    import TestReport from '../../../components/reportPaper.vue';
    export default {
        name: 'iepAnalysis',
        computed: {
            lastPath: function () {
                let pathStr = this.$route.path
                let pathArr = pathStr.split('/')
                pathArr.splice(0, 1)
                let len = pathArr.length
                return pathArr[len - 1]
            },
            selectedGroup: function () { // 患者小组数组
                return this.$store.state.mystudent.patientList
            }
        },
        components: {
            TestResult,
            TestReport
        },
        data() {
            return {
                // 评估表列表
                testPaperListData: [], // 评测管理
                testPaperTotal: 1,
                testPaperCurrentPage: 1,
                examID: '',  //删除是选中ID
                // 弹窗-新增评估表
                addTestPaperVisible: false,
                testFormData: {
                    Name: '',
                    CourseIds: []
                },
                courseData: [],
                multipleCourses: [],
                // testPaperData: [],

                // 弹窗-选择患者开始评测
                choseToTestVisible: false,
                choseToTestPatient: '',
                selectedPacientIDS: '',
                selectedGroupPacientes: [], // 小组中患者数组

                // 弹窗-已评测患者列表
                pacientListVisible: false,
                testedPatientListData: [],
                testedPatientListTotal: 1,
                testedPatientCurrentPage: 1,
                examPatientID: '',   //删除是记录选中ID

                // resultPaticentID: '', //试卷的props对象
                // resultTestID: '',
                // completeTest: false,

            }
        },
        methods: {
            //首次加载
            requestInitData() {
                this.getTestList(1); // 评测管理
                this.getCheckBoxContents(); //获取课程list
            },
            getCheckBoxContents() {
                api.getIEPCourses().then(res => {
                    this.courseData = this.cascaderFormater(res.data.Data);
                });
            },
            cascaderFormater(data) {
                for (let i = 0, j= data.length; i< j; i++) {  //这里的i最大为99，潜在bug
                    data[i].ID = String(i + 1);
                    for (let k = 0, g = data[i].Children.length; k < g; k++) {
                        if (data[i].Children[k].ID  === 0 ) {  //接口返回的ID都是0，后面可能有变化，潜在bug
                            data[i].Children[k].ID = String(100*(i + 1) + k)
                        }
                    }
                }
                return JSON.parse(JSON.stringify(data).replace(/ID/g,"value").replace(/Name/g,"label").replace(/Children/g,"children"));
            },
            //评估表列表
            getTestList(pageIndex) {
                let params = {
                    PageIndex: pageIndex,
                    PageSize: 10
                };
                api.requestTestList(params).then(res => {
                    this.testPaperListData = res.Records;
                    this.testPaperTotal = res.Total;
                });
            },
            testPaperListChange(currentPage) {
                this.testPaperCurrentPage = currentPage;
                this.getTestList(this.testPaperCurrentPage);
            },
            addTestPaper() {
                this.addTestPaperVisible = true;
                api.requestCourseList().then(res => {
                    this.testPaperData = res.List;
                });
            },
            startTest(index, row) {
                this.paperPackageID = row.PaperPackageID;
                this.testID = row.ID;
                this.choseToTestVisible = true;
            },
            checkTestPaticent(index, row) {
                this.pacientListVisible = true;
                this.examID = row.ID;
                this.requestTestPaticent(1);
            },
            deleteExam(index, row) {
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
                        this.getTestList(this.testedPatientCurrentPage);
                    } else if (res.Code === 1) {
                        this.$message.warning('指定评估不存在');
                    } else if (res.Code === 2) {
                        this.$message.warning('指定评估不属于当前医生');
                    }
                });
            },
            handleChange() {
                var x = this.testFormData.CourseIds;
                let len = x.length
                if (len > 0) {
                    let id = x[len - 1]
                    var name = this.recursionData(id);
                    if (typeof(name)=="undefined") return
                    if (this.multipleCourses.indexOf(name) === -1) {
                        this.multipleCourses.push(name)
                    }
                }
            },
            recursionData(id) {
                let data = this.courseData;
                for (let i = 0, j= data.length; i < j; i++) {
                    for (let k = 0, g = data[i].children.length; k < g; k++) {
                        let two = data[i].children[k]
                        if (two.value  === id && two.Type === 2 ) {
                            return two.label
                        } else {
                            if (two.children) {
                                for (let o = 0, p = data[i].children[k].children.length; o < p; o++) {
                                    let three = data[i].children[k].children[o]
                                    if (three.value  === id && three.Type === 2) {
                                        return three.label
                                    }
                                }
                            }
                        }
                    }
                }
            },
            confirmDeleteExam() {
                let params = {
                    ID: this.examID,
                    key: this.consfirmDeleteExamMsg
                };
                api.deleteExam(params).then(res => {
                    if (res.Code === 0) {
                        this.requestInitData();
                        this.$message.success('删除成功');
                    } else if (res.Code === 1) {
                        this.$message.warning('指定评估不存在');
                    } else if (res.Code === 2) {
                        this.$message.warning('指定评估不属于当前医生');
                    }
                });
            },
            // 弹窗-新增评估表
            testPaperCancel() {
                this.testFormData = {
                    Name: '',
                    CourseIds: []
                };
                this.addTestPaperVisible = false;
            },
            submitTestPaper() {
                let params = this.testFormData;
                api.addTestPaper(params).then(res => {
                    if (res.Code === 0) {
                        this.$message.success('成功');
                        this.addTestPaperVisible = false;
                        this.getTestList(this.testedPatientCurrentPage);
                    } else {
                        this.$message.error('失败');
                    }
                });
            },
            // 弹窗-选择患者开始评测
            filterPacient(val) {
                if (this.choseToTestVisible) { //bug,两个选择病人的callback，我用choseToTestVisible区分
                    this.selectedGroupPacientes = this.selectedGroup[val].groupPatients;
                    console.log(this.selectedGroupPacientes);
                }
                if (this.sendToPaticentVisible) { //bug,两个选择病人的callback，我用choseToTestVisible区分
                    console.log(this.selectedGroup);
                    this.selectedGroupPacientes = this.selectedGroup[val].groupPatients;
                    console.log(this.selectedGroupPacientes);
                }
            },
            choseToTestSubmit(title, isComplete) {
                let params = {
                    ExamID: this.testID,
                    PatientAgentID: this.choseToTestPatient
                };
                api.chosePatientToTest(params).then(res => {
                    if (res.Code === 0) {
                        this.$store.dispatch('setTestPaticentID', this.choseToTestPatient);
                        this.$store.dispatch('setTESTID', res.Msg);
                        this.$store.dispatch('setTESTISCOMPLETE', isComplete);
                        this.choseToTestVisible = false;
                        this.$router.push({
                            path: '/iep/iepAnalysis/resultPaper'
                        });

                    }
                });
            },
            resetChosePatientTest() {
                this.selectedPacientIDS = '';
                this.choseToTestPatient = '';
            },
            // 弹窗-已评测患者
            requestTestPaticent(pageIndex) {
                let params = {
                    ExamID: this.examID,
                    PageIndex: pageIndex,
                    PageSize: 10
                };
                api.requestTestMembers(params).then(res => {
                    this.testedPatientListData = res.Records;
                    this.testedPatientListTotal = res.Total;
                });
            },
            testedPatientListNextPage(currentPage) {
                this.testedPatientCurrentPage = currentPage;
                this.requestTestPaticent(this.testedPatientCurrentPage);
            },
            checkPacientTestDetail(index, row, isComplete) {
                this.$store.dispatch('setTestPaticentID', row.PatientAgentID);
                this.$store.dispatch('setTESTID', row.ID);
                this.$store.dispatch('setTESTISCOMPLETE', isComplete);
                this.pacientListVisible = false;
                this.$router.push({
                    path: '/iep/iepAnalysis/resultPaper'
                });

            },
            checkPacientTestReport(index, row) {
                this.$store.dispatch('setTestPaticentID', row.PatientAgentID);
                this.$store.dispatch('setTESTID', row.ID);
                this.$router.push({
                    path: '/iep/iepAnalysis/reportPaper'
                });
                // this.chosedPatient = row.Name;
            },
            toDeleteExamPatient(index, row) {
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
                            this.confirmDeleteExamPatient();
                        });
                    } else if (res.Code === 0) {
                        this.$message.success('删除成功');
                        this.requestTestPaticent(this.testedPatientCurrentPage);
                    } else if (res.Code === 1) {
                        this.$message.warning('指定评估不存在');
                    } else if (res.Code === 2) {
                        this.$message.warning('指定评估不属于当前医生');
                    }
                });
            },
            confirmDeleteExamPatient() {
                let params = {
                    ID: this.examPatientID,
                    key: this.consfirmDeleteExamMsg
                };
                api.deleteExamPatient(params).then(res => {
                    if (res.Code === 0) {
                        this.requestTestPaticent(this.testedPatientCurrentPage);
                        this.$message.success('删除成功');
                    } else if (res.Code === 1) {
                        this.$message.warning('指定评估不存在');
                    } else if (res.Code === 2) {
                        this.$message.warning('指定评估不属于当前医生');
                    }
                });
            },
        },
        created() {
            this.requestInitData();
        }
    };

</script>
<style scoped>
    .mainIEP {
        width: 100%;
        height: 626px;
        position: absolute;
        left: 0;
        top: 0;
    }

    .pageNavbar {
        position: absolute;
        left: -94px;
        top: 0;
        width: 1280px;
        height: 42px;
        border-bottom: 1px solid #cccccc;
    }

    .registerBox {
        width: 100%;
        height: 583px;
        position: absolute;
        left: 0;
        top: 0;
    }

    .center-content {
        width: 1125px;
        height: 578px;
        position: relative;
        margin: 0 auto;
    }

    .colorHeader {
        border-top: 4px solid RGBA(49, 187, 252, 1.00)
    }

    .cardBox {
        width: 100%;
        height: 520px
    }

    .tableWrap {
        width: 100%;
        height: 532px;
    }

    .pageNavbar span {
        font-size: 16px;
        cursor: pointer;
        line-height: 42px;
    }

    .pageNavbar span:hover {
        color: rgb(66, 171, 216);
    }

    .addTestsubmit {
        width: 550px;
        text-align: center;
        margin: 0 auto
    }

    .toolBox {
        display: flex;
        justify-content: flex-end;
        margin-top: 5px;
        margin-bottom: 5px;
    }

    .moveLeft {
        margin-left: -30px;
    }

    .addTestFormWrap {
        width: 100%;
    }


    .courseCheckBox {
        width: 200px;
        height: 40px;
        line-height: 40px;
    }

    .courseCheckBox:nth-child(1) {
        margin-left: 15px
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
    .tag {
        margin-right: 20px
    }

</style>
