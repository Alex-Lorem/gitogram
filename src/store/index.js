import { createStore } from 'vuex'
import trendings from './modules/trendings'
import readme from './modules/readme'
import auth from './modules/auth'
import starred from './modules/starred'
import issues from './modules/issues'

export default createStore({
  modules: { trendings, readme, auth, starred, issues }
})
