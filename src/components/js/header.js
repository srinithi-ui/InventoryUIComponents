import logo from "@/assets/images/quinbay.jpeg"
import { mapActions, mapState, mapWritableState } from "pinia";
import {productStore} from "../../stores/product.js";

export default{
    
    

    props : ['title'],
    emits : ['alert'],
    data(){
       return{
        searchQuery : null,
        img : logo
      
       }
    },
    computed: {
        ...mapState(productStore, [
          "products",
          "cart",
          "setFilterTrue",
          "setFilterFalse",
          "remove",
          "list",
          "filterProductsBySearch"
        ]),
    },
    watch:{
        searchQuery : {
            handler(search){
                // console.log(search)
            // if(search.length > 0 ) this.list = this.list.filter(product => product.name.toLowerCase().startsWith(search.toLowerCase()))
                
                this.filterProductsBySearch(search)
            }
        },

    },
    methods:{
        showCart(){
            this.setFilterFalse();
            console.log(this.showFilter+"dw");
            this.$router.push("/cart");
            console.log(cart);
           
        },
        productList(){
            this.setFilterTrue();
            this.$router.push("/");
        },
        addProducts(){
            this.setFilterFalse();
           
            this.$router.push("/addProducts")
            
        }
    }
}