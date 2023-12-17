<template>
    <div>
        <div class = "header" > 
    <div class = "left">
        <img :src = "img">
         <input  type = "search"  v-model="searchQuery" placeholder="search" @input="search"/>
       <!-- <h3>{{title}}</h3> -->
    </div>
    <div class = "right">
        <div>{{cart.length}}</div>
        <!-- <i class="fas fa-shopping-cart"></i>  -->
        <button class="button" @click="showCart" type="button" >CART </button>

        <button class = "button" @click = "addProducts" type="button">Add Products</button>
        <form action="/">
        <button class = "button" @click="productList" type="button" >ProductsList</button>
       
        </form>
    </div>
</div>
    </div>
</template>
<script src='./js/header.js'>

</script>
<style scoped>

.header{
    display: flex;
    align-items: center;
    justify-content: space-between;
    /* border-style: solid; */
 
}
.left{
    display: flex;
    flex-basis: 0;
    padding-left: 1%;
    padding-top: 1%;
    padding-bottom: 1%;
 
}
img{
    width: 40%;
    height: 40%;
}

.search-bar {
  display: flex;
  align-items: center;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}


 .right{
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.button {
  background-color: #3498db;
 color: #fff;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  margin-right: 10px;
  cursor: pointer;
}

.button:hover {
  background-color: #050709;
}



</style>
