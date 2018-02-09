/**
 * Created by Administrator on 2017/9/5 0005.
 */
import * as types from '../../mutation_type';
export default {
    setPaperID({commit}, paperID) {
        commit(types.CHECK_PAPER_RESULT, paperID);
    },
    setTemplateType({commit}, temType) {
        commit(types.GET_TEMPLATE_TYPE, temType);
    },
    setTestPaticentID({commit}, testPaticentID) {
        commit(types.SET_TEST_PATICENTID, testPaticentID);
    },
    setTESTID({commit}, testID) {
        commit(types.SET_TEST_ID, testID);
    },
    setTESTISCOMPLETE({commit}, testIsComplete) {
        commit(types.SET_TEST_ISCOMPLETE, testIsComplete);
    },

    setcpepData({commit}, cpepData) {
        commit(types.SET_CPEP_DATA, cpepData);
    },
    setcpepPacientID({commit}, cpepPacientID) {
        commit(types.SET_CPEP_PATIENT, cpepPacientID);
    },
    setcpepIsResultPage({commit}, cpepIsResultPage) {
        commit(types.SET_CPEP_ISRESULTPAGE, cpepIsResultPage);
    },
    setcpepIsFirstTimeTest({commit}, cpepIsFirstTimeTest) {
        commit(types.SET_CPEP_ISFIRSTTIMETEST, cpepIsFirstTimeTest);
    },
    setcpepMemberID({commit}, cpepMemberID) {
        commit(types.SET_CPEP_MEMBERID, cpepMemberID);
    },
}
