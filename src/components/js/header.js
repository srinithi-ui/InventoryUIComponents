import logo from "@/assets/images/quinbay.jpeg"

export default{
    props : ['title'],
    emits : ['alert'],
    data(){
       return{
        img : logo
      
       }
    }
}