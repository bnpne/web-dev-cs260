<template>
    <div class="new">
        <h1>New Message</h1>
        <form v-if="creating" @submit.prevent="addMessage">
            <div class="name">
              <input v-model="addedName" placeholder="Name" required>
              <p class="hint">(Change this if you don't want to be anonymous)</p>
            </div>
            <p></p>
            <input v-model="addedSubject" placeholder="Subject" required>
            <p></p>
            <textarea v-model="addedMessage" placeholder="Message" required></textarea>
            <br />
            <button type="submit" class="btn btn-success">Submit</button>
            <button type="button" class="btn btn-warning" ><router-link to="/" >Close</router-link></button>
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
      this.addedName = 'Anonymous';
      this.addedSubject = "";
      this.addedMessage = "";
      this.creating = false;
    }
  }
}
</script>

<style scoped>
.new {
  width: 600px;
  margin: auto;
}
input {
  font-size: 1.2em;
  height: 30px;
  /* width: 200px; */
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

.name {
  display: inline;
}

.hint {
  color:darkgoldenrod;
}


#nav a {
  font-weight: bold;
  color: #fff;
}

.color {  
  width: 300px;
  display: flex;
  justify-content: space-between;
}

.color-button {
  font-size: 12pt;
  width: 50px;
  height: 50px;
  
}
</style>