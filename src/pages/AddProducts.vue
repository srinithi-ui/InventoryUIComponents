<template>
    <div class="container">
        <h1> Adding Products</h1>
        <form action="/">
            <label>Enter Product id</label>
            <input type="number" v-model="id" required/>
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
        </form>
    </div>
</template>
<script src = './js/add-products.js'>

</script>
<style scoped>
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
