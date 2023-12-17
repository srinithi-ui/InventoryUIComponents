import { productStore } from "../../stores/product"
import { mapActions, mapState, mapWritableState } from "pinia";
export default{
    data(){
        return{
            'id':'',
            'name':'',
            'price':'',
            'quantiy':'',
            'categoryId' : '',
            'selectCategory' : null
        }
    },
    mounted(){
        this.name = this.$route.params.name;
        this.GET_PRODUCT_BY_NAME(this.name);
        console.log(this.currentUpdate)
        
    },
    computed : {
        ...mapState(productStore,["addProducts","categories","filteredProductsList","currentUpdate"])
    },
    methods : {
        ...mapActions(productStore,[
            "UPDATE_ORDER","GET_PRODUCT_BY_NAME"
        ]),
        updateProductButton(){
            // alert("d")
            const addproducts = {
             id : this.id,
             name  : this.name,
            price : this.price,
            quantity : this.quantity,
            
            category : {
                id : 1
            }
            }
            this.UPDATE_ORDER(addproducts)
            alert("Product updated")
            
        }
    }

}