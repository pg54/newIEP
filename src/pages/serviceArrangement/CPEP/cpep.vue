<template>
    <div class='cpepContentWrap'>

        <div class="center-content" v-if=" 'cpep' === lastPath">
            <el-card class="cardBox colorHeader" :body-style="{ padding: '0px'}">
                <div class="tableWrap" style="height: 480px">
                    <el-table :data="CPEPdata" style="width: 100%">

                        <el-table-column prop="Name" label="名称">
                        </el-table-column>

                        <el-table-column prop="CreatedOn" label="创建时间">
                        </el-table-column>

                        <el-table-column label="操作">
                            <template scope="scope">
                                <el-button size="mini" :plain="true" type="info" @click="choseCPEPvisible = true">开始测试</el-button>
                                <el-button size="mini" :plain="true" type="warning" @click="checkTestedMembers">已评测患者</el-button>
                            </template>
                        </el-table-column>
                    </el-table>
                </div>
            </el-card>
        </div>
        <div v-else>
            <router-view></router-view>
        </div>


        <el-dialog title="已评测患者" :visible="pacientListVisible" :modal-append-to-body="false" :close-on-click-modal="false">
            <el-table :data="cpepMemdbersData" style="width: 100%">
                <el-table-column type="index" width="60">
                </el-table-column>

                <el-table-column prop="PatientAgentName" label="名称" width="180">
                </el-table-column>

                <el-table-column prop="ModifiedOn" label="修改时间">
                </el-table-column>

                <el-table-column prop="CreatedOn" label="创建时间">
                </el-table-column>

                <el-table-column label="操作">
                    <template scope="scope">
                        <el-button v-if="scope.row.Status === 0" size="mini" :plain="true" type="info" @click="continueCPEPTest(scope.$index, scope.row, true)">继续评测</el-button>
                        <el-button v-else size="mini" :plain="true" type="info" @click="checkCPEPResult(scope.$index, scope.row, false)">查看填写结果</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <el-pagination layout="prev, pager, next" @current-change="reslutCurrentChange" :page-size="10" :total="patientListTotal"
                style="float:right;"></el-pagination>
        </el-dialog>



        <el-dialog title="选择患者" v-model="choseCPEPvisible" :close-on-click-modal="false" :modal-append-to-body="false" 
        :show-close="false" @close="resetChosePatientTest">

            <el-select v-model="selectedPacientIDS" placeholder="请选择小组" @change="filterPacient">
                <el-option v-for="(item, index) in selectedGroup" :key="item.groupName" :label=item.groupName :value=index>
                </el-option>
            </el-select>

            <el-select v-model="choseToTestPatient" placeholder="请选择患者">
                <el-option v-for="(item, index) in selectedGroupPacientes" :key="item.Name" :label=item.Name :value=item.ID>
                </el-option>
            </el-select>

            <div slot="footer" class="dialog-footer">
                <el-button @click.native="choseCPEPvisible = false">返回</el-button>
                <el-button type="primary" class="testPaper" @click="choseToCPEP">开始评测</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
    import api from '../../../api/index.js';
    export default {
        name: 'cpep',
        computed: {
            lastPath: function () {
                let pathStr = this.$route.path
                let pathArr = pathStr.split('/')
                pathArr.splice(0, 1)
                let len = pathArr.length
                return pathArr[len - 1]
            },
            selectedGroup: function () {
                return this.$store.state.mystudent.patientList
            }
        },
        data() {
            return {
                //cpep列表
                CPEPdata: [{
                    Name: '孤独症谱系及相关发育障碍儿童评估用心理教育量表中文修订三版',
                    CreatedOn: '2017-08-31'
                }],
                //弹窗-选择患者开始评测
                choseCPEPvisible: false,
                selectedGroupPacientes: [],
                selectedPacientIDS: '',
                choseToTestPatient: '',
                //弹窗-已评测患者列表
                pacientListVisible: false,
                //弹窗-患者列表
                cpepMemdbersData: [],
                patientListTotal: 1
            }
        },
        methods: {
            //cpep列表
            checkTestedMembers() {
                this.pacientListVisible = true;
                api.getCPEPMember().then(res => {
                    this.cpepMemdbersData = res.data.Data.Records;
                })
            },
            //弹窗-选择患者开始评测
            filterPacient(val) {
                if (this.choseCPEPvisible) { //bug,两个选择病人的callback，我用choseToTestVisible区分
                    this.selectedGroupPacientes = this.selectedGroup[val].groupPatients;
                }
            },
            choseToCPEP() {
                this.choseCPEPvisible = false;
                api.getCPEP().then(res => {
                    if (res.data.Status === true) {
                        this.$store.dispatch('setcpepData', res.data.Data);
                        this.$store.dispatch('setcpepPacientID', this.choseToTestPatient);
                        this.$store.dispatch('setcpepIsResultPage', true);
                        this.$store.dispatch('setcpepIsFirstTimeTest', true);
                        this.$router.push({
                            path: 'cpep/serviceCPEP'
                        })

                    }
                })
            },
            resetChosePatientTest() {
                this.selectedPacientIDS = '';
                this.choseToTestPatient = '';
            },
            //弹窗-已评测患者列表
            getDrPaperSendList(id, index) {
                api.getDrPaperSendOut(id, index, 10).then(res => {
                    this.patientListTotal = res.data.Total;
                    this.editedPaperData = res.data.Records;
                });
            },
            reslutCurrentChange(val) {
                this.resultPage = val;
                this.getDrPaperSendList(this.sendListID, this.resultPage);
            },
            continueCPEPTest(index, row, cpepSratus) {
                let params = {
                    testID: row.ID
                }
                api.getCPEP(params).then(res => {
                    if (res.data.Status === true) {
                        this.$store.dispatch('setcpepData', res.data.Data);
                        this.$store.dispatch('setcpepPacientID', this.choseToTestPatient);
                        this.$store.dispatch('setcpepIsResultPage', cpepSratus);
                        this.$store.dispatch('setcpepIsFirstTimeTest', false);
                        this.$store.dispatch('setcpepMemberID', row.ID);
                        this.$router.push({
                            path: 'cpep/serviceCPEP'
                        })
                    }
                })

            },
            checkCPEPResult(index, row, cpepSratus) {
                let params = {
                    testId: row.ID,
                    PatientAgentID: row.PatientAgentID,
                    PageIndex: 1,
                    PageSize: 10
                };
                api.getCPEPReport(params).then(res => {
                    this.$store.dispatch('setcpepData', res.data.Data.TestResult);
                    this.$store.dispatch('setcpepPacientID', this.choseToTestPatient);
                    this.$store.dispatch('setcpepIsResultPage', cpepSratus);
                    this.$store.dispatch('setcpepIsFirstTimeTest', false);
                    this.$router.push({
                        path: 'cpep/serviceCPEP'
                    })
                })
            },
        }
    }

</script>

<style scoped>
    .cpepContentWrap {
        width: 100%;
        height: 583px;
        overflow-y: scroll;
    }

    .center-content {
        width: 1125px;
        margin: 0 auto;
    }

</style>
