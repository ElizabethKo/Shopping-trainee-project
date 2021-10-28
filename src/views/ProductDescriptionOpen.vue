<template>
  <div>
  <div class="open-background" :class="{show: active}" @click="$emit('closeProductOpen')"/>
  <div class="open" :class="{show: active}">
    <div class="open_close" @click="$emit('closeProductOpen')">
     X
    </div>
    <div class="button-to-cart" v-if="product_total > 0">
      <router-link :to="{name: 'Cart'}">
        <p>
        Go to Cart
      </p>
      </router-link>
    </div>

    <div v-if="product" class="product-details">
      <h3>{{product.title}}</h3>
      <img class="images"
           :src="`/static/images/${product.imgUrl}`" alt="images">
      <p class="description">{{product.description}}</p>
      <h3>${{product.price.toFixed(2)}}</h3>
    </div>
    <div class="total" v-if="product_total">
      <h5>Quantity in cart</h5>
      <h6>{{product_total}}</h6>
    </div>
    <div class="button-container">
      <button class="remove" @click="removeFromCart(product.index)">remove</button>
      <button class="add" @click="addToCart()"> add</button>
    </div>
  </div>
  </div>

</template>

<script>
import {mapActions} from "vuex";


export default {
  name: "ProductDescriptionOpen",
  props: ['product', 'active'],

  methods: {
    ...mapActions(['addToCart', 'removeFromCart']),

    addToCart() {
      this.$store.dispatch("addToCart", this.product)
    },
    removeFromCart() {
      this.$store.dispatch("removeFromCart", this.product)
    },
  },
  computed: {
    product_total() {
      return this.$store.getters.productQuantity(this.product)
    }
  }
}
</script>

<style lang="scss" scoped>

.open-background{
  width: 100%;
  height: 100vh;
  background-color: rgba(124, 124, 124, 0.55);
  z-index: 100;
  position: fixed;
  left: 0;
  top: 0;
  display: none;
  transition: disolay .5s;

  &.show {
    display: block;
  }
}

.open{
  width: 95vw;
  height: 100vh;
  background-color: #f3be81;
  position: fixed;
  top: 0;
  left: -105vw;
  padding: 15px;
  transition: left .5s;
  z-index: 101;
  overflow-y: scroll;

  &.show {
    left: 0;
  }
}
.open_close{
  font-size: 16px;
  padding: 5px;
  border-radius: 5px;
  right: 10px;
  border: 2px solid gray;
  width: 15px;
  float: right;
  cursor: pointer;

  &:hover{
    background-color: #42b983;
  }
}

.button-container .remove{
  background: #f3be81;
  color: #fff;  font-size: 14px;
  text-transform: uppercase;
  overflow: hidden;
  letter-spacing: 4px;
  border-radius: 5px;
  margin: 10px;
  width: 129px;
  height: 62px;
}
.button-container .add{
  background: #f3be81;
  color: #fff;  font-size: 14px;
  text-transform: uppercase;
  overflow: hidden;
  letter-spacing: 4px;
  border-radius: 5px;
  margin: 10px;
  width: 129px;
  height: 62px;
}

.product-details{
  width: 300px;
  background: #f4f4f4;
  padding: 20px;
  border-radius: 10px;
  margin: 10px auto;
  cursor: pointer;
  color: orange;
  letter-spacing: 2px;
  font-weight: bold;

}
.images{
  width: 100px;
  display: block;
  margin-left: auto;
  margin-right: auto;
}
.total {
  background: #f4f4f4;
  border-radius: 10px;
  margin: 21px auto;
  cursor: pointer;
  color: orange;
  width: 340px;
  height: 72px;
  font-size: 25px;

  h6 {
    height: 45px;
    width: 58px;
    background-color: #bbb;
    border-radius: 50%;
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-top: -34px;
    font-size: 32px;
  }

}
.button-to-cart {
  font-size: 18px;
  border-radius: 5px;
  right: -5px;
  border: 3px solid orangered;
  width: 123px;
  float: right;
  cursor: pointer;
  position: absolute;
  top: 100px;

  p {
    color: gray;

  }
}


</style>