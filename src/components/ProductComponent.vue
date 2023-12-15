<template>
  <div>
    <div class="products">
      <div class="products1">
        <div>
          <h2>AVAILABLE PRODUCTS</h2>
          <!-- <h3>Available products : {{ availableCount }}</h3> -->
          
        </div>
      </div>
      <div class="products-container">
        <div>{{selectedValue}}</div>
        <div class="products-container1">
          
          
         <div class = "products-block" v-if="showProducts">
          <div  v-for="(product, index) in list" :key="index">
            <div class="inside">
              <img class="pimg" :src="image" />
              <div class="text">
                <p>{{ product.name }}</p>
                <br />
                <p>PRICE : {{ product.price }}</p>
                <!-- <p v-if="clicked">{{ "Product Added: " + count }}</p> -->
                
                <button v-on:click="increment(index)">+</button>
                <h3>{{ count }}</h3>
                <button v-on:click="decrement(index)">-</button>
                <br><br>
                <button
                  v-on:click="adding(product)"
                  id="cart"
                  v-bind:style="{ fontSize: size }"
                >
                  ADD TO CART
                </button>
                <br><br>
                <button 
                  v-on:click="update(product.id)"
                  id="cart"
                  v-bind:style="{ fontSize: size }"
                >
                 UPDATE PRODUCT
                </button>
                <p id="cart"></p>
              </div>
            </div>
          </div>
        </div>
        <div class = "products-block" v-else>
          <div  v-for="(product, index) in filteredProductsList" :key="index">
            <div class="inside">
              <img class="pimg" :src="image" />
              <div class="text">
                <p>{{ product.name }}</p>
                <br />
                <p>PRICE : {{ product.price }}</p>
                <!-- <p v-if="clicked">{{ "Product Added: " + count }}</p> -->
                
                <button v-on:click="increment(index)">+</button>
                <h3>{{ product.quantity }}</h3>
                <button v-on:click="decrement(index)">-</button>
                <br><br>
                <button
                  v-on:click="adding(product)"
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
      </div>
    </div>
  </div>
  </div>
</template>
<script src="./js/product.js"></script>

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
  flex-wrap: wrap;
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
  height: 100%;
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
  border: 4px;
  overflow-x: scroll;
  background-color: whitesmoke;
  padding: 20px;
}
.images{
  display: flex;
  border: 4px ;
}
.products-block{
  display: flex;
}
.products-container2 {
  display: flex;
  overflow-x: scroll;
  background-color: whitesmoke;
  padding: 20px;
}
</style>
