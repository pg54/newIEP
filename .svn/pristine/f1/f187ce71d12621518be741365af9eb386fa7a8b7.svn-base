<template>
    <div class="iepScheduleBox">
        <div class="pageNavbar">
            <span style="color: black">当前位置&nbsp;&nbsp;>&nbsp;&nbsp;</span>
            <span style="color: black">课程表&nbsp;&nbsp;>&nbsp;&nbsp;</span>
        </div>
        <div class="scheduleBox">
            <div v-show="!scheduleAddVisible">
                <div class="toolArea">
                    <el-button @click="addScheduleItem">添加课程</el-button>
                </div>
                <el-card  class="cardBox colorHeader" :body-style="{ padding: '0px'}">
                    <div class="tableWrap">
                        <el-table :data="scheduleData" style="width: 100%">
                            <el-table-column type="index" width="50">
                            </el-table-column>

                            <el-table-column prop="Name" label="名称" width="180">
                            </el-table-column>


                            <el-table-column prop="CreatedOn" label="创建时间">
                            </el-table-column>

                            <el-table-column label="操作">
                                <template scope="scope">
                                    <el-button size="small" :plain="true" type="info" @click="checkSchedule(scope.$index, scope.row)">详情</el-button>
                                    <el-button size="small" :plain="true" type="warning" @click="modifySchedule(scope.$index, scope.row)">修改</el-button>
                                    <el-button size="small" :plain="true" type="danger" @click="toDeleteSchedule(scope.$index, scope.row)">删除</el-button>
                                </template>
                            </el-table-column>
                        </el-table>
                    </div>
                    <el-pagination layout="prev, pager, next" @current-change="schedulePageChange" :page-size="10" :total="scheduleTotal" style="float:right;"></el-pagination>
                </el-card>
            </div>

            <div v-show="scheduleAddVisible">
                <div class="formWrap" :class="{checkCenter: onlyCheck}">
                    <el-form :inline="true" ref="form" :model="scheduleAddForm" label-width="80px" >
                        <el-form-item label="课程名称">
                            <!--<el-row :gutter="20">-->
                                <!--<el-col :span="13">-->
                                    <el-input v-model="scheduleAddForm.Name"  style="width: 300px" placeholder="请输入课程名称" :disabled="onlyCheck"></el-input>
                                <!--</el-col>-->
                            <!--</el-row>-->
                        </el-form-item>


                        <el-form-item v-if="!onlyCheck" label="课程时间">
                            <el-time-picker
                                is-range
                                format="HH:mm"
                                v-model="addTime"
                                :picker-options="{selectableRange: '08:00:00 - 20:30:00'}"
                                placeholder="选择时间范围">
                            </el-time-picker>
                            <el-button @click="addSchedulePeriod">增加时间段</el-button>


                        </el-form-item>
                    </el-form>
                    <div class="scheduleCells">
                        <div class="headWrap">
                            <div class="headItem">时间</div>
                            <div class="headItem">
                                周一
                            </div>
                            <div class="headItem">
                                周二
                            </div>
                            <div class="headItem">
                                周三
                            </div>
                            <div class="headItem">
                                周四
                            </div>
                            <div class="headItem">
                                周五
                            </div>
                            <div class="headItem" v-if="!onlyCheck">
                                操作
                            </div>
                        </div>
                        <div class="blcokWrap" v-for="(item, index) in schedulePeriod">
                            <div class="blockItem">
                                <p class="timeMark">{{ item.Time }}</p>
                            </div>
                            <div class="blockItem">

                                <div class="angleBlock" :class="{courseTag: item.Mon}">
                                    <textarea class="onc-textarea"
                                              :disabled="onlyCheck"
                                              placeholder="请输入内容"
                                              v-model="item.Mon"
                                    ></textarea>
                                </div>

                            </div>
                            <div class="blockItem">

                                <div class="angleBlock" :class="{courseTag: item.Tue}">
                                    <textarea class="onc-textarea"
                                              :disabled="onlyCheck"
                                              placeholder="请输入内容"
                                              v-model="item.Tue"
                                    ></textarea>
                                </div>
                            </div>
                            <div class="blockItem">

                                <div class="angleBlock" :class="{courseTag: item.Wed}">
                                    <textarea class="onc-textarea"
                                              :disabled="onlyCheck"
                                              placeholder="请输入内容"
                                              v-model="item.Wed"
                                    ></textarea>
                                </div>

                            </div>
                            <div class="blockItem">

                                <div class="angleBlock" :class="{courseTag: item.Thu}">
                                    <textarea class="onc-textarea"
                                              :disabled="onlyCheck"
                                              placeholder="请输入内容"
                                              v-model="item.Thu"
                                    ></textarea>
                                </div>

                            </div>
                            <div class="blockItem">
                                <div class="angleBlock" :class="{courseTag: item.Fri}">
                                    <textarea class="onc-textarea"
                                              :disabled="onlyCheck"
                                              placeholder="请输入内容"
                                              v-model="item.Fri"
                                    ></textarea>
                                </div>
                            </div>
                            <div class="blockItem" v-if="!onlyCheck" style="background-color: #efefef;padding: 30px 20px">
                                <div style="width: 100%;height: 100%;display: flex;justify-content: center;align-items: center;background-color: #ffffff">
                                    <el-button @click.native.prevent="editgo(index, item)" :plain="true" type="warning" size="large">
                                        <i class="el-icon-edit"></i>
                                    </el-button>
                                    <el-button @click.native.prevent="deleteRow(index, item)" :plain="true" type="danger" size="large">
                                        <i class="el-icon-delete"></i>
                                    </el-button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <el-dialog :visible.sync="dialogTableVisible">
                    <el-row :gutter="20">

                        <el-time-picker
                            is-range
                            format="HH:mm"
                            v-model="editTime"
                            :picker-options="{selectableRange: '08:00:00 - 20:30:00'}"
                            placeholder="选择时间范围">
                        </el-time-picker>
                        <span>{{ editClassStart }}</span>
                        <el-button @click="confirmNewDate">确认新的时间</el-button>
                    </el-row>
                </el-dialog>
                <div class="footer" :class="{footerChecke: onlyCheck}">
                    <el-button @click.native="backToList">返回</el-button>
                    <el-button type="primary" v-if="!onlyCheck" @click="submitThenJump()">提交课程</el-button>
                </div>

            </div>
        </div>
    </div>
</template>
<script>
    import api from '../../../api/index.js';
    export default {
        name: 'iepSchedule',
        data() {
            return {
                scheduleAddVisible: false, //切换添加课程表弹窗
                modifySchuleID: '',
                scheduleAddForm: {
                    ID: '',
                    Name: '',
                    Lines: [],
                },
                days: [],
                schedulePeriod: [],
                scheduleData: [],
                scheduleTotal: 1,
                scheduleCurrentPage: 1,
                addTime: '',
                classStop: '',
                dialogTableVisible: false,
                editTime: [],
                editClassStart: '',
                editClassStop: '',
                timeIndex: 1,
                onlyCheck: false,
                fllowTimer: '',
                startTimeRange: [],
                endTimeRange: []
            };
        },
        computed: {
        },
        methods: {
            addScheduleItem() {
                this.scheduleAddVisible = true
                this.onlyCheck = false;
            },
            checkSchedule(index, row) {
                let id = row.ID;
                api.scheduleContent(id).then(res => {
                    this.scheduleAddVisible = true;
                    this.scheduleAddForm = res.data;
                    this.schedulePeriod = this.scheduleAddForm.Lines;
                    this.onlyCheck = true;
                });
            },
            modifySchedule(index, row) {
                this.modifySchuleID = row.ID;
                this.scheduleAddView()
                this.scheduleAddVisible = true;
                this.onlyCheck = false;
            },
            scheduleAddView() {
                api.scheduleContent(this.modifySchuleID).then(res => {
                    let arry = res.data.Lines.map(ele => ele.Time)
                    this.parseTimeRange(arry)
                    this.scheduleAddForm = res.data;
                    delete this.scheduleAddForm.CreatedOn;
                    for (let i=0;i<this.scheduleAddForm.Lines.length;i++) {
                        delete this.scheduleAddForm.Lines[i].ScheduleID;
                        delete this.scheduleAddForm.Lines[i].Sat;
                        delete this.scheduleAddForm.Lines[i].Sun;
                    }
                    this.schedulePeriod = this.scheduleAddForm.Lines;
                })
            },
            parseTimeRange(timeArry) {
              let a = timeArry.map(ele => ele.split(`~`));
              let startT = []
              let endT = []
              for (let i = 0;i < a.length;i++) {
                startT.push(a[i][0])
                endT.push(a[i][1])
              }
              this.startTimeRange = startT.map(ele => this.tranToSecond(ele));
              this.endTimeRange = endT.map(ele => this.tranToSecond(ele))
            },
            tranToSecond(str) {
                let a = str.split(':')[0];
                if (a.split('')[0] === '0') {
                    a = a.split('')[1]
                }
                let b = str.split(':')[1].split('')[0];
                let c = str.split(':')[1].split('')[1];
                return parseInt(a)*3600 + parseInt(b)*10*60 + parseInt(c)
            },
            toDeleteSchedule(index, row) {
                let id = row.ID;
                api.deleteSchedule(id).then(res => {
                    if (res.data.Code === 0) {
                        this.rquestBaseData(this.scheduleCurrentPage);
                    }
                });
            },
            addSchedulePeriod() {
                let classStartStr = this.lessTen(this.addTime[0].getHours()) + ':' + this.lessTen(this.addTime[0].getMinutes())
                let classStopStr = this.lessTen(this.addTime[1].getHours()) + ':' + this.lessTen(this.addTime[1].getMinutes())
                let resultStr = classStartStr + '~' + classStopStr;
                //先确认课程表时间是否正确，然后按照时间先后顺序重新排序
                if (this.checkNewTimeValid(resultStr)) {
                    this.schedulePeriod.push(
                        {
                            Time: resultStr,
                            Mon: '',
                            Tue: '',
                            Wed: '',
                            Thu: '',
                            Fri: '',
                        }
                    );
                    this.addTime = []
                    // this.scheduleSubmit()
                } else {
                  this.$message.warning('课程时间冲突，请选择正确的时间')
                }

            },
            editgo(index,item) {
                this.dialogTableVisible = true;
                let now = new Date()
                let t1 = new Date(now.getFullYear(),now.getMonth(),now.getDay(),item.Time.split('~')[0].split(':')[0],item.Time.split('~')[0].split(':')[1]);
                let t2 = new Date(now.getFullYear(),now.getMonth(),now.getDay(),item.Time.split('~')[1].split(':')[0],item.Time.split('~')[1].split(':')[1]);
                this.editTime = []
                this.editTime.push(t1,t2)
                this.timeIndex = index
            },
            confirmNewDate() {
                let classStartStr = this.lessTen(this.editTime[0].getHours()) + ':' + this.lessTen(this.editTime[0].getMinutes())
                let classStopStr = this.lessTen(this.editTime[1].getHours()) + ':' + this.lessTen(this.editTime[1].getMinutes())
                let resultStr = classStartStr + '~' + classStopStr;
                this.schedulePeriod[this.timeIndex].Time = resultStr;
                this.editTime = [];
                this.dialogTableVisible = false;
            },
            lessTen(num) {
                if (num < 10 ) {
                    return '0' + num
                } else {
                    return '' + num
                }
            },
            deleteRow(index,item) {
                this.schedulePeriod.splice(index,1);
                this.scheduleSubmit()
            },
            schedulePageChange(currentPage) {
                this.scheduleCurrentPage = currentPage;
                this.rquestBaseData(this.scheduleCurrentPage);
            },
            scheduleSubmit() {
                this.scheduleAddForm.Lines = this.schedulePeriod;
                api.addSchedule(this.scheduleAddForm).then(res => {
                    if (res.data.Code === 0) {
                        this.scheduleAddView();
                        this.$message.success('成功');
                    } else {
                        this.$message.warning('失败');
                    }
                });
            },
            submitThenJump() {
                this.scheduleSubmit()
                this.scheduleAddVisible = false;
                this.rquestBaseData(this.scheduleCurrentPage);
            },
            backToList() {
                this.resetScheduleForm();
                this.scheduleAddVisible = false;
                this.onlyCheck = false;
            },
            handleInputConfirm() {

            },
            resetScheduleForm() {
                this.scheduleAddForm = { ID: '', Name: '',Lines: []};
                this.schedulePeriod = [];
            },
            outputFormatDay(foo,str) {
                switch (str) {
                    case '周一':
                        foo.Mon = '周一'
                        break;
                    case '周二':
                        foo.Tue = '周二'
                        break;
                    case '周三':
                        foo.Wed =  '周三'
                        break;
                    case '周四':
                        foo.Thu =  '周四'
                        break;
                    case '周五':
                        foo.Fri = '周五'
                        break;
                }
                return foo;
            },
            rquestBaseData(index) {
                let params = {
                    pageIndex: index,
                    pageSize: 10
                }
                api.scheduleList(params).then(res => {
                    this.scheduleData = res.data.Records;
                    this.scheduleTotal = res.data.Total;
                });
            },
            initData() {
                this.rquestBaseData(1);
                this.tranToSecond('08:40')
            },
            checkNewTimeValid(time) {
              time =  time.split(`~`).map(ele => this.tranToSecond(ele));
                if ( this.startTimeRange.length === 0) {
                  return true;
                }
                else if (time[1] < this.startTimeRange[0]) {
                    return true
                }
                else if (time[0] > this.endTimeRange[this.endTimeRange.length - 1]) {
                    return true
                }
                else if (this.timeInMiddle(time)) {
                    return true
                } else {
                    return false
                }
            },
            timeInMiddle(time) {
              let anchor;
              for (let i = 0;i< this.endTimeRange.length;i++) {
                 if (time[0] > this.endTimeRange[i]) {
                   return anchor = i;
                 }
              }
              if (this.startTimeRange[anchor+1] > time[1]) {
                return true
              }  else {
                return false
              }
            }
        },
        components: {
        },
        created() {
            this.initData()
        }
    };
</script>
<style scoped>
    .iepScheduleBox {
        position: relative;
        width: 100%;
        height: 100%;
    }
    .pageNavbar {
        position: absolute;
        left: -94px;
        top: 0;
        width: 1280px;
        height: 42px;
        border-bottom: 1px solid #cccccc;
    }
    .scheduleBox {
        position: absolute;
        left: 0;
        top: 43px;
        width: 1185px;
        height: 583px;
    }
    .pageNavbar span {
        font-size: 16px;
        cursor: pointer;
        line-height: 42px;
    }
    .pageNavbar span:hover {
        color: rgb(66, 171, 216);
    }
    .cardBox {
        width: 1080px;
        height: 530px;
        margin: 5px auto 0;
    }
    .colorHeader {
        border-top: 4px solid RGBA(49, 187, 252, 1.00)
    }
    .tableWrap {
        width: 100%;
        height: 490px;
    }
    .blcokWrap {
        display: flex;
        width: 100%;
        height: 134px;
        overflow: hidden;
    }
    .blockItem {
        width: 160px;
        height: 134px;
        line-height:1;
        display: inline-block;
        border: 1px solid #cccccc;
        border-left: none;
        border-top: none;
        margin: 0;
        padding: 0;
        overflow: hidden;
    }
    .blockItem:nth-child(7) {
        width: 180px;
        border-right: none;
    }
    .scheduleCells {
        width: 1140px;
        height: 460px;
        border: 1px solid #cccccc;
        -webkit-border-radius:6px;
        -moz-border-radius:6px;
        border-radius:6px;
        /*border-right: none;*/
        overflow-y: scroll;
    }
    .headWrap {
        width: 100%;
        height: 46px;
        display: flex;
        overflow: hidden;
    }
    .headItem {
        display: inline-flex;
        color: #ffffff;
        width: 160px;
        height: 46px;
        background-color: #388ef6;
        box-sizing: border-box;
        justify-content: center;
        align-items: center;
        font-size: 16px;
        font-weight: bold;
        border: 1px solid #cccccc;
        border-left: none;
        border-top: none;
    }
    .headItem:nth-child(7) {
        width: 180px;
    }
    .timeMark {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: bold;
        font-size: 16px;
        color: #333333;
        background-color: #efefef;
    }

    .formWrap {
        width: 100%;
        height: 533px;
        margin-top: 10px;
        padding-left: 22px;
        box-sizing: border-box;
    }

    .checkCenter {
        padding-left: 112px;
    }
    .checkCenter .scheduleCells {
        width: 960px;
    }
    .footer{
        width: 1140px;
        height: 40px;
        display: flex;
        overflow: hidden;
        margin: 0 auto;
        justify-content: flex-end;
        align-items: center;
        /*padding-right: 50px;*/
    }
    .footerChecke {
        width: 960px;
    }
    .toolArea {
        display: flex;
        justify-content: flex-end;
        width: 1080px;
        margin: 5px auto;
    }

    .angleBlock {
        position: relative;
        width: 154px;
        height: 128px;
        margin: 3px;
        background: #FFE69A;
        background:
            linear-gradient(-45deg, transparent 15px, #FFE69A 0);
        /*-webkit-transition: background-color 1.4s linear;*/
        /*-moz-transition: background-color 1.4s linear;*/
        /*-ms-transition: background-color 1.4s linear;*/
        /*-o-transition: background-color 1.4s linear;*/
        /*transition: background-color 1.4s linear;*/
    }
    .angleBlock:after {
        content: '';
        position: absolute;
        width: 6px;
        height: 6px;
        -webkit-border-radius:60%;
        -moz-border-radius:60%;
        border-radius: 60%;
        bottom: 3px;
        right: 3px;
        background-color: #FFE69A;
    }
    .courseTag {
        background: #FFCD36;
        background:
            linear-gradient(-45deg, transparent 15px, #FFCD36 0);
    }
    .courseTag:after {
        background-color: #FFCD36;
    }
    .onc-textarea {
        width: 154px;
        height: 128px;
        background-color: inherit;
        color: white;
        font-size: 16px;
        overflow:auto;
        background-attachment:   fixed;
        background-repeat:   no-repeat;
        border-style:   solid;
        border-color:   #FFFFFF;
        resize:none;
        padding: 8px;
    }
</style>
