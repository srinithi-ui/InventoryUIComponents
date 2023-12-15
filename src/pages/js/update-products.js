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
        this.id = this.$route.params.id;

        
    },
    computed : {
        ...mapState(productStore,["addProducts","categories"])
    },
    methods : {
        ...mapActions(productStore,[
            "UPDATE_ORDER"
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
            // console.log(this.selectCategory)
            // console.log(addproducts)
            
            this.UPDATE_ORDER(addproducts)
            
        }
    }

}