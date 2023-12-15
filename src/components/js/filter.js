import { mapActions, mapState, mapWritableState } from "pinia";
import {productStore} from "../../stores/product.js";

export default{
    props : ['title1'],
    data(){
        return{
            selectedValue : null,
            // categories : ["Mobile", "Beauty"]
        }
    },
    computed : {
        ...mapState(productStore,["products","filteredProductsList", "categories","showProducts"]),
        
    },
    methods : {
        ...mapActions(productStore,[
            "filterProductStoreByCategory","filteredProductsList","remove","showProductsFunc"
          ]),
          selecting(){
            this.showProductsFunc()
          }
        },
    watch: {
        selectedValue: {
            
          handler(category) {
            // this.showProductsFunc(),
              console.log(this.filteredProductsList) 
            this.filterProductStoreByCategory(category);
            console.log("watch category: ", category);
          },
          
          
          immediate: true,
        },
    }
         
         
    
    

}