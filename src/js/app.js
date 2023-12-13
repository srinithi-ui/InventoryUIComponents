import img from "@/assets/images/download.jpeg"
import logo from "@/assets/images/quinbay.jpeg"
import headerComponent from "@/components/Header.vue"
import filterComponent from "@/components/FilterComponent.vue"
import productComponent from "@/components/ProductComponent.vue"
export default{
  components:{
    headerComponent,
    filterComponent,
    productComponent
  },
  data(){
    
    return {
      example : "examplesend",
      count : 0,
      clicked : true,
      // "logoImg" : logo,
      size : '15px',
      
      
    }
  },
  
    methods: {
      show(title){
        alert(title);
      }
    }

  }

  
  
