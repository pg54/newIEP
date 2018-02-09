<template>
    <el-dialog title="新增计划" v-model="planFormVisibilty" :close-on-click-modal="false" :show-close="false" size="large">

        <el-form ref="form" :model="planFormData" label-width="80px">

            <el-form-item label="标题">
                <el-input v-model="planFormData.Title"></el-input>
            </el-form-item>

            <el-form-item label="时间">
                <el-date-picker type="date" placeholder="选择日期" v-model="planFormData.StartDate"
                                style="width: 60%;"></el-date-picker>
            </el-form-item>

            <el-form-item label="课程">
                <div class="checkBoxWrap">
                    <el-checkbox-group v-model="checkBoxValues">
                        <el-checkbox v-for="item in courseData" :label="item.ID" class="courseCheckBox">{{ item.Name }}</el-checkbox>
                    </el-checkbox-group>
                </div>

            </el-form-item>

            <div v-show="!isPersonoal">
                <el-form-item label="学生">
                    <el-select v-model="planFormData.GroupID" placeholder="请选择小组" @change="getGourp">
                        <el-option
                                v-for="(item, index) in tabs"
                                :key="item.groupName"
                                :label=item.groupName
                                :value=item.groupID>
                        </el-option>
                    </el-select>

                </el-form-item>
            </div>

            <div v-show="isPersonoal">
                <el-form-item label="学生">
                    <el-select v-model="groupIndex" placeholder="请选择小组" @change="getGourp">
                        <el-option
                                v-for="(item, index) in tabs"
                                :key="item.groupID"
                                :label=item.groupName
                                :value=index>
                        </el-option>
                    </el-select>

                    <el-select v-model="studentID" placeholder="请选择患者">
                        <el-option
                                v-for="item in patientData"
                                :key="item.Name"
                                :label=item.Name
                                :value=item.ID>
                        </el-option>
                    </el-select>

                </el-form-item>
            </div>
        </el-form>

        <div slot="footer" class="dialog-footer">
            <el-button @click.native="planCancel()">返回</el-button>
            <el-button type="primary" @click.native="planSubmit()">提交</el-button>
        </div>
    </el-dialog>

</template>
<script>
import { getIEPCourses, modifyPlan} from '../api/api';
  export default {
    name: 'addPlanForm',
    computed: {
      planFormVisibilty: function () {
          console.log('重新计算是否可见');
          if (this.isPersonoal) {
              this.planFormData = {
                  ID: '',
                  Title: "",
                  Template: '',
                  Type: '',
                  StartDate: "",
                  Courses: [],
                  StudentID: '',
              };
          } else {
              this.planFormData = {
                  ID: '',
                  Title: "",
                  Template: '',
                  Type: '',
                  StartDate: "",
                  Courses: [],
                  GroupID: '',
              };
          }
        var isModify = this.$store.state.questionPaper.isModify;
        if (isModify) {
          this.planFormData = this.$store.state.questionPaper.formContent;
          console.log('课程对象');
          console.log(this.planFormData.Courses);
          let originCourse = this.planFormData.Courses;
          this.checkBoxValues = this.getCourseArray(originCourse);
          let arr =  this.tabs;
          let len = arr.length;
          for (let i=0;i<len;i++) {
            let innerArr = arr[i].groupPatients;
            let innerLen = innerArr.length;
            for (let j=0;j<innerLen;j++) {
              console.log(innerArr[j].ID);
              console.log(this.planFormData.StudentID);
              if (innerArr[j].ID === this.planFormData.StudentID ) {
                this.groupIndex = i;
                this.patientData = innerArr;
                this.studentID = innerArr[j].ID;
              } else {
                console.log('for循环嵌套查询失败')
              }
            }
          }
        }
        return this.$store.state.questionPaper.planFormVisibilty;
      },
      isPersonoal: function () {
        return this.$store.state.questionPaper.isPersonoal;
      }
    },
    data() {
      return {
        planFormData: {
          ID:'',
          Title: "",
          Template: '',
          Type: '',
          StartDate:"",
          Courses:[],
            GroupID: ''
        },
        courseData: [],
        patientData: [],
//          GroupIDItem: '',
        checkBoxValues: [],
        tabs: this.$store.state.mystudent.patientList,
        groupIndex: '',
        studentID: ''
      }
    },
    methods: {
      getCheckBoxContents() {
        getIEPCourses().then(res => {
          console.log('checkBox内容');
          console.log(res.data.List);
          this.courseData = res.data.List;
        });
      },
      getCourseArray(obj) {
        let arr =  Object.keys(obj);
        let newArr = [];
        for (let i=0;i<arr.length;i++) {
          let num = Number(arr[i]);
          newArr.push(num);
        }
        console.log('课程数组');
        console.log(newArr);
        return newArr;
      },
      getCheckboxValues() {
        console.log('checkbox选中的值');
        console.log(this.checkBoxValues);
      },
      getGourp(value) {
        this.patientData = this.tabs[value].groupPatients;
      },
      planCancel() {
        this.resetFormState();
      },
      planSubmit() {
          this.planFormData.Template = 0;
          if (this.isPersonoal) {
              this.planFormData.Type = 1;
            this.planFormData.StudentID = this.studentID;
          } else {
              this.planFormData.Type = 0;
          }
        this.planFormData.Courses = this.checkBoxValues;
          var params = this.planFormData;
          console.log('请求内容');
          console.log(params);
          modifyPlan(params).then(res => {
              console.log('增加结果是');
              console.log(res);
              if (res.Status) {
                this.$message.success(res.Message);
              } else {
                this.$message.error(res.Message);
              }
          });
        this.resetFormState();
      },
      resetFormState() {
        if (this.isPersonoal) {
          this.$store.dispatch('planFormNotPersonoal');
        }
        var isModify = this.$store.state.questionPaper.isModify;
        if (isModify) {
          console.log('恢复不是修改状态');
          this.$store.dispatch('notModify');
          this.groupIndex = '';
          this.studentID = '';
        }
        this.$store.dispatch('planFormINVisible');
        this.planFormData = {
          ID:'',
          Title: "",
          Template: '',
          Type: '',
          StartDate:"",
          Courses: [],
            GroupID: ''
        };
        this.checkBoxValues = [];
      }
    },
    created() {
      this.getCheckBoxContents();
    }
  };
</script>
<style scoped>
    .center-content {
        width: 1080px;
        margin: 32px;
    }
    .courseCheckBox {display: inline-block;width: 200px;box-sizing: border-box;padding: 0 auto}
    .checkBoxWrap{ display: block;width: 660px;padding-left: 40px}

</style>
