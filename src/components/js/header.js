import logo from "@/assets/images/quinbay.jpeg"
import { mapActions, mapState, mapWritableState } from "pinia";
import {productStore} from "../../stores/product.js";

export default{
    mounted(){
        console.log(this.$refs.input.focus())
    },
    

    props : ['title'],
    emits : ['alert'],
    data(){
       return{
        img : logo
      
       }
    },
    computed: {
        ...mapState(productStore, [
          "products",
          "cart"
        ]),
    },
    methods:{
        showCart(){
            console.log(cart);
            this.$router.push("/cart");
        },
        productList(){
            this.$router.push("/");
        },
        addProducts(){
            this.$router.push("/addProducts")
        }
    }
}