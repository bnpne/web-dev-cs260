<template>
  <div id="app">
    <div class="header">
      <h1>pas normal journal</h1>
      <div id="nav">
        <span><router-link to="/">home</router-link></span>
        
        <span><router-link to="/about">about</router-link></span>

        <span><router-link to="/contribute">contribute</router-link></span>
      </div>
    </div>

    <div class="content">
      <router-view/>
    </div>

    <div class="footer">
      <span><p> © BEN PAINE + Contributors, 2019 -- <a href="https://github.com/bensama" onclick="window.open(this.href); return false;" onkeypress="window.open(this.href); return false;">GitHub</a> </p></span>
    </div>
    
  </div>
</template>

<style>
@font-face {
  font-family: Basier;
  src: url("./assets/BasierCircle-Regular.otf");
}

body {
  font-family: Basier;
  color: black;
}

#app {
  font-family: Basier;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#nav {
  padding: 30px;
  display: inline;
}

a {
  color: black;
  text-decoration: none;
  font-size: 12pt;
}

a.router-link-exact-active {
  color: red;
  text-decoration: none;
}

a:hover {
  background-color: black;
  color: white;
}

.header {
  text-align: center;
  font-size: 20pt;
}

span + span {
  margin-left: 100px;
}

.footer {
  text-align: center;
  display: inline;
}

</style>
