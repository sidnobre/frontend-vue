<template>
  <div id="app">
    <nav class="nav-extended  deep-purple darken-4">
      <div class="nav-content">
        <ul class="tabs tabs-transparent">
          <li class="tab"> <router-link to="/loja">Loja</router-link></li>
          <li class="tab"><router-link to="/produto">Produto</router-link></li>
        </ul>
      </div>
    </nav>

    <router-view class="" name="main"></router-view>
  </div>
</template>

<script>

  // import Loja from './components/Loja'
  // import Produto from './components/Produto'


   export default {
     name: 'app',
  //   components:{
  //     Loja,
  //     Produto
  //   }
   }

</script>