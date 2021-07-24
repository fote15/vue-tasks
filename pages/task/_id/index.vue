<template>
  <div>
    <p class="font-mono text-lg">User: {{ data.userId }}</p>
    <h2 class="font-mono text-xl">Task: {{ data.title }}</h2>
    <br />
    <CompleteMessage :completed="data.completed" />
  </div>
</template>

<script>
import axios from 'axios'
import CompleteMessage from '../../../components/CompleteMessage.vue'
export default {
  components: {
    CompleteMessage
  },
  data () {
    return {
      data: []
    }
  },
  created () {
    axios
      .get(
        'https://jsonplaceholder.typicode.com/todos?id=' + this.$route.params.id
      )
      .then((res) => {
        this.data = res.data[0]
        console.log(this.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }
}
</script>
