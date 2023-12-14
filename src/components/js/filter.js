import { mapActions, mapState, mapWritableState } from "pinia";
import {productStore} from "../../stores/product.js";
import productComponent from "@/components/ProductComponent.vue"

export default{
    props : ['title1'],
    data(){
        return{
            selectedValue : null,
            categories : ["Mobile", "Beauty"]
        }
    },
    watch: {
        selectedValue: {
          handler(category) {
            this.filterProductStoreByCategory(category);
            console.log("watch category: ", category);
          },
          immediate: true,
        },
    },
    computed : {
        ...mapState(productStore,["products","filteredProductsList"]),
        
    },
    methods : {
        ...mapActions(productStore,[
            "filterProductStoreByCategory","filteredProductsList","remove"
          ]),
         
         
        
    },
    components:{
        productComponent
    }

}