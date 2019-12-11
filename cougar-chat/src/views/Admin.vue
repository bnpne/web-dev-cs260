<template>
    <div id="secure">
        <h1>Admin</h1>
        <table class="table table-hover">
            <thead>
                <tr>
                <th scope="col">Messages</th>
                </tr>
            </thead>
            <div v-for="message in messages" :key="message._id" >
                <tbody >
                    <tr class="table-active">
                    <th scope="row">{{message.name}}</th>
                    <th scope="row">{{message.subject}}</th>
                    <th scope="row" class="message">{{message.message}}</th>
                    <th><button scope="row" type="button" class="btn btn-danger" @click="deleteMessage(message)">Delete</button></th>
                    </tr>
                    
                </tbody>
            </div>
        </table> 
    </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'admin',
  computed: {
    messages() {
      return this.$store.state.messages;
    }
  },
  created() {
    this.$store.dispatch("getMessages");
  },
  methods:  {
      async deleteMessage(message)  {
          try {
              await axios.delete("/api/messages/" + message._id);
              this.$store.dispatch("getMessages");
              console.log("delete");
          }catch(error)  {
              console.log(error);
          }
      },
  }
}
</script>

<style scoped>
.message {
    font-style: italic;
}
</style>