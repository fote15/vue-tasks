<template>
  <nuxt-link :to="'task/' + task.id">
    <div
      class="task py-2 px-2 border-dashed mb-2 border-2 "
      :class="{ 'border-green-200': task.completed, 'border-red-200': !task.completed }"
    >
      <p>{{ task.title }}</p>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  name: 'Task',
  props: ['task'],
  methods () {
  }
}
</script>
