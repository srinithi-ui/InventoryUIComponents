<template>
    <div>
        <div class="products">
        <div class="products1">
          <div>
            <h2>Best of Electronics</h2>
            <h3>Available products : {{ availableCount }}</h3>
          </div>
        </div>
        <div class="products-container">
          <div class="products-container1">
            <div v-for="product in products" :key="product">
              <div class="inside">
                <img class="pimg" :src="product.img" />
                <div class="text">
                  <p>{{ product.name }}</p>
                  <br />
                  <p>PRICE : {{ product.price }}</p>
                  <p v-if="clicked">{{ "Product Added: " + count }}</p>
                  <button
                    v-on:click="count++"
                    id="cart"
                    v-bind:style="{ fontSize: size }"
                  >
                    ADD TO CART
                  </button>
                  <p id="cart"></p>
                </div>
              </div>
            </div>
          </div>

          <div><h2>Other products</h2></div>
          <div class="products-container2">
            <div v-for="product in products" :key="product">
              <div class="inside">
                <img class="pimg" :src="product.img" />
                <div class="text">
                  <p>{{ product.name }}</p>
                  <br />
                  <p>{{ product.price }}</p>
                  <button onclick="cart()">ADD TO CART</button>
                  <p id="cart"></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>
<script src = "./js/product.js">

</script>

 <style scoped>
.main-container {
  display: flex;
  flex-flow: row;
  flex-basis: 0;
  width: 100%;
  border-style: solid;
}


.categories {
  padding: 20px;
  margin: 10px;
  background-color: whitesmoke;
}

.products {
  display: flex;
  flex-flow: column;
  overflow-x: scroll;
  
  width: 100%;
  margin: 10px;
}
.products1 {
  display: flex;
  overflow-x: scroll;
  
}
.inside {
  display: block;
  justify-content: normal;
  padding-left: 10%;
  
}

.pimg {
  width: 100%;
  height: 60%;
}
.text {
  padding: 10%;

  color: rgb(83, 13, 203);
}
.products-container {
  display: block;
}
.products-container1 {
  display: flex;
  overflow-x: scroll;
  background-color: whitesmoke;
  padding: 20px;
}

.products-container2 {
  display: flex;
  overflow-x: scroll;
  background-color: whitesmoke;
  padding: 20px;
}

</style>
