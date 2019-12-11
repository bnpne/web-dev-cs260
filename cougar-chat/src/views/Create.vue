<template>
    <div>
        <h1>New Message</h1>
        <form v-if="creating" @submit.prevent="addMessage">
            <input v-model="addedName" placeholder="Name">
            <p></p>
            <input v-model="addedSubject" placeholder="Subject">
            <p></p>
            <textarea v-model="addedMessage"></textarea>
            <br />
            <button type="submit">Submit</button>
        </form>
        <div v-else>
            <p>Thank you for submitting.</p>
            <p><a @click="toggleForm" href="#">Submit another message.</a></p>
        </div>
    </div>
</template>

<script>
export default {
  name: 'create',
  data() {
    return {
      creating: true,
      addedName: 'Anonymous',
      addedSubject: '',
      addedMessage: '',
    }
  },
  methods: {
    toggleForm() {
      this.creating = !this.creating;
    },
    addMessage() {
      this.$store.dispatch("addMessage", {
        name: this.addedName,
        subject: this.addedSubject,
        message: this.addedMessage,
      });
      this.addedName = "";
      this.addedSubject = "";
      this.addedMessage = "";
      this.creating = false;
    }
  }
}
</script>

<style scoped>
input {
  font-size: 1.2em;
  height: 30px;
  width: 200px;
}

textarea {
  font-size: 1.6em;
  width: 100%;
  max-width: 500px;
  height: 100px;
}

button {
  margin-top: 20px;
  font-size: 1.2em;
}
</style>