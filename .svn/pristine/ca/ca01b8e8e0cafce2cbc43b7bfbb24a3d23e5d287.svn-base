<template>
  <div class="tabs">
    <div class="tabs-chose">
      <el-select v-model="groupValue" placeholder="请选择" @change="getPatientList">
        <el-option v-for="(item, index) in groups" :key="item.groupName" :label="item.groupName" :value="index">
        </el-option>
      </el-select>
        <ul class="groupPacients">
            <li v-for="(tab, index) in patientIDs" class="pacientLink" :class="{active : currentTab === index }" @click="selectedPatient(index)">
                {{tab.Name}}
            </li>
        </ul>
    </div>
    <div class="tabs-content">
      <vueTab :tabtitles="['咨询详情','评测管理','训练教学','随访反馈']" :curPage="1">
        <div class="tab-content-container">
          <div class="boxWrap" v-bind:class="{ showScroll: consultData.length > 3 }">

            <div class="toolBox" style="padding-top:10px">
              <span style="font-size:16px;">筛选:</span>
              <el-select v-model="time1" placeholder="请选择" style="width:130px" @change="time1Change">
                <el-option v-for="(item, index) in times" :key="item.ID" :label=item.Name :value=item.ID>
                </el-option>
              </el-select>
            </div>

            <div class="paperBox" v-for="(item, index) in consultData" :key="item.CreatedOn" @click="toPaper(item)">
              <div class="timebox">{{ item.CreatedOn.split(' ')[0] }}</div>
              <div class="contentBox">
                <div class="drInfo">
                  <div class="logoBox">
                    <img :src="item.DoctorLogo" alt="logo">
                  </div>
                  <div>
                    <p>医生:{{ item.DoctorName }}</p>
                  </div>
                  <div>
                    <p>{{ item.Name }}</p>
                  </div>
                </div>
              </div>
            </div>


          </div>
        </div>

        <div class="tab-content-container">
          <div v-if="resultPaperMiss">
            <div class="center-content">
              <el-card class="cardBox colorHeader" :body-style="{ padding: '0px'}" style="height: 573px">
                <div class="tableWrap">
                  <el-table :data="assessmentData" style="width: 100%">
                    <el-table-column type="index" width="70">
                    </el-table-column>

                    <el-table-column prop="ExamName" label="评测名称" >
                    </el-table-column>

                      <el-table-column prop="PackageName" label="课程" >
                      </el-table-column>

                      <!--<el-table-column prop="Summary" label="总结" >-->
                      <!--</el-table-column>-->

                      <el-table-column prop="Summary" label="总结"  width="330px">
                          <template scope="scope">
                              <span v-if="scope.row.Summary && scope.row.Summary.length < 20">{{scope.row.Summary}}</span>
                              <el-tooltip v-if="scope.row.Summary && scope.row.Summary.length >= 20" style="width: 400px" effect="light" placement="left-start">
                                  <div slot="content" v-html="setContent(scope.row.Summary)"></div>
                                  <span>{{scope.row.Summary.substr(0,20) + '...'}} </span>
                              </el-tooltip>
                          </template>
                      </el-table-column>

                      <el-table-column prop="Status" label="状态">
                          <template scope="scope">
                              <span>{{scope.row.Status?'已完成':'未完成'}}</span>
                          </template>
                      </el-table-column>

                    <!--<el-table-column prop="Sex" label="性别" >-->
                      <!--<template scope="scope">-->
                        <!--<span>{{scope.row.Sex?'男':'女'}}</span>-->
                      <!--</template>-->
                    <!--</el-table-column>-->
                      <el-table-column label="操作">
                          <template scope="scope">
                              <el-button size="small" :plain="true" type="info" @click="assessmentDetail(scope.$index, scope.row, true)">评估结果</el-button>
                              <!--<el-button size="small" type="danger" @click="checkPacientTestReport(scope.$index, scope.row)">查看评估报告</el-button>-->
                          </template>
                      </el-table-column>

                  </el-table>
                </div>
                <el-pagination layout="prev, pager, next" @current-change="assessmentPaperListChange" :page-size="10" :total="assessmentPaperTotal" style="float:right;"></el-pagination>
              </el-card>
            </div>
          </div>
          <div v-else>
            <div class="resultPaperWrap">
              <resultPaper :paticentID="TestPaticentID" :testID="TesttestID" :isComplete="testComplete"></resultPaper>
              <el-button @click="resultPaperMiss = true" style="position: absolute;right: 100px;bottom: 10px;z-index: 15">返回</el-button>
            </div>
          </div>
        </div>

        <div class="tab-content-container">
          <div class="boxWrap" v-bind:class="{ showScroll: trainingData.length > 3 }">
            <div class="toolBox" style="padding-top:10px">
              <span style="font-size:16px;">筛选:</span>
              <el-select v-model="time2" placeholder="请选择" style="width:130px" @change="time2Change">
                <el-option v-for="(item, index) in times" :key="item.ID" :label=item.Name :value=item.ID>
                </el-option>
              </el-select>
            </div>
            <div class="paperBox" v-for="(item, index) in trainingData" :key="item.CreatedOn" @click="toPaper(item)">
              <div class="timebox">{{ item.CreatedOn.split(' ')[0] }}</div>
              <div class="contentBox">
                <div class="drInfo">
                  <div class="logoBox">
                    <img :src="item.DoctorLogo" alt="logo">
                  </div>
                  <div>
                    <p>医生:{{ item.DoctorName }}</p>
                  </div>
                  <div>
                    <p>{{ item.Name }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="tab-content-container">
          <div class="boxWrap" v-bind:class="{ showScroll: feedbackData.length > 3 }">
            <div class="toolBox" style="padding-top:10px">
              <span style="font-size:16px;">筛选:</span>
              <el-select v-model="time3" placeholder="请选择" style="width:130px" @change="time3Change">
                <el-option v-for="(item, index) in times" :key="item.ID" :label=item.Name :value=item.ID>
                </el-option>
              </el-select>
            </div>
            <div class="paperBox" v-for="(item, index) in feedbackData" :key="item.CreatedOn" @click="toPaper(item)">
              <div class="timebox">{{ item.CreatedOn.split(' ')[0] }}</div>
              <div class="contentBox">
                <div class="drInfo">
                  <div class="logoBox">
                    <img :src="item.DoctorLogo" alt="logo">
                  </div>
                  <div>
                    <p>医生:{{ item.DoctorName }}</p>
                  </div>
                  <div>
                    <p>{{ item.Name }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </vueTab>
    </div>

    <el-dialog v-model="previewFormVisible" size="small">
      <div class="paperContent">
        <QuestionPaper></QuestionPaper>
      </div>
      <div slot="footer" class="dialog-footer">
        <el-button @click.native="closeQuestionPaper">返回</el-button>
      </div>
    </el-dialog>

  </div>
</template>
<script>
import { patientRecoveryHistory, paperDetails, requestTestMembers, getPaperResult } from '../../api/api';
import QuestionPaper from '../../components/QuestionPaper.vue';
import vueTab from '../../components/vue-tab.vue';
import resultPaper from '../../components/resultPaper.vue';
export default {
  name: 'mystudentTrack',
  components: {
    QuestionPaper,
    vueTab,
    resultPaper
  },
  computed: {
    groups: function () {
      return this.$store.state.mystudent.patientList;
    }
  },
  data() {
    return {
      times: [{ ID: 1, Name: '最近一周' }, { ID: 2, Name: '最近一个月' }, { ID: 3, Name: '最近三个月' }, { ID: 4, Name: '最近半年' }, { ID: 5, Name: '最近一年' }],
      time1: 1,
      time2: 1,
      time3: 1,
      previewFormVisible: false,
      groupValue: '',
      patientIDs: [],
      currentTab: 0,
      activeName: 'first',
      consultData: [], // 咨询详情
      evaluationData: [], // 评测管理
      trainingData: [], // 训练教学
      feedbackData: [], // 随访反馈
      assessmentPaperTotal: 1, //评测总的页数
      assessmentCurrentPage: 1, //评测当前的页数
      assessmentData: [], //评测的数据
      currentPaticentID: '', //当前选中的患者ID
      resultPaperMiss: true, //切换评测列表和评测结果页面
      TesttestID: '',
      TestPaticentID: '',
      testComplete: false
    };
  },
  methods: {
    time1Change(id) {

      this.requestRecoveryHistory(this.currentPaticentID, 1, this.time1);
    },
    time2Change(id) {

      this.requestRecoveryHistory(this.currentPaticentID, 3, this.time2);
    },
    time3Change(id) {

      this.requestRecoveryHistory(this.currentPaticentID, 4, this.time3);
    },

    selectedPatient(index) {
      this.currentTab = index;
      this.time1 = 1;
      this.time2 = 1;
      this.time3 = 1;
      this.currentPaticentID = this.patientIDs[index].ID;
      var id = this.patientIDs[index].ID;

      this.requestRecoveryHistory(id, 1, this.time1);
      this.requestRecoveryHistory(id, 3, this.time2);
      this.requestRecoveryHistory(id, 4, this.time3);

      //评测详情换新的接口
      this.requestAssessment(1);
    },
    requestRecoveryHistory(patientID, type, time) {
      let params = {
        id: patientID,
        type: type,
        pageIndex: 1,
        pageSize: 9999,
        time: time
      };
      patientRecoveryHistory(params).then(res => {
        if (type === 1) {
          this.consultData = res.Records;
        } else if (type === 3) {
          this.trainingData = res.Records;
        } else if (type === 4) {
          this.feedbackData = res.Records;
        }
      }).catch(err => {
        this.$message.error('获取数据失败,请稍后重试！');
      });

    },
    getPatientList(value) {
      this.patientIDs = this.groups[value].groupPatients;
    },
    toPaper(item) {
      getPaperResult(item.ID).then(res => {
        if (res.data) {
          this.$store.dispatch('addPaper', res.data);
          this.previewFormVisible = true;
        } else {
          this.$message.warning('默认服务');
        }
      });
    },
    closeQuestionPaper() {
      this.previewFormVisible = false;
      this.$store.dispatch('addPaper', '');
    },
    assessmentDetail(index, row, isComplete) {
      this.TesttestID = row.ID;
      this.TestPaticentID = row.PatientAgentID;
      this.testComplete = isComplete;
      this.resultPaperMiss = false;
    },
    requestAssessment(pageIndex) {
      let patientId = this.currentPaticentID;
      let params = {
        PatientAgentID: patientId,
        PageIndex: pageIndex,
        PageSize: 10
      };
      requestTestMembers(params).then(res => {
        this.assessmentData = res.Records;
        this.assessmentPaperTotal = res.Total;
      });
    },
    assessmentPaperListChange(currentPage) {
      this.assessmentCurrentPage = currentPage;
      this.requestAssessment(this.assessmentCurrentPage);
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
    this.groupValue = 0;
    this.getPatientList(0);
    this.selectedPatient(0);
  }
};
</script>
<style scoped>
.tabs {
  width: 100%;
  height: 626px;
  position: absolute
}

.tabs-chose {
  position: absolute;
  width: 95px;
  height: 626px;
  background-color: #EEEFF0;
  border-right: 1px solid #EFEFEF;
}
.groupPacients {
    width: 94px;
    height: 590px;
    overflow: scroll;
}

.tabs-content {
  position: absolute;
  left: 95px;
  top: 0;
  width: 1186px;
  height: 626px;
}

.tabs-chose li {
  width: 94px;
  height: 40px;
  text-align: center;
  line-height: 40px;
  cursor: pointer;
}

.tabs-chose .active {
  color: #48C4FC;
  border-left: 4px solid #48C4FC;
  background-color: #FEFFFF;
}

.boxWrap {
  width: 100%;
  height: 580px;
}

.showScroll {
  overflow-y: scroll
}

.toolBox {
  width: 1130px;
  height: 50px;
  margin: 10px 28px;
}

.paperBox {
  position: relative;
  width: 754px;
  height: 126px;
  border-left: 1px dotted #30BCFC;
  margin: 18px auto;
  cursor: pointer
}

.timebox {
  position: absolute;
  width: 100px;
  height: 24px;
  left: -20px;
  top: 26px;
  background-color: #30BCFC;
  text-align: center;
  line-height: 24px;
  -webkit-border-radius: 4px;
  -moz-border-radius: 4px;
  border-radius: 4px;
  color: #F6F6F6;
}

.contentBox {
  position: absolute;
  top: 0;
  right: 0;
  width: 643px;
  height: 112px;
  background-color: #E7F8FF;
  -webkit-border-radius: 6px;
  -moz-border-radius: 6px;
  border-radius: 6px;
}

.logoBox>img {
  display: block;
  width: 30px;
  height: 30px;
  -webkit-border-radius: 15px;
  -moz-border-radius: 15px;
  border-radius: 15px;
}

.contentHeader {
  height: 20px;
  background-color: #3BBDF9;
  -webkit-border-radius: 6px 6px 0 0;
  -moz-border-radius: 6px 6px 0 0;
  border-radius: 6px 6px 0 0;
}

.contentHeader p {
  margin-left: 20px
}

.drInfo {
  width: 100%;
  height: 96px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column
}

.pacientLink {
  cursor: pointer
}

.center-content {
  width: 1080px;
  height: 583px;
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

.resultPaperWrap {
  position: relative;
}
</style>
