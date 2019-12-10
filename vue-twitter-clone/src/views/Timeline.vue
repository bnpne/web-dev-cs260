<template>
<div>
  <h1>Current tweets</h1>
  <div v-for="tweet in tweets" v-bind:key="tweet._id">
    <hr>
    <div class="tweet">
      <div class="problem">
        <p>{{tweet.tweet}}</p>
        <p><i>-- {{tweet.username}}</i></p>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'timeline',
  computed: {
    tweets() {
      return this.$store.state.tweets;
    }
  },
  created() {
    this.$store.dispatch("getTweets");
  }
}
</script>
