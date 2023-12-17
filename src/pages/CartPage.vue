<template>
  <div>
    <h3>CART PAGE</h3>

    <div class="container" v-if="cart.length>0 ? true : false">
      <div class="product-card" v-for="(product, index) in cart" :key="index">
        <img class="product-image" :src="image" />
        <div class="product-details">
          <div class="product-title">{{ product.name }}</div>
          <br />
          <div class="product-quantity">QUANTITY : {{ product.quantity }}</div>
          <div class="product-price">PRICE : {{ product.price }}</div>
          <button v-on:click="increment(index)">+</button>
                <h3>{{ product.quantity }}</h3>
                <button v-on:click="decrement(index)">-</button>
                <br><br>

        <!-- <form action="/"> -->
          <button class="button" type="submit" @click="placeOrder(product)">
            Proceed to Order
          </button>
        <!-- </form> -->
        <div>
          <br /><br />
          <button class="button" @click="clearCart(product.id)">REMOVE</button>
          </div>
        </div>
      </div>
    </div>
  <div v-else>
    <h2>CART IS EMPTY</h2>
  </div>
  </div>
</template>
<script src="./js/cart-page"></script>
<style scoped>
/* Reset some default styles */
input,
button {
  margin: 0;
  padding: 0;
}

.container {
  max-width: 800px;
  margin-left: 40px;
  background-color: #fff;
  padding: 20px;
  /* border-radius: 8px; */
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  display: flex;
}

.product-card {
  border: 1px solid #ddd;
  padding: 20px;
  margin-bottom: 20px;
}

.product-image {
  max-width: 100%;
  height: auto;
  border-radius: 4px;
}

.product-details {
  margin-top: 15px;
  margin-left : 30px;
}

.product-title {
  font-size: 18px;
  font-weight: bold;
  color: #3498db;
}

.product-price {
  font-size: 16px;
  color: #3498db;
}

.product-quantity {
  margin-top: 10px;
  color: #3498db;
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
  background-color: #2980b9;
}
</style>
