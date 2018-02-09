<template>
 <div class="center-content">
                    <el-row :gutter="20">
                        <el-col :span="5">
                            <div class="grid-content bg-purple">
                                <el-select v-model="groupValue" placeholder="请选择患者组" @change="getPacientList">
                                    <el-option v-for="(item, index) in groups" :key="item.groupName" :label="item.groupName" :value="index">
                                    </el-option>
                                </el-select>
                            </div>
                        </el-col>
                        <el-col :span="5">
                            <el-select v-model="patientID" placeholder="请选择患者">
                                <el-option v-for="(item, index) in patientIDs" :key="item.ID" :label="item.Name" :value="item.ID">
                                </el-option>
                            </el-select>
                        </el-col>
                        <el-col :span="5">
                            <div class="grid-content bg-purple">
                                <el-select v-model="packageID" placeholder="请选择课程包" @change="toSelectCourse">
                                    <el-option v-for="(o,index) in packageData" :label="o.Name" :value="o.ID" ></el-option>
                                </el-select>
                            </div>
                        </el-col>
                        <el-col :span="5">
                            <div class="grid-content bg-purple">
                                <el-select v-model="courseID" placeholder="请选择课程">
                                    <el-option v-for="(o,index) in courseData" :label="o.Name" :value="o.ID" ></el-option>
                                </el-select>
                            </div>
                        </el-col>
                        <el-col :span="4">
                            <div class="grid-content bg-purple">
                                <el-button @click="refreshEcharts">确定</el-button>
                            </div>
                        </el-col>
                    </el-row>

                    <div class="chart-container">
                        <div id="chartLine" style="width:100%; height:565px;"></div>
                    </div>
                </div>
  
</template>
<script>
    import api from '../../../api/index.js'
    import Highcharts from 'highcharts/highcharts'
    export default {
        name: 'dataAnalysisHistory',
        computed: {
            groups: function () {
                return this.$store.state.mystudent.patientList;
            }
        },
        created() {
            api.requestCourseList().then(res => {
                this.packageData = res.List;
            });
            let params = {
                PageIndex: 1,
                PageSize: 100
            };
            api.requestTestList(params).then(res => {
                this.testPaperListData = res.Records
            });
            this.getPacientList(0) //默认选中第一组患者
        }
    }
    
</script>
