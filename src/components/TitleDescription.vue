
<template>
    <div>
        <p class="title">
             {{title}}
        </p>

        <div class="containerCdescription"> 
          <p class="description">{{description}}</p>
        </div>
        
          
        
      
    </div>
</template>

<script>
export default {
  name: 'Description',
  props: ['description','title'],
   
  data () {
    return {
      isOpen: false,
      }
    },
   
}

</script>
<style scoped>
@import '../style/TitreDescription.css'; 
</style>