<script setup>
import HomeCategory from './components/HomeCategory.vue'
import HomeBanner from './components/HomeBanner.vue'
import HomeNew from './components/HomeNew.vue'
import HomeHot from './components/HomeHot.vue'
import homeProduct from './components/HomeProduct.vue'
import HomePanel from './components/HomePanel.vue'
</script>

<template>
  <div class="container">
    <HomeCategory />
    <HomeBanner />
  </div>
  <HomeNew />
  <HomeHot />
  <homeProduct />

  <HomePanel title="111" subTitle="333">
    <div>
      chacao
    </div>
  </HomePanel>
   <HomePanel title="222" subTitle="444">
    <div>
      chacao
    </div>
  </HomePanel>
</template>