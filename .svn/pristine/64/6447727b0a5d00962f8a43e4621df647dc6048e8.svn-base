<template>
    <div class="center-content">
        <div v-if=" 'consultancy' === lastPath">
            <div class="toolBox">
                <el-button @click="toAddPaper(21)">
                    <Icon type="plus-round"></Icon>添加表格
                </el-button>
            </div>
            <el-card class="cardBox colorHeader" :body-style="{ padding: '0px'}">
                <div class="tableWrap">
                    <el-table :data="consultData" style="width: 100%">
                        <el-table-column type="index" width="60">
                        </el-table-column>

                        <el-table-column prop="Name" label="名称" width="180">
                        </el-table-column>
                        <el-table-column prop="TotalCount" label="已发送个数" width="180">
                        </el-table-column>
                        <el-table-column prop="FinishedCount" label="已完成个数">
                        </el-table-column>
                        <el-table-column prop="CreatedOn" label="创建时间">
                        </el-table-column>

                        <el-table-column label="操作">
                            <template scope="scope">
                                <el-button size="mini" :plain="true" type="info" @click="checkPaper(scope.$index, scope.row)">查看填写结果</el-button>
                                <el-button size="mini" :plain="true" type="warning" @click="sendtoPaticent(scope.$index, scope.row)">发放</el-button>
                            </template>
                        </el-table-column>
                    </el-table>
                </div>
            </el-card>
        </div>
        <div v-else>
            <router-view></router-view>
        </div>

        <!--<div v-model="replyPatientListVisible">-->
            <!--<el-table :data="editedPaperData" style="width: 100%">-->
                <!--<el-table-column type="index">-->
                <!--</el-table-column>-->

                <!--<el-table-column prop="PatientName" label="姓名">-->
                <!--</el-table-column>-->

                <!--<el-table-column prop="Status" label="状态">-->
                    <!--<template scope="scope">-->
                        <!--<span>{{scope.row.Status?'已完成':'未完成'}}</span>-->
                    <!--</template>-->
                <!--</el-table-column>-->

                <!--<el-table-column prop="PaperName" label="表名" >-->
                <!--</el-table-column>-->

                <!--<el-table-column prop="CreatedOn" label="创建时间" show-overflow-tooltip >-->
                <!--</el-table-column>-->
                <!--<el-table-column label="操作">-->
                    <!--<template scope="scope">-->
                        <!--<el-button size="mini" :plain="true" type="info" @click="previewEditedForm(scope.$index, scope.row)">查看</el-button>-->
                    <!--</template>-->
                <!--</el-table-column>-->
            <!--</el-table>-->

            <!--<el-pagination layout="prev, pager, next" @current-change="reslutCurrentChange" :page-size="10" :total="resultTotal" style="float:right;"></el-pagination>-->

        <!--</div>-->


        <!--<el-dialog v-model="createQuestionnaireVisible" :modal-append-to-body="false">-->

            <!--<el-table :data="paperTmeplateData" style="width: 100%">-->
                <!--<el-table-column type="index" width="50">-->
                <!--</el-table-column>-->

                <!--<el-table-column prop="Name" label="名称" width="180">-->
                <!--</el-table-column>-->

                <!--<el-table-column prop="Comments" label="内容" width="180">-->
                <!--</el-table-column>-->

                <!--<el-table-column label="操作">-->
                    <!--<template scope="scope">-->
                        <!--<el-button size="mini" :plain="true" type="info" @click="addForm(scope.$index, scope.row)">添加</el-button>-->
                        <!--<el-button size="mini" :plain="true" type="warning" @click="previewForm(scope.$index, scope.row)">查看</el-button>-->
                    <!--</template>-->
                <!--</el-table-column>-->

            <!--</el-table>-->

        <!--</el-dialog>-->


        <el-dialog title="发送问卷" v-model="sendToPaticentVisible" :close-on-click-modal="false" @close="resetPatientList" :modal-append-to-body="false" :show-close="false">
            <el-select v-model="selectedPacientIDS" placeholder="请选择小组" @change="filterPacient">
                <el-option v-for="(item, index) in selectedGroup" :key="item.groupName" :label=item.groupName :value=index>
                </el-option>
            </el-select>

            <el-select v-model="pacientsIDS" placeholder="请选择患者" ref="pacientesSelecter">
                <el-option v-for="(item, index) in selectedGroupPacientes" :key="item.Name" :label=item.Name :value=item.ID>
                </el-option>
            </el-select>

            <div slot="footer" class="dialog-footer">
                <el-button @click.native="sendToPaticentVisible = false">返回</el-button>
                <el-button  type="primary" class="transBtn" @click="sendToPacientSubmit()">发送</el-button>
            </div>
        </el-dialog>

    </div>

</template>

<script>
    import api  from '../../../api/index.js';
    export default {
        name: 'consultancy',
        computed: {
            lastPath: function () {
                let pathStr =  this.$route.path
                let pathArr = pathStr.split('/')
                pathArr.splice(0,1)
                let len = pathArr.length
                return pathArr[len - 1]
            },
            selectedGroup: function () {
                return this.$store.state.mystudent.patientList // 患者小组数组
            }
        },
        data() {
          return {
              consultData: [], // 咨询管理
              sendListID: '',
              replyPatientListVisible: false,
              resultPage: 1,
              resultTotal: 1,
              sendToPaticentVisible: false,
              selectedGroupPacientes: [],
              selectedPacientIDS: '',
              paperID: '',
              pacientsIDS: ''
          }
        },
        methods: {
            checkPaper(index, row) {
//                this.replyPatientListVisible = true;
//                this.sendListID = row.ID;
                var id = row.ID;
                this.$store.dispatch('setPaperID', id);
                this.$router.push({path: `/serviceTool/consultancy/sendQuestionnaire`})
            },
            getDrPaperSendList(id, index) {
                api.getDrPaperSendOut(id, index, 10).then(res => {
                    this.resultTotal = res.data.Total;
                    this.editedPaperData = res.data.Records;
                });
            },
            previewEditedForm(index, row) {
                var resultID = row.ID;
                api.getPaperResult(resultID).then(res => {
                    this.$store.dispatch('addPaper', res.data);
                    this.previewFormVisible = true;
                });
            },
            reslutCurrentChange(val) {
                this.resultPage = val;
                this.getDrPaperSendList(this.sendListID, this.resultPage);
            },
            getDrPaperSendList(id, index) {
                api.getDrPaperSendOut(id, index, 10).then(res => {
                    this.resultTotal = res.data.Total;
                    this.editedPaperData = res.data.Records;
                });
            },
            toAddPaper(value) {
                this.$store.dispatch('setTemplateType', value);
                this.$router.push({path: '/serviceTool/consultancy/templateList'})
            },
            sendtoPaticent(index, row) {
                this.paperID = row.ID;
                this.sendToPaticentVisible = true;
            },
            filterPacient(val) {
                if (this.sendToPaticentVisible) {  //bug,两个选择病人的callback，我用choseToTestVisible区分
                    this.selectedGroupPacientes = this.selectedGroup[val].groupPatients;
                }
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
                            break;
                        case 1:
                            this.$message.warning('指定的问卷不存在');
                            break;
                    }
                    this.sendToPaticentVisible = false;
                });
            },
            resetPatientList() {
                this.selectedPacientIDS = [];
                this.pacientsIDS = [];
            },

        },
        created() {
            api.getDrPaperSummary(21).then(res => {
                this.paperURL = 21;
                this.consultData = res.data.List;
            });
        }
    }
</script>
