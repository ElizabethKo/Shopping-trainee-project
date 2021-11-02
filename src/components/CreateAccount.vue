<template>
  <div class="form-create-account">
    <form @submit.prevent>
      <h1>create account</h1>
      <div class="names">

        <input
            id="forFirstName"
            type="text"
            v-model.trim="state.first_name"
            placeholder="First Name">
        <span v-if="v$.first_name.$error">{{v$.first_name.$errors[0].$message}}</span>
      </div>
      <div>
        <input
            id="forEmail"
            type="text"
            v-model.trim="state.email"
            placeholder="Email">
        <span v-if="v$.email.$error">{{v$.email.$errors[0].$message}}</span>
      </div>
      <div>
        <input
            id="forPassword"
            type="text"
            v-model.trim="state.password"
            placeholder="Password">
        <span v-if="v$.password.$error">{{v$.password.$errors[0].$message}}</span>
      </div>
      <button type="submit" class="create-acc" @click="submitForm">create</button>
      <div class="to-create-account">
        <router-link :to="{name: 'Home'}">
          <button class="btn-return">return to store</button>
        </router-link>
      </div>
    </form>
  </div>
</template>

<script>
import useVuelidate from '@vuelidate/core'
import {required,email, minLength} from "@vuelidate/validators";
import {reactive, computed} from "vue";


export default {
  name: "CreateAccount",
  data(){
    const state = reactive({
      email: '',
      password: '',
      first_name: ''
    })
    const rules = computed(() => {
      return {
        email: {required, email},
        password: {required, minLength: minLength(6)},
        first_name: {required}
      }
    })

    const  v$ = useVuelidate(rules, state)
    return {
      state,
      v$
    }

  },
  methods: {
    submitForm(){
      this.v$.$validate()
      if (!this.v$.$error) {
        alert('Form successfully submitted')
      }
    }
  }
}
</script>

<style scoped lang="scss">

.form-create-account {
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
  .create-acc {
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
  .btn-return {
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