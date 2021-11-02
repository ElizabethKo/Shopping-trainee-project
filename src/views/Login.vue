<template>
  <div class="form" >
    <form @submit.prevent>
    <h1>login</h1>
    <div>
      <input
          id="forEmail"
          type="text"
          v-model="email"
          placeholder="Email">
    </div>
    <div>
      <input
          id="forPassword"
          type="text"
          v-model="password"
          placeholder="Password">
    </div>
    <button type="submit" class="sign-in">sign in</button>
      <div class="to-create-account">
        <router-link :to="{name: 'CreateAccount'}">
          <button class="btn-create-acc">create account</button>
        </router-link>
      </div>
    </form>
  </div>
  <div>
  </div>
</template>

<script>


export default {
name: "Login",
  data() {
  return {
    email: '',
    password: ''
  }
  }
}

</script>


<style scoped lang="scss">

.form {
  width: 500px;
  margin: 70px auto;


  input {
    width: 450px;
    background: #f4f4f4;
    padding: 20px;
    border-radius: 10px;
    margin: 10px auto;
    cursor: pointer;
    color: orange;
    letter-spacing: 4px;
    transition: all 0.25s ease;
    outline: none;
  }
  h1 {
    margin: 0;
    font-family: 'Architects Daughter', cursive;
    font-weight: bold;
    font-size: 25px;
    color: orange;
  }
  .sign-in {
    background: #f3be81;
    color: #fff;
    font-size: 14px;
    text-transform: uppercase;
    letter-spacing: 4px;
    border-radius: 5px;
    margin: 10px;
    width: 111px;
    height: 50px;
    display: block;
  }
  .btn-create-acc {
    background: #f3be81;
    color: #fff;
    font-size: 13px;
    text-transform: uppercase;
    letter-spacing: 4px;
    border-radius: 5px;
    width: 111px;
    height: 50px;
    position: relative;
    bottom: 59px;
    left: -10%;
  }


}



</style>