<template>
        <NavFirstPartVue></NavFirstPartVue>
        <NavSecondPartVue></NavSecondPartVue>
        <ShopCart></ShopCart>
</template>

<script>
import NavFirstPartVue from '@/components/NavFirstPart.vue'
import NavSecondPartVue from '@/components/NavSecondPart.vue'
import ShopCart from '@/components/ShopCart.vue'
export default {
  name: 'Home',
  components: {
  NavFirstPartVue,
  NavSecondPartVue,
  ShopCart
}
  
}
</script>