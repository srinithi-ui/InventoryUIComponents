<template>
    <div>
        <div class = "header" > 
    <div class = "left">
        <img :src = "img">
         <input type = "search" placeholder="search" ref="input"/>
       <!-- <h3>{{title}}</h3> -->
    </div>
    <div class = "right">
        <div>{{cart.length}}</div>
        <!-- <button class="button" @click="$emit('alert',title)" type="button">Cart</button> -->
        <button class="button" @click="showCart" type="button">Cart </button>
        
        <!-- <button class = "button" type="button">AddProduct</button> -->
        <button class = "button1" @click="productList" type="button">ProductsList</button>
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
    border-style: solid;
 
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



 .right{
    display: flex;
    align-items: center;
    justify-content: space-between;
}


</style>
