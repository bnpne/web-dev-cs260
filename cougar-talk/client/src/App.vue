<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <!-- <a class="navbar-brand  container" href="#">Welcome to Cougar Talk!</a> -->
      <h2>Cougar Talk is an open
      forum for BYU Students. Please be kind
      and have fun. :)</h2>
    </nav>
    <!-- eslint-ignore length-max -->
    <router-view/>
  </div>
</template>

<style>
h2 {
  margin: auto;
  text-align: center;
  font-size: 14pt;
  color: black;
  padding: 5px 5px 5px
}

</style>
