<template>
      <div class="VentesTitre">
          <h1>{{cat ? cat : 'Best-seller'}}</h1>
      </div>
    <div class="containerCarte">
       <article v-for="cat of products" class="carte">
         <div class="imageCarte">
             <Image :images="cat.images[0]"></Image>
         </div>
         <div class="titledescription">
             <TitleDescription :title="cat.title" :description="cat.description"></TitleDescription>
         </div>
         <div class="price">
            <Price :title="cat.title" :id="cat.id" :price="cat.price"></Price>
         </div>
    </article>
    </div>
    
</template>

<script>
import axios from 'axios';
import Image from '../components/Image'
import Price from '../components/Price'
import TitleDescription from '../components/TitleDescription'

export default {
  name: 'Carte',
  props: ['cat','categorie'],
  components: {
    Image,
    Price,
    TitleDescription
  },

  data()
  {
    return {
     products:[]
      }
  },

  created()
  {
    if(this.cat === undefined){
       axios.get(`https://dummyjson.com/products/`)
    .then(response => {
      this.products = response.data.products
      })

    .catch(e => {
      this.errors.push(e)
    })
    }
    else
    {
    
    axios.get(`https://dummyjson.com/products/category/${this.cat}`)
    .then(response => {
      this.products = response.data.products
    })
    .catch(e => {
      this.errors.push(e)
    })
    }
  
  }
  
}
</script>
<style scoped>
       @import '../style/Carte.css';
</style>
