<template>
<div class = "filter">
        <div>
            <h2 >Filters</h2>
        </div>
        <div class = "categories" >  
            <!-- <p> -->
            
                <div>Selected Categories {{ checkedCategories }}</div>

            <input type="checkbox" id="price" value="Price" v-model="checkedCategories" />
            <label for="price">Price</label>
            <br>
            <input type="checkbox" id="brand" value="Brand" v-model="checkedCategories" />
            <label for="brand">Brand</label>
            <br>
            <input type="checkbox" id="customerRating" value="Customer Rating" v-model="checkedCategories" />
            <label for="rating">Customer Rating</label>
            <br>
            <input type="checkbox" id="discount" value="Discount" v-model="checkedCategories" />
            <label for="discount">Discount</label>
            <br><br>
            <section>Price</section>
            
            <input type="text"  placeholder="Enter the price range">
            <br><br>
            <section>Brand</section>
            <input type="checkbox">NOKIA<br>
            <input type="checkbox">APPLE<br>
            <input type="checkbox">SAMSUNG
            <br><br>
            <section>CustomerRating</section>
            <input type="checkbox">4*<br>
            <input type="checkbox">5*<br>
            <br><br>
            <section>Discount</section>
            <input type="radio" name="discount" id = "40">Above 40%<br>
            <input type="radio" name="discount" id = "50">Above 50%
            <br><br>
            
        </div>

    </div>
</template>
<script src='./js/filter.js'>
</script>
<style scoped>

</style>
