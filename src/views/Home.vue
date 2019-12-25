<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <SubmitMit />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import SubmitMit from '@/components/SubmitMit.vue'

export default {
  name: 'home',
  components: {
    HelloWorld,
    SubmitMit
  }
}
</script>
