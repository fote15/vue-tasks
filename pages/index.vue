<template>
  <div class="">
    <h1 class="text-6xl text-center font-mono">UserTasks</h1>
    <h1>Users filter</h1>
    {{ $store.users }}
    <label class="inline-block mr-4" v-for="user in users" :key="user.id">
      <UserCheckBox :checkbox="user"/>
    </label>
    <Task v-for="task in tasks_visible" :key="task.id" :task="task" />
  </div>
</template>

<script>
import UserCheckBox from '../components/UserCheck.vue'
import Task from '../components/Task.vue'
export default {
  components: {
    Task,
    UserCheckBox
  },
  data () {
    return {
      todos: []
    }
  },
  head: {
    title: 'Tasks list'
  },
  computed: {
    tasks_visible () {
      return this.$store.state.tasks_visible
    },
    users () {
      return this.$store.state.users
    }
  },
  created () {
    this.$store.commit('RESET_CHECKED')
    this.$store.dispatch('getTasks')
  }
}
</script>

<style scoped>
</style>
