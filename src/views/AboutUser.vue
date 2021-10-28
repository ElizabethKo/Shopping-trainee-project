<template>
  <div class="form">
    <h2>Your purchase</h2>
    <form class="user-form" v-on:submit.prevent="onSubmit()">
      <div class="user">
      <input type="text" placeholder="name">
      </div>
      <div class="user">
      <input type="tel" placeholder="contact number">
      </div>
      <div class="user">
      <input type="text" placeholder="city">
      </div>
      <button type="submit">Proceed to checkout</button>
    </form>
  </div>
  <div>

  </div>
</template>

<script>
</script>


<style scoped>
.form {
  cursor: pointer;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 400px;
  padding: 40px;
  transform: translate(-50%, -50%);
  box-sizing: border-box;
  border-radius: 10px;
  font-family: "Exo 2", sans-serif;

}

.form h2 {
  margin: 0 0 30px;
  padding: 0;
  color: orange;
  text-align: center;
}
.form .user {
  position: relative;
}
.form .user input {
  width: 100%;
  padding: 10px 0;
  font-size: 16px;
  color: black;
  margin-bottom: 30px;
  border: none;
  border-bottom: 1px solid black;
  outline: none;
  background: transparent;
}


.form form button {
  position: relative;
  display: inline-block;
  padding: 10px 20px;
  color: #f3be81;
  font-size: 16px;
  text-decoration: none;
  text-transform: uppercase;
  overflow: hidden;
  transition: 0.5s;
  margin-top: 40px;
  letter-spacing: 4px;
  border: 2px solid gray;
  border-radius: 10px;
}
.form button:hover {
  background: #f3be81;
  color: #fff;
  border-radius: 5px;
  box-shadow: 0 0 5px #f3be81, 0 0 25px #f3be81, 0 0 50px #f3be81,
  0 0 100px #f3be81;
}
</style>