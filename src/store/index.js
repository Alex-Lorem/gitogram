import { createStore } from 'vuex'
import trendings from './modules/trendings'
import readme from './modules/readme'
import auth from './modules/auth'
import starred from './modules/starred'
import issues from './modules/issues'
import repos from './modules/repos'

export default createStore({
  getters: {
    getUnstarredOnly (state) {
      return state.trendings.data.filter((trendingsRepo) => !state.starred.data.some((starredRepo) => trendingsRepo.id === starredRepo.id))
    }
  },
  modules: { trendings, readme, auth, starred, issues, repos }
})
