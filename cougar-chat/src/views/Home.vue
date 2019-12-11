<template>
<div>
  <!-- <h1>Cougar Chat</h1> -->
  <div class="grid" >
    <div v-for="message in messages" v-bind:key="message._id">
      <div class="card border-info mb-3">
        <div class="card-header">{{message.name}}</div>
        <div class="card-body">
          <h4 class="card-title">{{message.subject}}</h4>
          <p class="card-text">{{message.message}}</p>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'home',
  computed: {
    messages() {
      return this.$store.state.messages;
    }
  },
  created() {
    this.$store.dispatch("getMessages");
  }
}
</script>

<style scoped>
.grid {
  display: flex;
  flex-flow: wrap;
  justify-content: space-evenly; 

}
.card {
  width: 20rem;
  flex-basis: 20%;
  -ms-flex: auto;
  position: relative;
  /* padding: 10px; */
  box-sizing: border-box;
}
</style>
