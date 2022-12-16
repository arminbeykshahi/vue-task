<template>
    <div class="single">
    <div class="container mt-5">
    <router-link to="/" class="btn btn-light bg-white shadow"><i class="bi bi-arrow-left"></i> Back</router-link>
     </div>

   <div v-for="item in items" :key="item.id" class="singlepage mt-5 d-flex justify-content-center align-items-center">
     <div class="container">
       <div class="row g-3">
        
         <div class="col-md-6">
           <img :src="item.flags.png" class="w-100 h-100">
         </div>
           <div class="col-md-3">
           
               <h4 class="ms-4">{{item.name}}</h4>
               <ul>
                 <li class="mb-1"><span class="fw-bolder">Native Name:</span> <span>{{item.nativeName}}</span></li>
                 <li class="mb-1"><span class="fw-bolder">Population:</span> <span>{{item.population}}</span></li>
                 <li class="mb-1"><span class="fw-bolder">Region:</span> <span>{{item.region}}</span></li>
                 <li class="mb-1"><span class="fw-bolder">Sub Region:</span> <span>{{item.subregion}}</span></li>
                 <li class="mb-1"><span class="fw-bolder">Capital:</span> <span>{{item.capital}}</span></li>
                  
               </ul>

   
                
             </div>

             <div class="col-md-3">
               <ul class="mt-4">
                 <li class="mb-1"><span class="fw-bolder">Top Level Domain:</span> <span>{{item.topLevelDomain[0]}}</span></li>
                 <li class="mb-1"><span class="fw-bolder">Currencies:</span> <span>{{item.currencies[0].name}}</span></li>
                 <li class="mb-1"><span class="fw-bolder">Languages:</span> <span>{{item.languages[0].name}}</span></li>
                 
               </ul>
             </div>
             </div>
           </div>
             
           
       </div>

       </div>
       
  
   
   
   
</template>

<script>
import { useRoute } from 'vue-router';
import axios from 'axios'
import { ref } from '@vue/reactivity';
export default {
    
    setup() {

      const route = useRoute()
      const items = ref([])

      function getsingleitem() {
        
           axios.get(`https://restcountries.com/v2/name/${route.params.name}`)
           .then(function (response) {
           
             items.value = response.data;
            })
          .catch(function (error) {
          
           console.log(error);
           })
            }

      getsingleitem()

       return {route,getsingleitem,items}
      
      
     
    }
}
</script>

<style>

li {
   
    list-style-type: none;
}

.single {

   width: 100vw;
   height: 100vh;
}

</style>