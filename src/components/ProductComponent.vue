<template>
  <div style="box-shadow: 0 0 10px;
    padding-top: 30px;">
    <div class="products">
     

      <div class="product-container">
        
        <!-- <div class="products-container1"> -->
          <div class="products-block" v-if="showProducts">
            <div v-for="(product, index) in list" :key="index" class="product-item">
             
                <img class="product-image" :src="image" />
                <div class="product-details">
                  <p>{{ product.name }}</p>
                 
                  <p>PRICE : {{ product.price }}</p>
                  <!-- <p v-if="clicked">{{ "Product Added: " + count }}</p> -->
                  <div style="display:flex;justify-content:space-between">
                  <button class="button" v-on:click="increment(index)">+</button>
                  <h3>{{ product.quantity }}</h3>
                  <button class="button" v-on:click="decrement(index)">-</button>
                  </div>
                  

                  <button
                    class="button"
                    v-on:click="adding(product)"
                    id="cart"
                    v-bind:style="{ fontSize: size }"
                  >
                    ADD TO CART
                  </button>
                  <br /><br />

                  <button
                    class="button"
                    v-on:click="update(product.id, product.name)"
                    id="cart"
                    v-bind:style="{ fontSize: size }"
                  >
                    UPDATE PRODUCT
                  </button>
                  <p id="cart"></p>
                </div>
             
            </div>
          </div>
          <div class="products-block" v-else>
            <div v-for="(product, index) in filteredProductsList" :key="index" class="product-item">
              <div class="inside">
                <img class="product-image" :src="image" />
                <div class="product-details">
                  <p>{{ product.name }}</p>
                  
                  <p>PRICE : {{ product.price }}</p>
                  <!-- <p v-if="clicked">{{ "Product Added: " + count }}</p> -->

                  <button v-on:click="incrementfList(index)">+</button>
                  <h3>{{ product.quantity }}</h3>
                  <button v-on:click="decrementfList(index)">-</button>
                  <br><br>
                  <button
                    class="button"
                    v-on:click="adding(product)"
                    id="cart"
                    v-bind:style="{ fontSize: size }"
                  >
                    ADD TO CART
                  </button>
                 
                  <br><br>
                  <button
                    class="button"
                    v-on:click="update(product.id, product.name)"
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
        </div>
      </div>
    </div>
  
</template>

<script src="./js/product.js"></script>

<style lang="scss" scoped>
// .products{
//   box-shadow: 0 0 10px;
//     padding-top: 30px;
// }
.product-container {
  display: flex;
  flex-wrap: wrap;
  
  justify-content: space-around;
}

.product-item {
  margin: 20px;
  padding: 20px;
  border: 1px solid #ddd;
  text-align: center;
}

.product-image {
  width: 100%;
  max-width: 200px;
  height: auto;
  margin-bottom: 10px;
}
.products-block{
 display: flex;
  flex-wrap: wrap;
  
  justify-content: space-around;
}

.product-details h3 {
  margin-bottom: 10px;
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
  background-color: #050709;
}
</style>
