<template>
  <div id="app">
    <div id="nav">
      <router-link class="padding-for-routes" to="/">Movies</router-link>
      <span>|</span>
      <router-link class="padding-for-routes q" to="/about">About</router-link>
      <span>|</span>
      <router-link class="padding-for-routes" to="/customer">Customers</router-link>
    </div>
    <router-view/>
    <div id="footer">
      <footer>Copyright Nathaniel Padgett 2019</footer>
    </div>
  </div>
</template>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #e3e5e8;
  //this is for the flexbox
  flex: 1 0 auto;
}
#nav {
  padding: 30px;
  a {
    font-size: 1.5em;
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
  //for sticky footer
  flex: 0 0 auto;
}
#footer {
  background-color: white;
  margin-top: 10px;
  height: 30px;
  flex: 0 0 auto;
}
.padding-for-routes {
  padding-right: 5px;
  padding-left: 5px;
}
.custom-hover {
}
</style>
