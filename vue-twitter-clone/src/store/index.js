import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tweets: [],
  },
  mutations: {
    setTweets(state, tweets) {
      state.tweets = tweets;
    }
  },
  actions: {
    async getTweets(context) {
      try {
        let response = await axios.get("api/tweets");
        context.commit('setTweets', response.data);
      }catch (error) {
        console.log(error);
      }
    },
    async addTweet(context, data) {
      try {
        await axios.post("/api/tweets", data);
      } catch (error) {
        console.log(error);
      }
    },
  },
  modules: {
  }
})
