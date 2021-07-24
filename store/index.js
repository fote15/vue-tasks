import axios from 'axios'

export const state = () => ({
  tasks: [],
  users: [],
  tasks_visible: []
})

export const getters = {

}

export const mutations = {
  RESET_CHECKED (state) {
    state.users.forEach((user) => { user.checked = false })
  },
  ADD_TO_CHECKED (state, id) {
    if (!state.users.some(e => (e.checked === true))) {
      state.tasks_visible = []
    }
    state.users[id].checked = true
    this.dispatch('getUserTasks', id + 1)
  },
  REMOVE_FROM_CHECKED (state, id) {
    state.users[id].checked = false
    if (!state.users.some(e => (e.checked === true))) {
      state.tasks_visible = state.tasks
    } else {
      state.tasks_visible = state.tasks_visible.filter(e => e.userId !== id + 1)
    }
  },
  USERS_LIST (state) {
    state.tasks.forEach((item) => {
      if (!state.users.some(e => (e.id === item.userId))) {
        state.users.push(
          {
            id: item.userId,
            checked: false
          }
        )
      }
    })
  },
  ADD_TASK (state, data) {
    state.tasks_visible.push(...data)
  },
  SET_TASKS (state, tasks) {
    state.tasks = tasks
    state.tasks_visible = tasks
  }
}

export const actions = {
  getTasks ({ commit }) {
    axios.get('https://jsonplaceholder.typicode.com/todos').then((response) => {
      commit('SET_TASKS', response.data)
      commit('USERS_LIST')
    })
  },
  getUserTasks ({ commit }, id) {
    axios.get('https://jsonplaceholder.typicode.com/todos?userId=' + id).then((response) => {
      commit('ADD_TASK', response.data)
    })
  }
}
