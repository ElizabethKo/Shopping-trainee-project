<template>
  <div>
    <div class="cart-product">
      <h1>{{product.title}}</h1>
      <h2>{{product.quantity}}</h2>
      <h2>{{totalCost.toFixed(2)}}</h2>
      <p>{{description}}</p>
      <button type="button" @click="removeFromCart()" class="delete-from-cart">X</button>
    </div>
  </div>
</template>

<script>
import {mapActions} from "vuex";


export default {
  props: ['product'],
  methods: {
    ...mapActions(['removeFromCart']),
    removeFromCart() {
      this.$store.dispatch("removeFromCart", this.product)
    }
  },
  computed: {
    description(){
      return this.product.description.substring(0, 120)
    },
    totalCost(){
      return this.product.price * this.product.quantity
}
  }
}


</script>

<style scoped lang="scss">
.cart-product {
  background: #f4f4f4;
  border: 2px solid darkgrey;
  padding: 15px;
  border-radius: 10px;
  margin: 10px auto;
  max-width: 600px;
  cursor: pointer;
  color: orange;

  h1 {
    font-size: 20px;
    font-family: 'Architects Daughter', cursive;
  }
}
.delete-from-cart  {
  border-radius: 50%;
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: -11px;
  transition: all 0.25s ease;

  &:hover {
    transform: scale(1.1, 1.1);
    background-color: #bbb;

  }
}
</style>