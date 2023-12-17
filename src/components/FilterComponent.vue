<template>

  <div class="filter-panel">
    
      <h2>Filters</h2>
      <br><br>
    
    <div>
      
      <div style="width:100px" v-for="(category, index) in categories" :key="index">
        
        <input type="radio" v-model="selectedValue" @click="selecting" :value = "category" name="category" />
        {{index}}
        </div>
    </div>
    <br>
    
      <button class="button" @click="remove">Clear filters</button>
   
  </div>
</template>
<script src="./js/filter.js"></script>
<style scoped>
/* Reset some default styles */
 h2, p, input, button {
  margin: 0;
  padding: 0;
}



.filter-panel {
  width: 200px;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin: 50px;
}


input[type="radio"] {
  margin-bottom: 10px;
}

.button {
  background-color: #3498db;
  color: #fff;
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.button:hover {
  background-color: #050709;
}
</style>
