/**
 * Created by pangang on 2017/4/22.
 */
import Vue from 'vue';
import Vuex from 'vuex';
import login from './modules/login';
import mystudent from './modules/mystudent/index';
import questionPaper from './modules/questionPaper/index';
import serviceArrangement from './modules/serviceArrangement/index';
import printPaper from './modules/print/index';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
      login,
      mystudent,
      questionPaper,
      serviceArrangement,
      printPaper
  }
});
