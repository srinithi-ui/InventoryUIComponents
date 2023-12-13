<template>
  <div>
    <div>
      <headerComponent :title="example" @alert="show"></headerComponent>
      
    </div>

    <div class="main-container">
      <div class="filter">
        <filterComponent></filterComponent>
      </div>

      <div class="products">
        <productComponent></productComponent>
      </div>
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




.products {
  display: flex;
  flex-flow: column;
  overflow-x: scroll;
  // border-style:solid;
  width: 100%;
  margin: 10px;
  white-space: nowrap;
}

 
</style>
