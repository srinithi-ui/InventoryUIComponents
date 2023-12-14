<template>
  <div>
    <div>
      <headerComponent :title="'example'" ></headerComponent>
      <!-- <headerComponent :title="'example'" @alert="show"></headerComponent> -->
    </div>

    <div class="main-container">
      
        <filterComponent ></filterComponent>
     

      
        <router-view></router-view>
     
    </div>
  </div>
</template>

<script src="./js/app"></script>

<style lang="scss" scoped>
@import "@blibli/blue-design-tokens/dist/tokens-default.scss";



.main-container {
  display: flex;
  flex-flow: row;
  flex-basis: 0;
  width: 100%;
  border-style: solid;
}





 
</style>
