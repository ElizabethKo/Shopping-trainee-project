<template>
  <div id="nav">
    <router-link to="/"><img src="./assets/home.png" alt="home" class="nav_image"></router-link>
    <router-link to="/AboutUser"><img src="./assets/user.png" alt="AboutUser" class="nav_image"></router-link>
    <router-link to="/links"><img src="./assets/link.png" alt="link" class="nav_image"></router-link>
    <router-link to="/cart"><img src="./assets/basket.png" alt="cart" class="nav_image" ></router-link>
  </div>
    <router-view></router-view>
</template>



<style lang="scss">
#app {
  width: 100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  color: #2c3e50;
}


#nav a {
  color: #42b983;
}

.nav_image {
  background: #f4f4f4;
  padding: 16px;
  border-radius: 10px;
  margin: 0 1px;
  cursor: pointer;
  transition: all 0.25s ease;

  &:hover {
    background: #ddd;
    border-radius: 5px;
    transform: scale(1.1, 1.1);
  }
}

</style>
