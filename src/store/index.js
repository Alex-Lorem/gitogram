import { createStore } from 'vuex'
import trendings from './modules/trendings'
import readme from './modules/readme'
import auth from './modules/auth'
export default createStore({
  modules: { trendings, readme, auth }
})
