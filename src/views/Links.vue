<template>
  <h1>Useful Links</h1>
  <div v-for="link in links" :key="link.id" class="link">
    <router-link :to="{name: 'CompanyDetails', params: {id: link.id}}">
    <h2>{{link.title}}</h2>
    </router-link>
  </div>
</template>

<script>
import ProductCard from "../components/ProductCard";
export default {
  name: "Links",
  components: {ProductCard},
  data() {
    return {
      links: [
        {title: 'delivery', details: 'lorem', id: 1},
        {title: 'contact us', details:  'lorem', id:2},
      ]
    }
  }
}
</script>

<style scoped>
.link h2 {
  background: #f4f4f4;
  padding: 20px;
  border-radius: 10px;
  margin: 10px auto;
  max-width: 600px;
  cursor: pointer;
  color: orange;
  letter-spacing: 4px;
  transition: all 0.25s ease;

}
.link h2:hover {
  background: #ddd;
  transform: scale(1.1, 1.1);
}
.link a {
  text-decoration: none;
}

</style>