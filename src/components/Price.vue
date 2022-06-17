<template>
    <div class="NavFirstcontainer">
      <div class="ContainPrice"> 
         <p>
            {{price}} €
        </p>
      </div>
      
         <div>
        
        </div>
          <div  v-if="elementcart" class="buttonPlus">
            <div>
                <button  style="margin-bottom: 20px;" class="btn btn-indigo outline" @click="PlusToBasket">
                  <i class="fa-solid fa-square-plus"></i>
                </button>
            </div>

            <div class="ShowQuantity" >
                <p >{{this.elementcart.qty}}</p>
            </div>

            <div >
                <button style="margin-bottom: 20px;" class="btn btn-indigo outline" @click="MinusToBasket">
                  <i class="fa-solid fa-square-minus"></i>
                </button>
            </div>
            
        </div>

        <div  v-if="!elementcart" class="buttonAdd">
          <button class="btn btn-indigo outline" @click="addToCart">add
          </button>
        </div>
        
        
       
    </div>
</template>

<script>


export default {
  name: 'Categories',
  props: ['price','id','title'],
  data() {
    return {
      cart: [],
      check:[],
      elementcart:[],
         
      }

  },

  created()
  {
     this.elementcart = JSON.parse(localStorage.getItem(this.id))
    //  qty = this.elementcart.qty

  },


 methods: {
      addToCart() 
      {
           this.check = JSON.parse(localStorage.getItem(this.id));
          if(this.check)
          {
            this.check.qty+ 1
            Object.assign(this.check, { qty:this.check.qty+ 1});
            localStorage.setItem(this.id, JSON.stringify(this.check));
            this.elementcart = JSON.parse(localStorage.getItem(this.id))
            
           
           }
           else
           {
            this.cart ={id:this.id,price:this.price,title:this.title,qty:1};       
            localStorage.setItem(this.id, JSON.stringify(this.cart));
            this.elementcart = JSON.parse(localStorage.getItem(this.id))
           }
      },

      PlusToBasket()
      {
        this.check = JSON.parse(localStorage.getItem(this.id));
            Object.assign(this.check, { qty:this.check.qty+ 1});
            localStorage.setItem(this.id, JSON.stringify(this.check));
            this.elementcart = JSON.parse(localStorage.getItem(this.id))
      },

      MinusToBasket()
      {
        this.check = JSON.parse(localStorage.getItem(this.id));
        if(this.check.qty === 1){
          localStorage.removeItem(this.id);
          this.elementcart = JSON.parse(localStorage.getItem(this.id))
           
        }else{
          Object.assign(this.check, { qty:this.check.qty- 1});
            localStorage.setItem(this.id, JSON.stringify(this.check));
            this.elementcart = JSON.parse(localStorage.getItem(this.id))
        }
            
      },
                   
        },
    
   }


</script>
<style scoped>
@import '../style/Prix.css'; 
</style>