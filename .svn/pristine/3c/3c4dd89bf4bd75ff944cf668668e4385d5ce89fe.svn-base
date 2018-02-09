<template>
    <div class="dataAnalysisBox">
        <div class="slidebarOne">
            <li v-for="(ele, index) in tabData" class="pacientLink" :class="{active : currentTab === index }"
                @click="toggleTab(index)">
                {{ele}}
            </li>
        </div>
        <div class="contentOne">
            <div v-show="currentTab === 0" class="tab-content">
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
            </div>
            <div v-show="currentTab === 1" class="tab-content">
                <div class="center-content">

                    <el-row :gutter="20">
                        <el-col :span="3">
                            <p class="choseTitle">请添加对比患者：</p>
                        </el-col>
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
                    </el-row>

                    <el-row>
                        <el-col :span="3">
                            <p class="choseTitle">请选择比较课程：</p>
                        </el-col>
                        <el-col :span="5">
                            <div class="grid-content bg-purple">
                                <el-select v-model="testPaperID" placeholder="请选择评估表" @change="toSelectCourse">
                                    <el-option v-for="(o,index) in testPaperListData" :label="o.Name" :value="o.ID" ></el-option>
                                </el-select>
                            </div>
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

                    </el-row>

                    <el-row style="background: rgba(238, 239, 240, 1)">
                        <el-col :span="13">
                            <span class="choseTitle">对比患者：</span>
                            <el-tag :closable="true" v-for="(ele, index) in selectPatientList"
                                    type="primary" style="margin: 6px 2px" @close="handleClose(ele)">{{ ele.Name }}</el-tag>
                        </el-col>
                        <el-col :span="7">
                            <span class="choseTitle">已选课程：</span>
                            <el-tag v-show="courseName !== null && courseName.length > 0" style="margin: 6px 2px" type="warning">{{ courseName }}</el-tag>
                        </el-col>
                        <el-col :span="4">
                            <div class="grid-content bg-purple" >
                                <el-button @click="submitCompate" size="mini" style="margin-left: 100px">确定</el-button>
                            </div>
                        </el-col>
                    </el-row>
                    <div id="chartHistogram" style="width:100%; height:485px;"></div>

                </div>
            </div>

        </div>
    </div>
</template>
<script>
    import api from '../../api/index.js'
    import Highcharts from 'highcharts/highcharts'

    export default {
        name: 'dataAnalysis',
        computed: {
            groups: function () {
                return this.$store.state.mystudent.patientList;
            }
        },
        watch: {
            patientID: function () {
                if (this.selectPatientList.length === 0) {
                    this.reflexName(this.patientID);
                } else {
                    let foo = this.patientID
                    let bar = this.selectPatientList.map(function (ele) {
                        return ele.ID;
                    });
                    if (bar.indexOf(foo) === -1) {
                        this.reflexName(this.patientID);
                    } else {
                        this.$message.warning('重复选择');
                    }
                }
            },
            courseID: function () {
                let cID = this.courseID
                let _this = this;
                _this.packageData.map(function (ele) {
                    ele.Courses.map(function (item) {
                        if (item.ID === cID) {
                            _this.courseName = item.Name;
                        }
                    })
                })
            }
        },
        data() {
            return {
                tabData: ['评测历史','评测对比'],
                currentTab: 0,
                groupValue: 0, // 选中的组的序列号,默认第一组
                patientIDs: [],
                patientID: null, // 选中的患者ID
                packageData: [], // package的数据源
                courseData: [], // 课程的数据源
                packageID: null, // 选中的packageID
                courseID: null, //选中的课程ID
                xData: [], //x轴数据
                titleData: [],  //线名
                seriesData: [],  //多条线的数据组
                 cpXData: [], //x轴数据
                cpTitleData: [],  //线名
                cpSeriesData: [],  //多条线的数据组
                selectPatientList: [], //选择要对比的患者对象 id name
                testPaperListData: [], //评估表的数据源
                testPaperID: null, // 评估表ID
                currentPatientID: null,
                courseName: null
            }
        },
        methods: {
            toggleTab(index) {
                this.currentTab = index;
                this.resetData();
                this.getPacientList(0);
            },
            reflexName(id) {
                let _this = this;
                _this.groups.map(function (ele) {
                    ele.groupPatients.map(function (item) {
                        if (item.ID === _this.patientID) {
                            let obj = {
                                ID: item.ID,
                                Name: item.Name
                            }
                            _this.selectPatientList.push(obj);
                        }
                    })
                })
            },
            handleClose(tag) {
                this.selectPatientList.splice(this.selectPatientList.indexOf(tag), 1);
            },
            resetData() {  // 切换tab时重置data
                this.groupValue = 0;
                this.patientID = null;
                this.courseData = [];
                this.packageID = null;
                this.courseID = null;
                this.courseName = null;
                this.testPaperID = null;
                this.selectPatientList = [];
            },
            drawLineChart() {
                this.lineChart = new Highcharts.Chart('chartLine', {
                    credits: {
                        text: 'onenewcare.com',
                    },
                    chart: {
                        type: 'line'
                    },
                    title: {
                        text: ''
                    },
                    xAxis: {
                        categories: this.xData
                    },
                    yAxis: {
                        title: {
                            text: '分数'
                        }
                    },
                    plotOptions: {
                        line: {
                            dataLabels: {
                                enabled: true          // 开启数据标签
                            },
                            enableMouseTracking: false // 关闭鼠标跟踪，对应的提示框、点击事件会失效
                        }
                    },
                    series: this.seriesData
                });
            },
            drawHistogramChart() {
                 this.HistogramChart = new Highcharts.Chart('chartHistogram',{
                     credits: {
                         text: 'onenewcare.com'
                     },
                    chart: {
                        type: 'column'
                    },
                    title: {
                        text: ''
                    },
                    xAxis: {
                        categories: this.cpXData,
                        crosshair: true
                    },
                    yAxis: {
                        min: 0,
                        title: {
                            text: '分数'
                        }
                    },
                    tooltip: {
                        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                        '<td style="padding:0"><b>{point.y:.1f} 分</b></td></tr>',
                        footerFormat: '</table>',
                        shared: true,
                        useHTML: true
                    },
                    plotOptions: {
                        column: {
                            pointPadding: 0.2,
                            borderWidth: 0
                        }
                    },
                    series: this.cpSeriesData
                });
            },
            drawCharts() {
                this.seriesData = [{
                    name: '初始状态',
                    data: []
                }];
                this.xData = ['课程名称'];
                this.drawLineChart();

                this.cpSeriesData = [{
                    name: '初始状态',
                    data: []
                }];
                this.cpXData = ['课程名称'];
                this.drawHistogramChart();
            },
            getPacientList(value) {
                this.patientIDs = this.groups[value].groupPatients;
            },
            toSelectCourse() {
                this.courseID = null;  //清空选择的课程
                let arr = this.packageData;
                for (let i=0;i<arr.length;i++) {
                    if(arr[i].ID === this.packageID  ){
                        this.courseData = arr[i].Courses;
                    }
                }
            },
            refreshEcharts() {
                let params = {
                    PatientAgentID: this.patientID,
                    PackageID: this.packageID,
                    CourseID: this.courseID
                }
                api.echartPackage(params)
                    .then( res => {
                        if (res.data.List.length === 0) {
                            this.$message.warning('该患者未完成评测')
                        } else {
                            this.dataReset();
                            this.dataProcessing(res.data.List);
                        }
                    })
                    .catch(err => {
                        this.$message.error('网络错误，请重试')
                    })
            },
            dataReset() {
                this.xData = [];
                this.titleData = [];
                this.seriesData = [];
                this.cpXData = [];
                this.cpSeriesData = [];
            },
            dataProcessing(arr) {
                let titleArr = []
                arr[0].History.forEach(function(ele,index) {
                    let str = '第' + String(index+1) + '次评测';
                    titleArr.push(str);
                })
                this.titleData = titleArr;

                let xData = [];
                arr.map( ele => {
                    xData.push(ele.Name)
                })
                this.xData = xData

                let length = this.titleData.length;
                let bigData = []

                for (let i=0;i<length;i++) {
                    let obj = {
                        name: '第' + String(i+1) + '次评测',
                        data: []
                    }
                    arr.map(function (ele) {
                        let score = ele.History[i].Score
                        obj.data.push(score)
                    })
                    bigData.push(obj)
                }
                this.seriesData = bigData;
                this.drawLineChart();
            },
            parseHistogramData(histogramData) {
                let cpXdata = histogramData[0].ExamData.map(function (ele) {
                    return ele.Name
                })

                let cpTitleData = histogramData.map(function (ele) {
                    return ele.PatientAgentID
                })
                let arr = this.selectPatientList;
                for (let i=0;i<arr.length;i++) {
                    for (let j=0;j<cpTitleData.length;j++) {
                        if (cpTitleData[i] === arr[j].ID) {
                            cpTitleData[i] = arr[j].Name;
                        }
                    }
                }
                let cpSeriesData = []
                for (let i=0;i<histogramData.length;i++) {
                    let obj = {
                        name: cpTitleData[i],
                        data: []
                    }
                    histogramData[i].ExamData.map(function (ele) {
                        let score = ele.History[0].Score
                        obj.data.push(score)
                    })
                    cpSeriesData.push(obj)
                }
                this.cpSeriesData = cpSeriesData;
                this.cpXData = cpXdata;
                this.drawHistogramChart();
            },
            submitCompate() {
                let selectPatientIDs = this.selectPatientList.map(function (ele) {
                    return ele.ID;
                })
                let params = {
                    ExamID: this.testPaperID,
                    PackageID: this.packageID,
                    CourseID: this.courseID,
                    PatientAgentIDs: selectPatientIDs
                }
                api.comparePatient(params)
                    .then(res => {
                        let resourseData = res.data.List;
                        //判断提示
                        let isEmplty;
                        resourseData.map(function (ele) {
                            if (ele.ExamData.length === 0) {
                                isEmplty = true;
                                return
                            }
                        })
                        if (isEmplty) {
                            this.$message.warning('患者未完成评测');
                        } else {
                            this.dataReset();
                            this.parseHistogramData(resourseData);
                        }
                    })
                    .catch( err => {
                        this.$message.error('网络错误，请重试')
                    })
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
        },
        mounted: function () {
            this.drawCharts()
        },
        updated: function () {
            this.drawCharts()
        }
    };
</script>
<style scoped>
    /*@import '../../../src/assets/css/template/print.css';*/

    .dataAnalysisBox {
        width: 100%;
        height: 626px;
        position: absolute
    }
    .slidebarOne {
        width: 94px;
        height: 626px;
        position: absolute;
        border-right: 1px solid #EFEFEF;
        background-color: #EEEFF0;
    }

    .slidebarOne li {
        width: 93px;
        height: 40px;
        text-align: center;
        line-height: 40px;
        cursor: pointer;
    }

    .contentOne {
        width: 1186px;
        height: 626px;
        position: absolute;
        left: 94px;
    }

    .slidebarOne .active {
        color: #48C4FC;
        border-left: 4px solid #48C4FC;
        background-color: #FEFFFF;
    }
    .center-content {
        width: 100%;
        height: 626px;
        padding: 5px 20px;
    }
    .chart-container {
        width: 100%;
        height: 572px;
    }
    .el-row {
        margin-bottom: 10px;
    }
    .el-row:last-child {
        margin-bottom: 0;
    }

    .el-col {
        border-radius: 4px;
    }
    .bg-purple-dark {
        /*background: #99a9bf;*/
    }
    .bg-purple {
        /*background: #d3dce6;*/
    }
    .bg-purple-light {
        /*background: #e5e9f2;*/
    }
    .grid-content {
        border-radius: 4px;
        min-height: 36px;
        line-height: 36px;
    }
    .row-bg {
        padding: 10px 0;
        background-color: #f9fafc;
    }
    .choseTitle {
        height: 36px;
        line-height: 36px;
        margin: 0 5px;
        font-size: 14px;
        font-weight: bold;
    }
</style>
