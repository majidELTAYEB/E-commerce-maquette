<template>
    <div  class="NavFirstcontainer">
       <img v-bind:src="images" />
    </div>

</template>

<script>
export default {
    
  name: 'Image',
  props: ['images'],
  data () {
    return {
    isOpen: false,
    }
    },

}

</script>
<style scoped>
@import '../style/Image.css'; 
</style>