import { createStore } from 'vuex'

export default createStore({
  state: {
    act_course: 'free'
  },
  mutations: {
    chgActCourse(state, course) {
      state.act_course = course;
    }
  },
  actions: {
  },
  modules: {
  }
})
