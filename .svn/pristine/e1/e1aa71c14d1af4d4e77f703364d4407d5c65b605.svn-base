<template>
    <div class="iepBasicInfoBox">
        <div class="pageNavbar">
            <span style="color: black">当前位置&nbsp;&nbsp;>&nbsp;&nbsp;</span>
            <span style="cursor: none;color: black">基本信息&nbsp;&nbsp;>&nbsp;&nbsp;</span>
        </div>
        <div class="registerBox">
            <div class="center-content">
                <div>
                    <el-card class="cardBox colorHeader " :body-style="{ padding: '0px'}" style="height: 573px">
                        <div class="tableWrap ">
                            <el-table :data="assessmentData" style="width: 100%">
                                <el-table-column type="index" width="80">
                                </el-table-column>

                                <el-table-column prop="Name" label="姓名" >
                                </el-table-column>

                                <el-table-column prop="Sex" label="性别" >
                                    <template scope="scope">
                                        <span>{{ getSex(scope.row.Sex)}}</span>
                                    </template>
                                </el-table-column>

                                <el-table-column prop="BirthDate" label="出生日期" >
                                </el-table-column>

                                <el-table-column prop="DiagnosisName" label="临床表现" >
                                </el-table-column>

                                <el-table-column prop="Comments" label="情况"  width="330px">
                                    <template scope="scope">
                                        <span v-if="scope.row.Comments && scope.row.Comments.length < 20">{{scope.row.Comments}}</span>
                                        <el-tooltip v-if="scope.row.Comments && scope.row.Comments.length >= 20" style="width: 400px" effect="light" placement="left-start">
                                            <div slot="content" v-html="setContent(scope.row.Comments)"></div>
                                            <span>{{scope.row.Comments.substr(0,20) + '...'}} </span>
                                        </el-tooltip>
                                    </template>
                                </el-table-column>


                            </el-table>
                        </div>
                        <el-pagination layout="prev, pager, next" @current-change="assessmentPaperListChange" :page-size="10" :total="assessmentPaperTotal" style="float:right;"></el-pagination>
                    </el-card>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import {  requestTestMembers, filterPatients } from '../../api/api';
    export default {
        name: 'iepAnalysis',
        components: {

        },
        data () {
            return {
                assessmentData: [],
                assessmentPaperTotal: 1,
                assessmentCurrentPage: 1
            }
        },
        methods: {
            assessmentPaperListChange(currentPage) {
                this.assessmentCurrentPage = currentPage;
                this.requestAssessment(this.assessmentCurrentPage);
            },
            requestAssessment(pageIndex) {
                let params = {
                    PageIndex: pageIndex,
                    PageSize: 10,
                    GroupID: ''
                };
                filterPatients(params).then(res => {
                    this.assessmentData = res.data.Records;
                    this.assessmentPaperTotal = res.data.Total;
                });
            },
            getSex(type) {
                if (type === 1) {
                    return '男'
                }
                if (type === 2) {
                    return '女'
                }
            },
            setContent(str) {
                let len = str.length
                let aTimes = parseInt((len/30))
                let arr = []
                for (let i=0;i<aTimes+1;i++) {
                    let chunkStr
                    if (i === aTimes) {
                        chunkStr  = str.substring(30*i,len)
                    } else {
                        chunkStr = str.substring(30*i,30*(i+1)) + '<br>'
                    }
                    arr.push(chunkStr)
                }
                return arr.join('')
            }
        },
        created() {
            this.requestAssessment(1);
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
        top: 42px;
    }
    .center-content {
        width: 1080px;
        height: 578px;
        position: relative;
        margin: 0 auto;
        padding-top: 10px;
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
    .contentPop {
        width: 60vw;
        margin: 0 auto;
    }

</style>
