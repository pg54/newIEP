<template>
    <div>
        <el-table :data="paperTmeplateData" style="width: 100%">
            <el-table-column type="index" width="50">
            </el-table-column>

            <el-table-column prop="Name" label="名称" width="180">
            </el-table-column>

            <el-table-column prop="Comments" label="内容" width="180">
            </el-table-column>

            <el-table-column label="操作">
                <template scope="scope">
                    <el-button size="mini" :plain="true" type="info" @click="addForm(scope.$index, scope.row)">添加</el-button>
                    <el-button size="mini" :plain="true" type="warning" @click="previewForm(scope.$index, scope.row)">查看</el-button>
                </template>
            </el-table-column>

        </el-table>
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
        name: 'templateList',
        components: {
            QuestionPaper
        },
        computed: {
            templateType: function () {
                return this.$store.state.serviceArrangement.templateType
            }
        },
        data() {
            return {
                paperTmeplateData: [],
                previewFormVisible: false
            }
        },
        methods: {
            addForm(index, row) {
                var id = row.ID;
                api.addPapertoDr(id).then(res => {
                    var code = res.Code;
                    switch (code) {
                        case 0:
                            this.$message.success('添加成功');
                            break;
                        case 1:
                            this.$message.warning('指定的表单不存在');
                            break;
                        case 2:
                            this.$message.error('已添加');
                            break;
                    }
                });
            },
            previewForm(index, row) {
                var resultID = row.ID;
                api.paperDetails(resultID).then(res => {
                    this.$store.dispatch('addPaper', res.data);
                    this.previewFormVisible = true;
                });
            }

        },
        created() {
            api.filterPaperTmeplate(this.templateType).then(res => {
                this.paperTmeplateData = res.data.List;
            });

        }
    }
</script>
