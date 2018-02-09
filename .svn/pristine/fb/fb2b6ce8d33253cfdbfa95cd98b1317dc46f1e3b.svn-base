<template>
    <div>
        <div class="center-content" v-if=" 'sendQuestionnaire' === lastPath">
            <el-table :data="editedPaperData" style="width: 100%">
                <el-table-column type="index">
                </el-table-column>

                <el-table-column prop="PatientName" label="姓名">
                </el-table-column>

                <el-table-column prop="Status" label="状态">
                    <template scope="scope">
                        <span>{{scope.row.Status?'已完成':'未完成'}}</span>
                    </template>
                </el-table-column>

                <el-table-column prop="PaperName" label="表名" >
                </el-table-column>

                <el-table-column prop="CreatedOn" label="创建时间" show-overflow-tooltip >
                </el-table-column>
                <el-table-column label="操作">
                    <template scope="scope">
                        <el-button size="mini" :plain="true" type="info" @click="previewEditedForm(scope.$index, scope.row)">查看</el-button>
                    </template>
                </el-table-column>
            </el-table>

            <el-pagination layout="prev, pager, next" @current-change="reslutCurrentChange" :page-size="10" :total="resultTotal" style="float:right;"></el-pagination>
        </div>
        <el-dialog v-model="previewFormVisible" :close-on-click-modal="false" :modal-append-to-body="false" :show-close="false">
            <div class="paperContent">
                <QuestionPaper></QuestionPaper>
            </div>
            <div slot="footer" class="dialog-footer">
                <el-button @click.native="previewFormVisible = false">返回</el-button>
            </div>
        </el-dialog>
    </div>

</template>

<script>
    import api from '../../../../api/index.js'
    import QuestionPaper from '../../../../components/QuestionPaper.vue';
    export default {
        name: 'sendQuestionnaire',
        components: {
            QuestionPaper
        },
        computed: {
            lastPath: function () {
                let pathStr =  this.$route.path
                let pathArr = pathStr.split('/')
                pathArr.splice(0,1)
                let len = pathArr.length
                return pathArr[len - 1]
            },
            paperID: function () {
                return this.$store.state.serviceArrangement.checkPaperID
            }
        },
        data() {
          return {
              editedPaperData: [],
              resultTotal: null,
              previewFormVisible: false
          }
        },
        methods: {
            reslutCurrentChange() {

            },
            previewEditedForm(index, row) {
                var resultID = row.ID;
                api.getPaperResult(resultID).then(res => {
                    this.$store.dispatch('addPaper', res.data);
                    this.previewFormVisible = true;
                });
            },
        },
        created() {
            api.getDrPaperSendOut(this.paperID, 1, 10).then(res => {
                this.resultTotal = res.data.Total;
                this.editedPaperData = res.data.Records;
            });
        }

    }
</script>
