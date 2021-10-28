<template>
  <div class="home">
    <div class="product-container">
      <div class="list">
        <ProductCard
        v-for="product in this.$store.state.items"
        :key="product.id"
        :product="product"
        v-on:view-product="viewProduct($event)"
        />
        </div>
    </div>
    <ProductDescriptionOpen
       :product="product"
       :active="active.product_open"
        v-on:closeProductOpen="closeProductOpen()"
       />
  </div>
</template>

<script>

import ProductCard from "../components/ProductCard";
import ProductDescriptionOpen from "./ProductDescriptionOpen";
import {mapActions} from 'vuex'
export default {
  name: 'Home',
  components: {ProductCard, ProductDescriptionOpen},
  data(){
    return {
       product: null,
      active: {
        product_open: false
      },

    }
  },
  methods:{
    ...mapActions([
        'GET_ITEMS_FROM_API'
    ]),
    viewProduct(product){
      this.product = product
      this.active.product_open = true
    },
    closeProductOpen() {
      this.active.product_open = false
    }
  },
  mounted() {
    this. GET_ITEMS_FROM_API()
  }
}
</script>


<style>
.product-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

</style>