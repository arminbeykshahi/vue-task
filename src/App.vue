<template>
   
  
   <div :class="{background : set}">

 <div class="header d-flex justify-content-between align-items-center shadow-sm">
   
   
   <div class="header-text">
     <router-link to="/"><h5 :class="{changecolor : change}">Where in the world?</h5></router-link>
   </div>

   <div @click="setdarkmode" class="header-logo">
     <i class="bi bi-moon me-1"></i>
        <span>Dark Mode</span>
   </div>
    

  </div>

 
 <router-view></router-view>

  </div>

   
</template>

<script>
import { ref } from '@vue/reactivity'



export default {
 
  components: {
    
   
  },

  setup() {
   
   const set = ref(true)

   const change = ref(true)

   


   function setdarkmode() {
       
        set.value = !set.value
        change.value = !change.value
       
   }

   setdarkmode()
 

  return {set,setdarkmode,change}
    
  }
}
</script>


 <style>
      
      .background {
         
         height: 100%;
         width: 100%;
         color: white;
         background-color: hsl(207, 26%, 17%)
         
         
      }

      .changecolor {

         color: white;
      }


     

      .header {

     width: 100%;
     height: 4rem;
     
}

.bi-moon {

     font-weight: bold;
}


.header-text {

  margin-left: 6.5rem;
}


.header-logo {

  margin-right: 6.5rem ;

  cursor: pointer;
}

a {

  color : black !important;

  text-decoration: none !important;
}


@media only screen and (max-width: 768px) {
 

   .header-text {

  margin-left: 1rem;
}

.header-logo {

  margin-right: 1rem ;
}



}


       
 </style>
