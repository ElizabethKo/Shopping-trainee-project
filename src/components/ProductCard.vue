<template>
  <div>
    <div class="product-card">
      <h3>{{product.title}}</h3>
      <h5 class="price">price: ${{product.price.toFixed(2)}}</h5>
      <p class="description">Description:<br/> {{description}} </p>
      <button class="view-product-button" @click="$emit('view-product', product)">view product</button>
      <img class="images"
           :src="`/static/images/${product.imgUrl}`" alt="images">
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductCard",
  props: ['product'],
  computed: {
    description(){
      return this.product.description.substring(0, 150)
    }
  }
}
</script>

<style  lang="scss" scoped>

.product-card {
  width: 400px;
  background: #f4f4f4;
  border: 2px solid lightslategrey;
  padding: 20px;
  border-radius: 10px;
  margin: 10px auto;
  max-width: 600px;
  cursor: pointer;
  color: orange;
  letter-spacing: 2px;
  font-weight: bold;
  font-family: fantasy, sans-serif;


  h3 {
    color: black;
    font-size: 20px;
    font-family: 'Architects Daughter', cursive;
  }

}
.images{
  width: 300px;
  display: block;
  margin-left: auto;
  margin-right: auto;
}
button {
  padding: 10px 20px;
  color: #f3be81;
  font-size: 14px;
  text-transform: uppercase;
  overflow: hidden;
  transition: 0.5s;
  letter-spacing: 4px;
  border-radius: 10%;


  &:hover {
    background: #f3be81;
    color: #fff;
    border-radius: 5px;
    box-shadow: 0 0 5px #f3be81, 0 0 25px #f3be81, 0 0 50px #f3be81,
    0 0 100px #f3be81;
  }
}
</style>