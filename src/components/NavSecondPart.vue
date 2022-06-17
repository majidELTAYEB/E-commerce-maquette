<template>
    <nav id="vue">
        <div class="menu-item"><router-link to="/">Home</router-link></div>
        <Categories :category="category"></Categories>
        
    </nav>
    
</template>

<script>
import Categories from '../components/Categories'
import axios from 'axios';
export default {
  name: 'navbar',
  components: {
    Categories
  },
  data()
  {
    return {
     category:[]
      }
  },

  created()
  {
    axios.get(`https://dummyjson.com/products/categories`)
    .then(response => {
      this.category = response.data
     })
    .catch(e => {
      this.errors.push(e)
    })
  }
}
</script>

<style scoped>
@import '../style/NavSecondPart.css';



</style>

