<template>

 <div v-if="showspinner" class="d-flex justify-content-center mt-5 ">
  <div class="spinner-border" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
</div>

<br>
<br>
<br>
 
  <div class="filters d-flex justify-content-between align-items-center">
      <div class="container">
          <div class="row g-3">
              <div class="col-md-6">
                   <form @submit.prevent="filtercountry"> 
                  <input v-model="name" type="text" class="form-control search" placeholder="        seach for a country..." >
                   <i class="bi bi-search"></i>
                   <button v-if="displaybutton" type="submit" class="btn btn-primary">submit</button>
                </form> 
              </div>
              <div class="col-md-6">
                   <div class=" w-50 ms-auto" @change="filterregion">
                   <select class="form-select" v-model="region" placeholder="Filter by Region">
                   <option value="" selected disabled hidden>Filter by Region</option>
                   <option value="Africa">Africa</option>
                   <option value="Americas">America</option>
                   <option value="Asia">Asia</option>
                   <option value="Europe">Europe</option>
                   <option value="Oceania">Oceania</option>
                 </select>
               </div>
              </div>
          </div>
      </div>
  </div>
 
 <div class="countries mt-5">
     <div class="container">
          <div class="row g-5">
                
                  <div class="col-md-3" v-for="country in countries" :key="country.id" >  
                 
                   <div class="card border-0 shadow-sm h-100 mx-auto"  style="width: 14rem;">
                  <img :src="country.flags.svg" class="card-img-top" alt="...">
                 <div class="card-body">
          <router-link :to="{ name: 'country', params: { name: country.name}}">
               <h5 class="card-title">{{country.name}}</h5>
               
          </router-link> 
           
          
             <span class="details">Population:</span>  <span class="card-text">{{country.population}}</span>
              <br>
             <span class="details">Region:</span> <span class="card-text">{{country.region}}</span>
              <br>
              <span class="details">Capital:</span> <span class="card-text">{{country.capital}}</span>
              
           
         </div>
</div>
                  
</div>
          </div>
          </div>
     
 </div>
  

 


</template>

<script>

import axios from 'axios'
import { ref } from '@vue/reactivity'
export default {
  
  setup() {

      const countries = ref([])
      const region = ref('')
      const name = ref('')
      const displaybytton = ref(false)
      const showspinner = ref(true)

      function getcountries() {
          
          axios.get('https://restcountries.com/v2/all')
         .then(function (response) {
      
             countries.value = response.data

             showspinner.value = false
          })
          .catch(function (error) {
         
           console.log(error);
  })
      }

      getcountries()


      function filterregion() {
          

          axios.get(`https://restcountries.com/v2/region/${region.value}`)
          .then(function (response) {
          
                countries.value = response.data
           })
           .catch(function (error) {
           
           console.log(error);
          })
           
      }

      filterregion()


      function filtercountry() {
          

          axios.get(`https://restcountries.com/v2/name/${name.value}`)
         .then(function (response) {
    
              countries.value =  response.data
         })
        .catch(function (error) {
    
         console.log(error);
  })
      }

      filtercountry()

      


      return {countries,getcountries,filterregion,region,name,filtercountry,displaybytton,showspinner}
  }
   
}
</script>

<style>
 

 .search {

     position: relative;
 }

 .bi-search {

     position: absolute;
     margin-top:-30px;
     margin-left: 20px;
 }

 .selectable {

     width: 2rem;
 }

 .details {

     font-weight: 500;
 }
 
 a {

     cursor: pointer;
 }

 .card-body {

      color: black !important;
 }





</style>