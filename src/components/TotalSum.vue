<template>
  <div class="total-product-sum">
    <p>Total: {{totalProductSum}}$</p>
    <button class="total">Buy</button>
  </div>
</template>

<script>
export default {
  name: "TotalSum",
  computed: {
    totalProductSum(){
     return this.$store.getters.totalProductSum
    }
  }
}
</script>

<style scoped lang="scss">
.total-product-sum p {
  background: #f4f4f4;
  padding: 20px;
  border-radius: 10px;
  margin: 10px auto;
  max-width: 600px;
  cursor: pointer;
  color: orange;
  letter-spacing: 4px;
  text-transform: uppercase;
  font-weight: bold;
  transition: all 0.25s ease;

  &:hover {
    transform: scale(1.1, 1.1);
    background: #ddd;
  }
}

.total {
  background: #f3be81;
  color: #fff;  font-size: 14px;
  text-transform: uppercase;
  overflow: hidden;
  letter-spacing: 4px;
  border-radius: 5px;
  margin: 10px;
  width: 129px;
  height: 62px;

  &:hover {
    background: #f3be81;
    color: #fff;
    border-radius: 25px;
    cursor: pointer;

  }
}


</style>