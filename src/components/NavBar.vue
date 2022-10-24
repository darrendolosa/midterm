<template>
  
  <nav>
      <v-toolbar app>
       <v-app-bar-nav-icon @click='toggleDrawer'></v-app-bar-nav-icon>
      <v-toolbar-title >
        <span class="font-weight-light"> </span>
        <span></span>
      </v-toolbar-title>
      <v-spacer></v-spacer>





      </v-toolbar>

     <v-navigation-drawer app v-model="drawer" >
       <v-list-item
          v-for="item in items"
          :key="item.title"
          router 
          :to="item.path" :prepend-icon="item.icon">
          <v-list-item-title>{{ item.title }}</v-list-item-title>

        </v-list-item>

     </v-navigation-drawer>
  </nav>
</template>

<script setup>
  import { ref } from 'vue'
  import vuetify from '../plugins/vuetify';

  const drawer = ref(false)

  const  items =  ref([

          { title: 'Dashboard', icon: 'mdi-mouse', path: '/dashboard' },
           { title: 'Laboratory 1', icon: 'mdi-calculator', path: '/selfone' },
           { title: 'Laboratory 2', icon: 'mdi-monitor', path: '/programming' },
           { title: 'Laboratory 3', icon: 'mdi-remote', path: '/about' },
           { title: 'Research', icon: 'mdi-ab-testing', path: '/selftwo' },
           { title: 'laboratory 4', icon: 'mdi-ruler', path: '/labfour' },
           { title: 'laboratory 5', icon: 'mdi-folder', path: '/axios' },
           { title: 'Midterm Lab', icon: 'mdi-pencil', path: '/quiz' },
        ])

 function toggleDrawer(){
  return drawer.value = !drawer.value
 }
 
 
</script>
<style scoped>


body {
  background-color: lightblue;
}
</style>