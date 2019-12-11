import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    messages: [],
  },
  mutations: {
    setMessages(state, messages) {
      state.messages = messages;
    },
  },
  actions: {
    async getMessages(context) {
      try {
        let response = await axios.get("api/messages");
        context.commit('setMessages', response.data);
      }catch (error) {
        console.log(error);
      }
    },
    async addMessage(context, data) {
      try {
        await axios.post("/api/Messages", data);
      } catch (error) {
        console.log(error);
      }
    },
  },
  modules: {
  }
})
