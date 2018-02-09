/**
 * Created by Administrator on 2017/9/5 0005.
 */
import actions from './actions';
import mutations from './mutations';
export default {
    state: {
        checkPaperID: '', //问卷填写结果ID
        templateType: '', //template类型
        
        // resultPaper和reportPaper公用
        testPaticentID: '',
        testID: '',
        testIsComplete: false,
        //serviceCPEP
        cpepData: '',
        cpepPacientID: '',
        cpepIsResultPage: '',
        cpepIsFirstTimeTest: '',
        cpepMemberID: '',
    },
    actions: actions,
    mutations: mutations
};
