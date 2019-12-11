<template>
  <div id="app">
    <div class="header">
      <h1>Cougar Chat</h1>
      <div id="nav">
        <button type="button" class="btn btn-warning"><router-link to="/">Home</router-link></button>  
        <button type="button" class="btn btn-success" ><router-link to="/create" >New Message</router-link></button>
      </div>
    </div>
    <div class="content">
      <p class="sub">Cougar Chat is a friendly forum and message board for BYU students. Be kind and have fun.</p>
      <hr>
      <router-view/>
    </div>
    <div class="footer">
      <p>
    </div>
  </div>
</template>

<style>
body {
  margin: 0px;
}

.sub {
  font-size: 15pt;
  text-align: center;
}

hr {
  background: white;
}

.header {
  display: flex;
  justify-content: space-between;
  background: #abb6c2;
  padding: 10px 100px;
  color: black;
}

/* #nav {
  padding: 30px;
} */

#nav a {
  font-weight: bold;
  color: #fff;
}



.content {
  padding: 10px 100px;
}
</style>