<template>
    <div class="NavFirstcontainer Banner">
        <div class="NavLogo">
            <img src="../assets/pngwing.com.png">
        </div>
        <router-link style="text-decoration: none; color: inherit;" to="/Cart">
            <div class="BasketContainer">
            
            <div class="BasketTitle">
                <p>Mon panier</p>
            </div>
            <div class="BasketLogo">
                <i class="fa-solid fa-basket-shopping"></i>
            </div>
        </div>
        </router-link>
        
    </div>
</template>

<script>
export default {
  name: 'NavFirstPart'
  
}
</script>

<style scoped>
@import '../style/NavFirstPart.css';
</style>