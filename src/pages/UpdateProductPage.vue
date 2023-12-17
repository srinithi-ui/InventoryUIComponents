<template>
    <div class="container">
        <h1>Updating the product</h1>
        <form action='/'>
         <label>Enter Product id</label>
            <input type="number" v-model="id" :placeholder="currentUpdate.id"/>
            <br><br>
            <label>Enter Product Name</label>
            <input type = "text" v-model="name" :placeholder="currentUpdate.name"/>
            <br><br>
            <label>Enter Product Price</label>
            <input type="price" v-model="price" :placeholder="currentUpdate.price"/>
            <br><br>
            <label>Enter Product Quantity</label>
            <input type = "quantity" v-model="quantity" :placeholder="currentUpdate.quantity"/>
            <br><br>
            <button type="submit" @click="updateProductButton">SUBMIT</button>
        </form>
    </div>

</template>
<script src = './js/update-products.js'>
</script>
<style scoped>
/* Reset some default styles */
 h1, input, button {
  margin: 0;
  padding: 0;
  
}

body {
  font-family: 'Arial', sans-serif;
  background-color: #f4f4f4;
  padding-left: 200px;
}

.container {
  max-width: 400px;
  margin: 50px auto;
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

h1 {
  text-align: center;
  margin-bottom: 20px;
}

form {
  display: flex;
  flex-direction: column;
}

label {
  margin-bottom: 8px;
  font-weight: bold;
}

input {
  padding: 10px;
  margin-bottom: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  padding: 10px;
  background-color: #3498db;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #2980b9;
}



</style>