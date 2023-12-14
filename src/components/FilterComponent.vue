<template>

  <div class="filter">
    <div>
      <h2>Filters</h2>
    </div>
    <div>
      <!-- <div>{{title1}}</div> -->
      <div v-for="(category, index) in categories" :key="index">
        
        <input type="radio" v-model="selectedValue"  :value = "category" name="category" />
        {{category}}
        </div>
        
        <!-- <productComponent :selected-value="selectedValue"/> -->
    
    </div>
    <br>
    <div class="clear-filters">
      <button  @click="remove">Clear filters</button>
    </div>
  </div>
</template>
<script src="./js/filter.js"></script>
<style scoped>
.filter {
  padding-left: 10px;
  width : 200px;
  padding-top: 80px;
  display: block;
  background-color: whitesmoke;
    margin-top: 70px;
    padding-right: 50px;
}
.main-page{
  display: flex;
}

.categories {
  background-color: whitesmoke;
}
</style>
