<template>
    <article  v-if="item.length > 0" >
            <div v-for="cat of item" class="containerCart" >
                <div class="CartTitle">
                 <p>
                    {{cat.title}}
                 </p>
             </div>
             <div>
                 <p>quantity: {{cat.qty}}</p>
             </div>
             <div>
                 <p>
                    price : {{cat.qty*cat.price}} €
                </p>
             </div>
             <div @click="removeToCart(cat.id)" class="DeleteButton">
                 <i class="fa-solid fa-trash" ></i>
             </div>
            </div>
    </article>
    <div  v-if="item.length === 0">
        <p>panier vide</p>
    </div>
</template>

<script>
import { tsThisType } from '@babel/types';




export default {
  name: 'ShopCart',
  data() {
    return {
      price: String,
      id : Number,
      titil : String,
      qty : Number,
      length : Number,
      item: [],
      Cart:[]
               
      }
  },




    mounted() 
      {

        if(localStorage){
          var values = [],
        keys = Object.keys(localStorage),
        i = keys.length;

        while ( i-- ) {
        this.item.push( JSON.parse(localStorage.getItem(keys[i]) ));
        }
          
        }
        // const items = { ...localStorage };
        // this.length = Object.keys(items).length
        

     //this.item.map((elment)=>console.log(elment.id))
      },

     

      methods:{
          removeToCart(id){
            this.item.length = 0
            localStorage.removeItem(id);
             var values = [],
              keys = Object.keys(localStorage),
              i = keys.length;

              while ( i-- ) {
              this.item.push( JSON.parse(localStorage.getItem(keys[i]) ));
        }
           
      }
      },

      
                   
        
    
}


</script>

<style scoped>
@import '../style/ShopCart.css';
</style>