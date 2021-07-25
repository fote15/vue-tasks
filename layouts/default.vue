<template>
    <div class="container  max-w-screen-lg">
    <Header/>
    <div class="bg-white py-2 px-4">
  <Nuxt />
  </div>
  </div>
</template>

<script>
import Header from '~/components/Header.vue'
export default {
  components: { Header },
  head: {
    bodyAttrs: {
      class: 'bg-blue-200'
    }
  }
}
</script>
