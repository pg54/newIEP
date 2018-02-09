/**
 * Created by pangang on 2017/4/26.
 */
import actions from './actions';
import mutations from './mutations';
export default {
  state: {
    questionsData: '',
    hasEdited: false,
    paperID: '',
    drProfile: '',//保存医生的个人信息
    companyNewsDataRec: '',
    companyNewsDataAll: '',
    industryNewsDataRec: '',
    industryNewsDataAll: '',
    platformNewsDataRec: '',
    platformNewsDataAll: '',
    eduDataRec: '',
    eduDataAll: '',
    articleDataRec: '',
    articleDataAll: '',
    trainingDataRec: '',
    trainingDataAll: '',
    addFormVisble: false,
    isModify: false,
    formContent: '',
    drIepPlanCollective: '',
    drIepPlanpersonal: '',
    planFormVisibilty: false,
    isPersonoal: false,
    planDetails: '',
    planItemDetails: '',
    courseDetails: '',
    lineID: '',
    showTeachingPlanTabsContent: true,//动态展示教学计划列表
    showPlanWrap: false,
    showPlanItemContent: false,
    showCourseContent: false,
    showPacientList: true,
    generalNewsStatus: true,  //显示新闻
    newsIframeStatus: false  //iframe显示单个新闻
  },
    getters: {
        doctorID: state => {
          return state.drProfile.ID;
        }
    },
  actions: actions,
  mutations: mutations
};
