<template>
  <div>
    <form @submit.prevent="handleSubmit">
      <div>
        <p>What did you do yesterday?:</p>
        <textarea v-model="didyesterday" placeholder="edit me"></textarea>
        <p style="white-space: pre-line;">{{ didyesterday }}</p>
      </div>
      <div>
        <p>What did you miss?:</p>
        <textarea v-model="didyoumiss" placeholder="edit me"></textarea>
        <p style="white-space: pre-line;">{{ didyoumiss }}</p>
      </div>
      <div>
        <p>What is your most important task?:</p>
        <textarea v-model="mostimportanttask" placeholder="edit me"></textarea>
        <p style="white-space: pre-line;">{{ mostimportanttask }}</p>
      </div>
      <div>
        <p>What are you coming up against?:</p>
        <input v-model="comingupagainst" placeholder="edit me">
        <p style="white-space: pre-line;">{{ comingupagainst }}</p>
      </div>
      <div>
        <p>How are you going to fix it?:</p>
        <input v-model="fixit" placeholder="edit me">
        <p style="white-space: pre-line;">{{ fixit }}</p>
      </div>
      <div>
        <p>What is one good thing about yesterday/today?:</p>
        <input v-model="goodthing" placeholder="edit me">
        <p style="white-space: pre-line;">{{ goodthing }}</p>
      </div>
      <div>
        <p>What are you doing next?:</p>
        <textarea v-model="doingnext" placeholder="edit me"></textarea>
        <p style="white-space: pre-line;">{{ doingnext }}</p>
      </div>
      <p>
        <button type="submit">Submit</button>
      </p>
    </form>
  </div>
</template>

<script>
  const axios = require('axios');

  export default {
    name: 'SubmitMit',

    // props: {
    //   didyesterday: String,
    //   didyoumiss: String,
    //   mostimportanttask: String,
    //   comingupagainst: String,
    //   fixit: String,
    //   goodthing: String,
    //   doingnext: String
    // },

    data: function() {
      return {
        didyesterday: [],
        didyoumiss: [],
        mostimportanttask: [],
        comingupagainst: [],
        fixit: [],
        goodthing: [],
        doingnext: []
      }
    },

    methods: {
      handleSubmit: function() {

      let data = {
        didyesterday: this.didyesterday,
        didyoumiss: this.didyoumiss,
        mostimportanttask: this.mostimportanttask,
        comingupagainst: this.comingupagainst,
        fixit: this.fixit,
        goodthing: this.goodthing,
        doingnext: this.doingnext
      }

      //console.log("I AM THE DATA: " + JSON.stringify(data));

      let url = "http://localhost:3002/";

      axios({
        method: 'post',
        url: url,
        data: data
      })
      .then(function (response) {
        console.log("THIS IS THE SUBMIT RESPONSE: " + JSON.stringify(response))
      });

      // const response = fetch(url, {
      //     method: 'POST', // *GET, POST, PUT, DELETE, etc.
      //     mode: 'cors', // no-cors, *cors, same-origin
      //     cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      //     credentials: 'same-origin', // include, *same-origin, omit
      //     headers: {
      //       'Content-Type': 'application/json'
      //       // 'Content-Type': 'application/x-www-form-urlencoded',
      //     },
      //     redirect: 'follow', // manual, *follow, error
      //     referrerPolicy: 'no-referrer', // no-referrer, *client
      //     body: JSON.stringify(data)
      //   }).then(function(response){
      //     console.log("THIS IS THE SUBMIT RESPONSE: " + response)
      //     //return JSON.stringify(response);
      // })
      }
    }
  }
</script>
