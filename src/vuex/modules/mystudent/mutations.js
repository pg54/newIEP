
import * as types from '../../mutation_type';

export default {

  [types.RECORD_GROUPINFO](state, data) {
    state.patientList = '';
    state.patientList = data;
  },


  [types.EMPTY_GROUPINFO](state) {
    if (state.patientList.length) {
      state.patientList.length = 0;
    }
  },

  [types.SET_CURRENT_PATIENTID](state, id) {
    state.currentPatientId = id;
  },
 [types.SET_FULL_FUCTION](state, full) {
    state.isfullFuction = full;
  },
    [types.SET_CPEP_TESTID](state, cpTestID) {
        state.cpepTestID = cpTestID;
    },
    [types.SET_CURRENT_PATIENTID_DEPT](state, obj) {
        state.patientDeptObj = obj;
    },


};
