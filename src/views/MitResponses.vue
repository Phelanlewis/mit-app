<template>
  <div class="about">
    <h1>This is Mit Response page</h1>
    <div>{{ info }}</div>
  </div>
</template>

<script>
  const axios = require('axios');

  let url = "http://localhost:3002/";

  export default {
    data () {
      return {
        info: null
      }
    },
    mounted () {
        axios
          .get(url)
          .then(response => (this.info = response.data))
      }
    }
</script>
