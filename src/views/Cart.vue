<template>
  <div>
<CartProduct
v-for="product in products"
:key="product.id"
:product="product"
/>
    <TotalSum/>

  </div>
</template>

<script>
import CartProduct from "../components/CartProduct";
import TotalSum from "../components/TotalSum";
import { mapGetters} from "vuex";


export default {
  name: "Cart",
  components: { CartProduct, TotalSum},
  computed: {
    ...mapGetters(['productQuantity']),
    products(){
      return this.$store.getters.cartItems
    }
  }
}


</script>

<style scoped>

</style>