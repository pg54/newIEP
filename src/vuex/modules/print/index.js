/**
 * Created by pangang on 2017/4/23.
 */
import actions from './actions';
import mutations from './mutations';
export default {
    state: {
        printPaperTitle: null, //打印页面的类型
        printPaperPackageName: null, //课程包名称
        iepMouth: null, //IEP的月份
    },
    actions: actions,
    mutations: mutations,
};
