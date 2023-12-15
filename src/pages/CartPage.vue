<template>
  <div>
    <h3>Cart page loaded</h3>
    <div>
        <button v-on:click="clearCart">CLEAR CART</button>
    </div>
    <div>
        <div v-for="(product, index) in cart" :key="index">
            <div class="inside">
              <img class="pimg" :src="image" />
              <div class="text">
                <p>{{ product.name }}</p>
                <br />
                <p>PRICE : {{ product.price }}</p>
               <p id="cart"></p>
              </div>
            </div>
          </div>
    </div>
  </div>
</template>
<script src="./js/cart-page"></script>
