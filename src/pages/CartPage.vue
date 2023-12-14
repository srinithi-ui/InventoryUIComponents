<template>
  <div>
    <h3>Cart page loaded</h3>
    <div>
        <button v-on:click="clearCart">CLEAR CART</button>
    </div>
    <div>
        <div v-for="(product, index) in cart" :key="index">
            <div class="inside">
              <img class="pimg" :src="product.img" />
              <div class="text">
                <p>{{ product.name }}</p>
                <br />
                <p>PRICE : {{ product.price }}</p>
                <!-- <p v-if="clicked">{{ "Product Added: " + count }}</p>
                <h3>{{ product.quantity }}</h3>
                <button v-on:click="increment(index)">+</button> -->
                <!-- <button
                  v-on:click="adding(product)"
                  id="cart"
                  v-bind:style="{ fontSize: size }"
                >
                  ADD TO CART
                </button> -->
                <!-- <button v-on:click="decrement(index)">-</button> -->
                <p id="cart"></p>
              </div>
            </div>
          </div>
    </div>
  </div>
</template>
<script src="./js/cart-page"></script>
