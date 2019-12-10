<template>
  <div class="Main">
    <div class="top">
      <h1>Welcome</h1>
      <button type="button"
      @click="showMessageForm = !showMessageForm"
      class="btn btn-primary btn-lg btn-block">New Message</button>
    </div>
    <transition v-if="showMessageForm"  @submit.prevent="addMessage" name="modal"
    class="display-4">
      <div class="modal-mask">
        <div class="modal-wrapper">
          <div class="modal-container">
            <div class="modal-header">
              <h1 class="modal-title">New Message</h1>
              <!-- <h2>Please be nice! :)</h2> -->
            </div>
            <div class="modal-body">
              <div v-if="error" class="alert alert-dismissible alert-warning">
                <button type="button" class="close" data-dismiss="alert">&times;</button>
                <h4 class="alert-heading">Error!</h4>
                <p class="mb-0">{{error}}</p>
              </div>
              <div class="form-group">
                <label for="username">Username</label>
                <input
                  v-model="message.username"
                  type="text"
                  class="form-control"
                  id="username" required>
              </div>
              <div class="form-group">
                <label for="subject">Subject</label>
                <input
                  v-model="message.subject"
                  type="text"
                  class="form-control"
                  id="subject"
                  placeholder="Enter a subject" required>
              </div>
              <div class="form-group">
                <label for="message">Message</label>
                <textarea
                  v-model="message.message"
                  class="form-control"
                  id="message"
                  rows="3"></textarea>
              </div>
            </div>
            <div class="modal-footer">
              <button type="submit" class="btn btn-primary">Add Message</button>
              <button type="button"
              @click="showMessageForm = !showMessageForm"
              class="btn btn-danger">Close</button>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'home',
  data: () => ({
    showMessageForm: false,
    error: '',
    messages: [],
    message: {
      username: 'Anonymous',
      subject: '',
      message: '',
    },
  }),
  created() {
    this.getMessages();
  },
  methods: {
    async getMessages() {
      try {
        const response = await axios.get('/api/messages');
        this.messages = response.data;
      } catch (error) {
        // console.log(error);
      }
    },
    async addMessage() {
      try {
        await axios.post('/api/messages', {
          username: this.username,
          subject: this.subject,
          message: this.message,
        });
        this.username = 'Anonymous';
        this.subject = '';
        this.message = '';
        this.showMessageForm = false;
      } catch (error) {
        // console.log(error);
      }
    },
    // async deleteMessage(message) {
    //   try {
    //     await axios.delete('/api/messages/' + message._id);
    //     this.getMessages();
    //   } catch (error) {
    //     // console.log(error);
    //   }
    // },
  },
};
</script>

<style>
hr {
  border-top: 1px solid white;
}
img {
  max-width: 300px;
  height: auto;
}
/* Login Form */
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  display: table;
  transition: opacity .3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 500px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #2B3E50;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
  transition: all .3s ease;
  /* font-family: Helvetica, Arial, sans-serif; */
}

.modal-header h1 {
  margin-bottom: 30px;
  font-size: 1.5em;
}

.modal-body {
  margin: 0;
}

.modal-body input {
  margin-bottom: 20px;
  height: 30px;
}

.modal-footer {
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
}

.modal-default-button {
  float: right;
}

.btn-block {
  width: 300px;
  margin: auto;
  /* margin-top: 10px; */
  float: right;
}

.top {
  display: flex;
  width: 1000px;
  align-items: center;
  justify-content: center;
}
</style>
