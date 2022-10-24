<template>
  
    <div class="team">
      

      <v-carousel>
        <v-carousel-item
        v-for="(item,i) in items"
        :key="i"
        :src="item.src"
        reverse-transition="fade-transition"
        transition="fade-transition"
        ></v-carousel-item>
      </v-carousel>
      
  
      
  
      <v-container class="my-5">
        <h2>About Vuetify</h2><br><br>
On top of Vue.js, Vuetify is a full-featured UI framework. Giving developers the resources they need to create complex and interesting user interfaces is the project's main objective. Vuetify, in contrast to other frameworks, was created from the bottom up to be simple to learn and rewarding to master. It has hundreds of meticulously made components that adhere to the Material Design guideline. Because Vuetify designs for mobile devices first, your application will function correctly on any device—phone, tablet, or desktop—right out of the box.
  
    Vuetify complies with the Material Design specification, meaning the core features of both Vue and Material are available by default and can be improved upon by both communities. In addition, Vuetify offers the following features:

    <li> with Vue CLI-3 and RTL</li>
    <li> for various frameworks, like Cordova, webpack, etc.</li>
   <li> Internationalization</li>
    <li>SSR and PWA</li>
    
    Using Vuetify means you have to embrace Material Design. Therefore, apps intended for the iOS universe are not good candidates for Vuetify. Likewise, if you need a custom design in regards to style as a whole, Vuetify may not suit you, either. As always, you’ll still need to perform a prior, deeper analysis of your project’s needs.
    
    
    <br><br><br><br>
   


  <h2>About Composition API</h2><br><br>
  
    The Options API is used for creating components in Vue 2. With the Options API, you might face two main limitations when building larger Vue apps/components:

    <li>Code that logically belongs together might be split across multiple options (data, method, and computed).</li>
    <li>Reusing logic across multiple components can be tricky or cumbersome.</li>
    The Composition API solves the first problem by allowing you to more easily group relevant code together as your code grows. It solves the second problem by enhancing code reusability using composables. It was created for better extensibility and organization of code since Vue projects became harder to manage as they grew in size and complexity. Also, it offers much better TypeScript support.
 <br><br><br><br>

 <h2>Why We Use Composition API in Vue.JS</h2>
 In Vue.js projects, whenever our application’ scale increases, to reuse functions and to make sure that codes are readable, we need more attention and more time for code review, refactoring and readable/clear code. Although we use Mixins to reuse functions and keep the components clear, they don’t fully meet our needs. I think that we can solve these problems with the Composition API. Today, I will mention ‘Why we use Composition API’ in this article.

  </v-container>


  
   
  
      
    </div>
  </template>
  <script>
    export default {
      data () {
      return {
        items: [
        {
          src: 'https://i2.wp.com/press.monaca.io/wp-content/uploads/2018/09/monaca-vuetify-48.png?w=1118&ssl=1',
        },
        {
          src: 'https://cdn-ak.f.st-hatena.com/images/fotolife/t/taga-min/20181211/20181211140553.png'
        },
        {
          src: 'https://i0.wp.com/codingbeautydev.com/wp-content/uploads/2022/04/vuetify-v-app.png?fit=1366%2C768&ssl=1',
        },
        {
          src: 'https://miro.medium.com/max/1200/1*2X63aTY0kdQ6gHUIy2O3hw.jpeg',
        },



        
        ],
      }
      },
    }
    </script>
  <style>
    h2 {
      font-family: Verdana;
      font-weight: bold;
      text-align: center;
      padding-top: 25px;
      padding-bottom: 25px;
      color: #000000;
      background: peachpuff;
    }
  
      h1 {
        font-family: Verdana;
        font-weight: bold;
        text-align: center;
        padding-top: 25px;
        padding-bottom: 25px;
        color: #000000;
        
      }
  </style>
  