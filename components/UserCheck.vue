<template>
  <div >
    <input
      :id="'checkbox-' + checkbox.id"
      v-model="value"
      class="form-checkbox text-green-500"
      type="checkbox"
      :value="checkbox.checked"
      :name="'checkbox-' + checkbox.id"
    >
    {{ checkbox.id }}
  </div>
</template>

<script>
export default {
  props: ['checkbox'],
  computed: {
    value: {
      get () {
        return this.$store.state.users[this.checkbox.id - 1].checked
      },
      set (val) {
        const mutation = val ? 'ADD_TO_CHECKED' : 'REMOVE_FROM_CHECKED'
        this.$store.commit(mutation, this.checkbox.id - 1)
      }
    }
  }
}
</script>
