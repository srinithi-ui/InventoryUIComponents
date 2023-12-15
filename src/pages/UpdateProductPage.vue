<template>
    <div>
        <h1>Updating the product</h1>
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
            <button type="submit" @click="updateProductButton">SUBMIT</button>
    </div>

</template>
<script src = './js/update-products.js'>
</script>