<template>
  <div>
    <form @submit.prevent="handleSubmit">
      <div>
        <p>User Name?:</p>
        <input v-model="users" placeholder="edit me"/>
        <p style="white-space: pre-line;">{{ users }}</p>
      </div>
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

    data: function() {
      return {
        users: [],
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

        let now = new Date()

        let data = {
          users: this.users,
          date_col: now,
          didyesterday: this.didyesterday,
          didyoumiss: this.didyoumiss,
          mostimportanttask: this.mostimportanttask,
          comingupagainst: this.comingupagainst,
          fixit: this.fixit,
          goodthing: this.goodthing,
          doingnext: this.doingnext
        }

        let url = "http://localhost:3002/";

        axios({
          method: 'post',
          url: url,
          data: data
        })
        .then(function (response) {
          let responseMessage = JSON.stringify(response)
          console.log("THIS IS THE SUBMIT RESPONSE: " + responseMessage.data)

        });
      }
    }
  }
</script>
