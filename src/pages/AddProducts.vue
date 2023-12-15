<template>
    <div>
        <h1> Adding Products</h1>
        <!-- <form > -->
            <label>Enter Product id</label>
            <input type="number" v-model="id"/>
            <br><br>
            <label>Enter Product Name</label>
            <input type = "text" v-model="name"/>
            <br><br>
            <label>Enter Product Price</label>
            <input type="price" v-model="price"/>
            <br><br>
            <label>Enter Product Quantity</label>
            <input type = "quantity" v-model="quantity"/>
            <br><br>
            <label>Choose the category</label>
            <div v-for="(category, index) in categories" :key="index">
              <input type = "radio" name="category" :value="categories[index]" v-model="selectCategory"> {{index}}
            </div>
            <button type="submit" @click="addProductButton">SUBMIT</button>
        <!-- </form> -->
    </div>
</template>
<script src = './js/add-products.js'>

</script>
