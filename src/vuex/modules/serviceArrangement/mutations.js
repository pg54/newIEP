/**
 * Created by Administrator on 2017/9/5 0005.
 */
import * as types from '../../mutation_type';

export default {
    [types.CHECK_PAPER_RESULT](state, paperID) {
        state.checkPaperID = paperID;
    },
    [types.GET_TEMPLATE_TYPE](state, temType) {
        state.templateType = temType;
    },
    [types.SET_TEST_PATICENTID](state, testPaticentID) {
        state.testPaticentID = testPaticentID;
    },
    [types.SET_TEST_ID](state, testID) {
        state.testID = testID;
    },
    [types.SET_TEST_ISCOMPLETE](state, testIsComplete) {
        state.testIsComplete = testIsComplete;
    },
    [types.SET_CPEP_DATA](state, cpepData) {
        state.cpepData = cpepData;
    },
    [types.SET_CPEP_PATIENT](state, cpepPacientID) {
        state.cpepPacientID = cpepPacientID;
    },
    [types.SET_CPEP_ISRESULTPAGE](state, cpepIsResultPage) {
        state.cpepIsResultPage = cpepIsResultPage;
    },
    [types.SET_CPEP_ISFIRSTTIMETEST](state, cpepIsFirstTimeTest) {
        state.cpepIsFirstTimeTest = cpepIsFirstTimeTest;
    },
    [types.SET_CPEP_MEMBERID](state, cpepMemberID) {
        state.cpepMemberID = cpepMemberID;
    },
}


