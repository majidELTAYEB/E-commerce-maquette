<template>
        <NavFirstPartVue></NavFirstPartVue>
        <NavSecondPartVue></NavSecondPartVue>
        <Banner></Banner>
        <Carte :cat="category"></Carte>
</template>

<script>

import NavFirstPartVue from '@/components/NavFirstPart.vue'
import NavSecondPartVue from '@/components/NavSecondPart.vue'
import Banner from '@/components/Banner.vue'
import Carte from '@/components/Carte.vue'
export default {
  name: 'Home',
  props: ['category'],
  components: {
  NavFirstPartVue,
  NavSecondPartVue,
  Carte,
  Banner
}
  
}
</script> 