<template>
    <h1>Axios Demo</h1>
  
    <p>{{covidData}} </p>
    
      
    
</template>

<script setup>
  import { ref, onMounted } from 'vue';
  import axios from 'axios'

  const  covidData=ref([])


  async function getCovidData () {
       axios({
                method:'get',
                url:'https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/npm-covid-data/', 
                params: {'date':'2020-04-07'},
                headers: {
                          'X-RapidAPI-Key': 'fdf9cf7515mshb5ee634f73efdf8p1de986jsnb131ff8174cd',
                          'X-RapidAPI-Host': 'vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com'
                        }  
            }).then( response => {
       covidData.value=response.data;
       console.log(covidData.value)
      })
  
  }



   onMounted( async () => {
       await getCovidData()
   })

  
</script>

