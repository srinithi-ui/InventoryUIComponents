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
    computed : {
        ...mapState(productStore,["addProducts","categories"])
    },
    methods : {
        ...mapActions(productStore,[
            "ADD_ORDER"
        ]),
        addProductButton(){
            // alert("d")
            const addproducts = {
             id : this.id,
             name  : this.name,
            price : this.price,
            quantity : this.quantity,
            
            category : {
                id : this.selectCategory
            }
            }
            // console.log(this.selectCategory)
            // console.log(addproducts)
            
            this.ADD_ORDER(addproducts)
            
        }
    }
}