
import * as types from '../../mutation_type';

export default {
  [types.SET_PRINTPAPER_TITLE](state, title) {
    state.printPaperTitle = title;
  },
  [types.SET_PRINTPAPER_PACKAGENAME](state, title) {
    state.printPaperPackageName = title;
  },
  [types.SET_PRINTPAPER_MOUTHS](state, mouth) {
    state.iepMouth = mouth;
  },
};
